import { VerificationService } from '../verification/verification.service';
import { RecaptchaService } from '../recaptcha/recaptcha.service';
import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { IHttpRequest, IHttpResponse } from 'nanoexpress';
import { ActionPayload } from '../typings/action-payload';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { HasuraService } from '../hasura/hasura.service';
import { LibPnService } from '../lib-pn/lib-pn.service';
import { ActionException } from '../action-exception';
import { AuthService } from '../auth/auth.service';
import { MiscService } from '../misc/misc.service';
import { ChangeErr, CommonErr } from '../errors';
import isEmail from 'validator/lib/isEmail';
import { Config } from '../config/config';

import {
  Action_Resp_Bool,
  Misc_Verification_Type_Enum,
  Mutation_RootChange_EmailArgs,
  Mutation_RootChange_MobileArgs,
  Mutation_RootChange_PasswordArgs,
  Mutation_RootChange_Reset_PasswordArgs,
  User,
  Verification_Resp,
} from '../typings';

@Controller('change-action')
export class ChangeActionController {
  constructor(
    private readonly verificationService: VerificationService,
    private readonly recaptchaService: RecaptchaService,
    private readonly bcryptService: BcryptService,
    private readonly hasuraService: HasuraService,
    private readonly libPnService: LibPnService,
    private readonly authService: AuthService,
    private readonly miscService: MiscService,
    private readonly config: Config,
  ) {
  }

  @Post('password')
  async changePassword(
    @Body() { input: { payload }, session_variables }: ActionPayload<Mutation_RootChange_PasswordArgs>,
  ): Promise<Action_Resp_Bool> {
    await this.miscService.wait(2);

    const id = Number(session_variables['x-hasura-user-id']);
    const user = await this.hasuraService.requestNFirst<User>({
      queryPath: './graphql/get-user.graphql',
      root: 'user',
      variables: {
        conditions: {
          id: {
            _eq: id,
          },
        },
      },
    });

    if (payload.new.length < 8) {
      throw new ActionException(ChangeErr.PASSWORD_LENGTH_MIN);
    } else if (payload.new.length > 16) {
      throw new ActionException(ChangeErr.PASSWORD_LENGTH_MAX);
    }

    if (!(await this.bcryptService.compare(payload.old, user.password))) {
      throw new ActionException(CommonErr.INCORRECT_PASSWORD);
    }

    await this.hasuraService.request({
      queryPath: './graphql/change-password.graphql',
      variables: {
        id,
        password: await this.bcryptService.hash(payload.new),
      },
    });

    return {
      succeeded: true,
    };
  }

  @Post('mobile')
  async changeMobile(
    @Body() { input, session_variables }: ActionPayload<Mutation_RootChange_MobileArgs>,
    @Res({ passthrough: true }) response: IHttpResponse,
  ): Promise<Verification_Resp> {
    if (!(await this.authService.checkIsUserVerified(Number(session_variables['x-hasura-user-id'])))) {
      throw new ActionException(CommonErr.ACCOUNT_NOT_VERIFIED);
    }

    if (!this.libPnService.validate(input.mobile)) {
      throw new ActionException(ChangeErr.INVALID_MOBILE_NUMBER);
    }

    const formatted = this.libPnService.format(input.mobile);

    if (!(await this.miscService.canUserUseThis('mobile', input.mobile))) {
      throw new ActionException(ChangeErr.MOBILE_TAKEN);
    }

    try {
      const verification = await this.verificationService.create(
        Misc_Verification_Type_Enum.Mobile,
        Number(session_variables['x-hasura-user-id']),
        formatted,
      );

      response.cookie(this.config.verification.cookieKey.mobile, verification.key, {
        expires: new Date(verification.expires_at).getTime(),
        httpOnly: true,
        secure: true,
      });

      return {
        id: verification.id,
      };
    } catch (e) {
      if (e === this.verificationService.errorCodes.maxItems) {
        throw new ActionException(ChangeErr.TOO_MANY_REQUEST);
      } else {
        throw new ActionException(ChangeErr.MEDIUM_BLOCKED);
      }
    }
  }

  @Post('email')
  async changeEmail(
    @Body() { input, session_variables }: ActionPayload<Mutation_RootChange_EmailArgs>,
    @Res({ passthrough: true }) response: IHttpResponse,
  ): Promise<Verification_Resp> {
    if (!(await this.authService.checkIsUserVerified(Number(session_variables['x-hasura-user-id'])))) {
      throw new ActionException(CommonErr.ACCOUNT_NOT_VERIFIED);
    }

    if (!isEmail(input.email)) {
      throw new ActionException(ChangeErr.INVALID_EMAIL_ADDRESS);
    }

    if (!(await this.miscService.canUserUseThis('email', input.email))) {
      throw new ActionException(ChangeErr.EMAIL_TAKEN);
    }

    try {
      const verification = await this.verificationService.create(
        Misc_Verification_Type_Enum.Email,
        Number(session_variables['x-hasura-user-id']),
        input.email,
      );

      response.cookie(this.config.verification.cookieKey.email, verification.key, {
        expires: new Date(verification.expires_at).getTime(),
        httpOnly: true,
        secure: true,
      });

      return {
        id: verification.id,
      };
    } catch (e) {
      if (e === this.verificationService.errorCodes.maxItems) {
        throw new ActionException(ChangeErr.TOO_MANY_REQUEST);
      } else {
        throw new ActionException(ChangeErr.MEDIUM_BLOCKED);
      }
    }
  }

  @Post('password-reset')
  async resetPassword(
    @Body() { input: { payload } }: ActionPayload<Mutation_RootChange_Reset_PasswordArgs>,
    @Req() request: IHttpRequest,
    @Res({ passthrough: true }) response: IHttpResponse,
  ): Promise<Verification_Resp> {
    if (this.config.app.env === 'production') {
      await this.recaptchaService.verify(payload.tokenV3, 'res-pass', request.getIP(), payload.tokenV2, 0.9);
    }

    const identity = this.miscService.getIdentityType(payload.username);

    const user = await this.hasuraService.requestNFirst<User>({
      queryPath: './graphql/get-user.graphql',
      root: 'user',
      variables: {
        conditions: {
          [identity.type]: {
            _eq: identity.value,
          },
        },
      },
    });

    if (!user) {
      response.cookie(this.config.verification.cookieKey.resetPass, await this.miscService.generateRandomString(16), {
        expires: new Date(Date.now() + 900000).getTime(),
        httpOnly: true,
        secure: true,
      });

      return {
        id: await this.miscService.generateRandomNumber(7),
      };
    }

    try {
      let verificationPayload = payload.medium === 'EMAIL' ? user.email : user.mobile;

      if (!verificationPayload) {
        verificationPayload = user.email;
      }

      const verification = await this.verificationService.create(
        Misc_Verification_Type_Enum.PasswordReset,
        user.id,
        verificationPayload,
      );

      response.cookie(this.config.verification.cookieKey.resetPass, verification.key, {
        expires: new Date(verification.expires_at).getTime(),
        httpOnly: true,
        secure: true,
      });

      return {
        id: verification.id,
      };
    } catch (e) {
      if (e === this.verificationService.errorCodes.maxItems) {
        throw new ActionException(ChangeErr.TOO_MANY_REQUEST);
      } else {
        throw new ActionException(ChangeErr.MEDIUM_BLOCKED);
      }
    }
  }
}
