import { Controller, HttpCode, Post, Req } from '@nestjs/common';
import { SessionVariable } from '../typings/session-variable';
import { AuthService } from './auth.service';
import { Config } from '../config/config';
import { JwtService } from '@nestjs/jwt';
import { Pool, QueryConfig } from 'pg';
import { Request } from 'express';

@Controller('auth-hook')
export class AuthHookController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly config: Config,
    private readonly pgPool: Pool,
  ) {
  }

  private readonly query: QueryConfig = {
    name: 'delete-access-tokens',
    text: `delete
           from auth.access_token
           where expires_at <= now()`,
  };

  @Post('authorize')
  @HttpCode(200)
  async authorize(
    @Req() request: Request,
  ): Promise<SessionVariable> {
    // Don't use destructuring here
    const headers = request.body.headers;

    return this.authService.authorize(
      headers.Cookie || headers.cookie,
      headers['x-csrf-token'] || headers['X-Csrf-Token'],
    );
  }

  @Post('delete-expired-tokens')
  @HttpCode(200)
  async deleteExpiredTokens(): Promise<{ affected_rows: number }> {
    return {
      affected_rows: (await this.pgPool.query(this.query)).rowCount,
    };
  }
}
