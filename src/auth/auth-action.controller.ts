import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { RecaptchaService } from '../recaptcha/recaptcha.service';
import { CookieOptions, Request, Response } from 'express';
import { ActionPayload } from '../typings/action-payload';
import { HasuraService } from '../hasura/hasura.service';
import { ActionException } from '../action-exception';
import isISO8601 from 'validator/lib/isISO8601';
import { AuthErr, CommonErr } from '../errors';
import { AuthService } from './auth.service';
import { Config } from '../config/config';

import {
  Action_Resp_Bool,
  Auth_Login_Resp,
  Auth_Token,
  Mutation_RootAuth_Blacklist_TokenArgs,
  Mutation_RootAuth_Create_TokenArgs,
  Mutation_RootAuth_LoginArgs,
  User,
} from '../typings';

@Controller('auth-action')
export class AuthActionController {
  constructor(
    private readonly recaptchaService: RecaptchaService,
    private readonly hasuraService: HasuraService,
    private readonly authService: AuthService,
    private readonly config: Config,
  ) {
  }

  @Post('login')
  async login(
    @Body() { input: { payload } }: ActionPayload<Mutation_RootAuth_LoginArgs>,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Promise<Action_Resp_Bool | Auth_Login_Resp> {
    if (this.config.app.env === 'production') {
      await this.recaptchaService.verify(payload.tokenV3, 'login', request.ip, payload.tokenV2);
    }

    const result = await this.authService.login(
      payload.username,
      payload.password,
      request.ip,
      request.header('user-agent'),
      payload.rememberMe,
    );

    const options: CookieOptions = {
      sameSite: 'lax',
      secure: true,
      httpOnly: true,
    };

    if (payload.rememberMe) {
      options.expires = new Date(Date.now() + this.config.auth.longTokenLifetime);
    }

    response.cookie(this.config.auth.cookieKey, result.accessToken, options);

    return {
      id: result.id,
      csrfToken: result.csrfToken,
    };
  }

  @Post('logout')
  logout(@Res() response: Response): void {
    response.clearCookie(this.config.auth.cookieKey);

    response.json({
      succeeded: true,
    });
  }

  @Post('blacklist')
  async blacklist(@Body() payload: ActionPayload<Mutation_RootAuth_Blacklist_TokenArgs>): Promise<Action_Resp_Bool> {
    const userId = Number(payload.session_variables['x-hasura-user-id']);

    if (!(await this.authService.checkIsUserVerified(userId))) {
      throw new ActionException(CommonErr.ACCOUNT_NOT_VERIFIED);
    }

    return {
      succeeded: await this.authService.blacklist(payload.input.jti, userId),
    };
  }

  @Post('create-personal-token')
  async createPersonalToken(
    @Body() payload: ActionPayload<Mutation_RootAuth_Create_TokenArgs>,
    @Req() request: Request,
  ): Promise<Auth_Token> {
    if (!(await this.authService.checkIsUserVerified(Number(payload.session_variables['x-hasura-user-id'])))) {
      throw new ActionException(CommonErr.ACCOUNT_NOT_VERIFIED);
    }

    if (payload.input.expiresAt && !isISO8601(payload.input.expiresAt)) {
      throw new ActionException(AuthErr.INVALID_DATE);
    }

    const user = await this.hasuraService.requestNFirst<User>({
      root: 'user',
      queryPath: './graphql/get-user.graphql',
      variables: {
        conditions: {
          id: {
            _eq: payload.session_variables['x-hasura-user-id'],
          },
        },
      },
    });

    return {
      value: await this.authService.createPersonalToken(
        Number(payload.session_variables['x-hasura-user-id']),
        user.type,
        new Date(payload.input.expiresAt || Date.now() + 3600000),
        request.ip,
        request.header('user-agent'),
        user.role_users.map(ru => ru.role_id),
      ),
    };
  }
}
