import { VerificationService } from '../verification/verification.service';
import { RecaptchaService } from '../recaptcha/recaptcha.service';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { ActionPayload } from '../typings/action-payload';
import { HasuraService } from '../hasura/hasura.service';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { LibPnService } from '../lib-pn/lib-pn.service';
import { ActionException } from '../action-exception';
import { RecaptchaAction } from './recaptcha-action';
import { MiscService } from '../misc/misc.service';
import { SmsService } from '../sms/sms.service';
import { CommonErr, RegErr } from '../errors';
import isEmail from 'validator/lib/isEmail';
import { IHttpRequest } from 'nanoexpress';
import { Config } from '../config/config';

import {
  Action_Resp_Bool,
  Misc_Verification_Type_Enum,
  Mutation_RootCreate_AccountArgs,
  User,
} from '../typings';

@Controller('registration-action')
export class RegistrationActionController {
  constructor(
    private readonly verificationService: VerificationService,
    private readonly recaptchaService: RecaptchaService,
    private readonly bcryptService: BcryptService,
    private readonly hasuraService: HasuraService,
    private readonly libPnService: LibPnService,
    private readonly miscService: MiscService,
    private readonly smsService: SmsService,
    private readonly config: Config,
  ) {
  }

  @Post('create-account')
  async createAccount(
    @Body() { input: { payload } }: ActionPayload<Mutation_RootCreate_AccountArgs>,
    @Req() request: IHttpRequest,
  ): Promise<Action_Resp_Bool> {
    if (payload.password.length < 8) {
      throw new ActionException(RegErr.PASSWORD_LENGTH_MIN);
    } else if (payload.password.length > 16) {
      throw new ActionException(RegErr.PASSWORD_LENGTH_MAX);
    } else if (payload.username && !/^(?=.{5,20}$)(?![_.\-])(?!.*[_.\-]{2})[a-zA-Z0-9._\-]+(?<![_.\-])$/.test(payload.username)) {
      throw new ActionException(RegErr.INVALID_USERNAME);
    } else if (!this.libPnService.validate(payload.mobile)) {
      throw new ActionException(RegErr.INVALID_MOBILE);
    }

    if (this.config.app.env === 'production') {
      // Verify recaptcha
      await this.recaptchaService.verify(payload.tokenV3, RecaptchaAction.verify, request.getIP(), payload.tokenV2);

      if (payload.email) {
        // Validate email address
        if (!isEmail(payload.email, { require_tld: true, allow_ip_domain: false })) {
          throw new ActionException(RegErr.INVALID_EMAIL);
        }

        // Don't allow disposable email address
        try {
          await this.miscService.checkDisposableEmail(payload.email);
        } catch (e) {
          throw new ActionException(RegErr.DISPOSABLE_EMAIL_NOT_ALLOWED);
        }
      }
    }

    const mobileFormatted = this.libPnService.format(payload.mobile);

    type CheckResultType = {
      mobileUser: User[]
      emailUser?: User[]
    };

    const { mobileUser, emailUser } = await this.hasuraService.request<CheckResultType>({
      queryPath: './graphql/check.graphql',
      variables: {
        email: payload.email,
        hasEmail: !!payload.email,
        mobile: mobileFormatted,
      },
    });

    if (mobileUser.length) {
      throw new ActionException(RegErr.MOBILE_TAKEN);
    } else if (emailUser?.length) {
      throw new ActionException(RegErr.EMAIL_TAKEN);
    }

    // TODO: Use transaction when hasura transaction feature is available

    try {
      const user = await this.hasuraService.request<User>({
        queryPath: './graphql/insert-user.graphql',
        root: 'insert_user_one',
        variables: {
          data: {
            name: payload.name,
            mobile: payload.mobile,
            username: payload.username,
            type: payload.type,
            password: await this.bcryptService.hash(payload.password),
          },
        },
      });

      if (!payload.username) {
        await this.hasuraService.request({
          queryPath: './graphql/update-username.graphql',
          variables: {
            userId: user.id,
            username: `user-${user.id}${await this.miscService.generateRandomNumber()}`,
          },
        });
      }

      // Create mobile verification
      this.verificationService.create(
        Misc_Verification_Type_Enum.Mobile,
        user.id,
        mobileFormatted,
        true,
        true,
      );

      // Create email verification
      if (payload.email) {
        await this.verificationService.create(
          Misc_Verification_Type_Enum.Email,
          user.id,
          payload.email,
          true,
          true,
        );
      }

    } catch (e) {
      console.error(e);
      throw new ActionException(CommonErr.UNEXPECTED);
    }

    return {
      succeeded: true,
    };
  }
}
