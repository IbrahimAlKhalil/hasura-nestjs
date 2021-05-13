import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { ActionPayload } from '../typings/action-payload';
import { HasuraService } from '../hasura/hasura.service';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { LibPnService } from '../lib-pn/lib-pn.service';
import { CommonErr, VerificationErr } from '../errors';
import { ActionException } from '../action-exception';
import { MiscService } from '../misc/misc.service';
import isEmail from 'validator/lib/isEmail';
import { Request, Response } from 'express';

import {
  Action_Resp_Bool,
  Misc_Verification,
  Mutation_RootVerification_EditArgs,
  Mutation_RootVerification_ResendArgs,
  Mutation_RootVerificationArgs,
} from '../typings';
import { Config } from '../config/config';

@Controller('verification-action')
export class VerificationActionController {
  constructor(
    private readonly verificationService: VerificationService,
    private readonly hasuraService: HasuraService,
    private readonly bcryptService: BcryptService,
    private readonly libPnService: LibPnService,
    private readonly miscService: MiscService,
    private readonly config: Config,
  ) {
  }

  private readonly cookieKey = {
    PASSWORD_RESET: this.config.verification.cookieKey.resetPass,
    EMAIL: this.config.verification.cookieKey.email,
    MOBILE: this.config.verification.cookieKey.mobile,
  };

  @Post('verify')
  async verify(
    @Body() { input: { payload }, session_variables }: ActionPayload<Mutation_RootVerificationArgs>,
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
  ): Promise<Action_Resp_Bool> {
    const verification = await this.verificationService.getVerification(payload.id);

    // Check expiration
    if (!verification) {
      throw new ActionException(VerificationErr.TOKEN_EXPIRED);
    }

    const sessionUserId = verification.type === 'PASSWORD_RESET' ? verification.user_id : Number(session_variables['x-hasura-user-id']);

    // Check verification ownership
    if (verification.user_id !== sessionUserId) {
      throw new ActionException(CommonErr.UNAUTHORIZED);
    }

    const key = this.miscService.getCookie(request.headers.cookie, this.cookieKey[verification.type]);

    // Check key and token
    if ((verification.key && (key !== verification.key)) || payload.token !== verification.token) {
      throw new ActionException(VerificationErr.INVALID_TOKEN_OR_KEY);
    }

    // Payload must exist in the user input in case of password reset
    if (verification.type === 'PASSWORD_RESET' && !payload.payload) {
      throw new ActionException(VerificationErr.PAYLOAD_REQUIRED);
    }

    const variables: Record<string, string | number | Record<string, string | number>> = {
      id: verification.user_id,
    };
    let query: string;

    if (verification.type === 'PASSWORD_RESET') {
      variables.password = await this.bcryptService.hash(payload.payload);
      query = 'reset-password';
    } else {
      variables.set = {
        [verification.type.toLowerCase()]: verification.payload,
      };
      variables.id = Number(session_variables['x-hasura-user-id']);
      query = 'update-user';
    }

    // TODO: Use transaction

    try {
      await this.hasuraService.request({
        queryPath: `./graphql/${query}.graphql`,
        variables,
      });
    } catch (e) {
      throw new ActionException(CommonErr.UNEXPECTED);
    }

    await this.hasuraService.request({
      queryPath: './graphql/delete-verification.graphql',
      variables: { id: payload.id },
    });

    response.clearCookie(this.cookieKey[verification.type]);

    return {
      succeeded: true,
    };
  }

  async getVerificationForEditResend(verificationId: number, cookie: string, userId: number): Promise<Misc_Verification> {
    const verification = await this.verificationService.getVerification(verificationId);
    const key = this.miscService.getCookie(cookie, this.cookieKey[verification.type]);

    // Check expiration
    if (!verification) {
      throw new ActionException(VerificationErr.TOKEN_EXPIRED);
    }

    // Check ownership
    if ((userId && verification.user_id !== userId) || (verification.key && key !== verification.key)) {
      throw new ActionException(CommonErr.UNAUTHORIZED);
    }

    // Check maximum resend count
    if (verification.expires_at && verification.sent_count >= this.config.verification.maxResend) {
      throw new ActionException(VerificationErr.MAX_RESEND_REACHED);
    }

    // Check window between two resend
    if ((Date.now() - new Date(verification.sent_at).getTime()) < this.config.verification.resendDelay) {
      throw new ActionException(VerificationErr.TO_MANY_RESEND);
    }

    return verification;
  }

  @Post('edit')
  async edit(
    @Body() { input: { payload }, session_variables }: ActionPayload<Mutation_RootVerification_EditArgs>,
    @Req() request: Request,
  ): Promise<Action_Resp_Bool> {
    const verification = await this.getVerificationForEditResend(
      payload.id,
      request.headers.cookie,
      Number(session_variables['x-hasura-user-id']),
    );

    let validated: string;

    // Validate payload

    switch (verification.type) {
      case 'EMAIL':
        if (isEmail(payload.payload)) {
          validated = payload.payload;
        }

        break;
      case 'MOBILE':
        if (this.libPnService.validate(payload.payload)) {
          validated = this.libPnService.format(payload.payload);
        }

        break;
      default:
        throw new ActionException(VerificationErr.NOT_EDITABLE);
    }

    if (!validated) {
      throw new ActionException(CommonErr.BAD_USER_INPUT);
    }

    await this.hasuraService.request({
      queryPath: './graphql/update-verification.graphql',
      variables: {
        id: payload.id,
        set: {
          payload: validated,
          sent_at: new Date().toISOString(),
        },
        inc: {
          sent_count: 1,
        },
      },
    });

    return {
      succeeded: true,
    };
  }

  @Post('resend')
  async resend(
    @Body() { input: { id }, session_variables }: ActionPayload<Mutation_RootVerification_ResendArgs>,
    @Req() request: Request,
  ): Promise<Action_Resp_Bool> {
    const verification = await this.getVerificationForEditResend(
      id,
      request.headers.cookie,
      Number(session_variables['x-hasura-user-id']),
    );

    await this.hasuraService.request({
      queryPath: './graphql/update-verification.graphql',
      variables: {
        id: verification.id,
        set: {
          sent_at: new Date().toISOString(),
        },
        inc: {
          sent_count: 1,
        },
      },
    });

    return {
      succeeded: true,
    };
  }
}
