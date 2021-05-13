import { HasuraService } from '../hasura/hasura.service';
import { LoginResult } from './interfaces/login-result';
import { OAuth2Client } from 'google-auth-library';
import { AuthService } from './auth.service';
import { Injectable } from '@nestjs/common';
import { Config } from '../config/config';

@Injectable()
export class GoogleAuthService {
  constructor(
    private readonly hasuraService: HasuraService,
    private readonly authService: AuthService,
    private readonly config: Config,
  ) {
  }

  readonly client = new OAuth2Client({
    clientId: this.config.auth.google.clientId,
    clientSecret: this.config.auth.google.clientSecret,
  });

  // userid

  async login(token: string): Promise<LoginResult> {
    const ticket = await this.client.verifyIdToken({
      idToken: token,
      audience: this.config.auth.google.clientId,
    });

    const payload = ticket.getPayload();

    // payload.

    return {
      id: 1,
      accessToken: '',
      csrfToken: '',
    };
  }
}