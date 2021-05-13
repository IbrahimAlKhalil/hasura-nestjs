import { Auth_Access_Token, User, User_Bool_Exp, User_Type_Enum } from '../typings';
import { SessionVariable } from '../typings/session-variable';
import { PermMetadata } from './interfaces/perm-metadata';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { HasuraService } from '../hasura/hasura.service';
import { LoginResult } from './interfaces/login-result';
import { ActionException } from '../action-exception';
import { JwtPayload } from './interfaces/jwt-payload';
import { MiscService } from '../misc/misc.service';
import { Injectable } from '@nestjs/common';
import { Config } from '../config/config';
import { JwtService } from '@nestjs/jwt';
import { Pool, QueryConfig } from 'pg';
import { Role } from '../typings/role';
import { AuthErr } from '../errors';

@Injectable()
export class AuthService {
  constructor(
    private readonly bcryptService: BcryptService,
    private readonly hasuraService: HasuraService,
    private readonly miscService: MiscService,
    private readonly jwtService: JwtService,
    private readonly config: Config,
    private readonly pgPool: Pool,
  ) {
  }

  private readonly canQuery: QueryConfig = {
    name: 'can',
    text: `select exists(
                          select id
                          from access_control.role_permission
                          where role_id = any ($2)
                            and entity = $3
                            and action = $4
                      ) as r,
                  exists(
                          select id
                          from access_control.user_permission
                          where user_id = $1
                            and entity = $3
                            and action = $4
                      ) as u`,
  };
  private readonly canAtLeastQuery: QueryConfig = {
    name: 'can-at-least',
    text: `select exists(
                          select id
                          from access_control.role_permission
                          where role_id = any ($2)
                            and entity = $3
                            and action = any ($4)
                      ) as r,
                  exists(
                          select id
                          from access_control.user_permission
                          where user_id = $1
                            and entity = $3
                            and action = any ($4)
                      ) as u`,
  };
  private readonly blacklistUserQuery: QueryConfig = {
    name: 'blacklist-user',
    text: `
        insert into auth.blacklist (id)
            (select id from auth.access_token where user_id = $1 and expires_at > now())
        on conflict do nothing;
    `,
  };
  private readonly checkBlacklistQuery: QueryConfig = {
    name: 'check-blacklist',
    text: 'select exists(select id from auth.blacklist where id = $1) as b',
  };
  private readonly isUserVerifiedQuery: QueryConfig = {
    name: 'check-user-verified',
    text: `
        select verified
        from public."user"
        where id = $1
    `,
  };

  private readonly body: SessionVariable = {
    'x-hasura-role': 'anonymous',
  };

  async login(
    username: string,
    password: string,
    ipAddress: string,
    userAgent?: string,
    rememberMe = false,
  ): Promise<LoginResult> {
    const identity = this.miscService.getIdentityType(username);
    const variables = {
      conditions: {} as User_Bool_Exp,
    };

    variables.conditions[identity.type] = {
      _eq: identity.value,
    };

    const user = await this.hasuraService.requestNFirst<User>({
      queryPath: './graphql/get-user.graphql',
      root: 'user',
      variables,
    });

    let error;

    if (!user) {
      error = AuthErr.INCORRECT_CREDENTIALS;
    } else if (user.states.some(state => state.type === 'DISABLED') || !(await this.bcryptService.compare(password, user.password))) {
      error = AuthErr.INCORRECT_CREDENTIALS;
    }

    if (error) {
      throw new ActionException(error);
    }

    if (user.states.some(state => state.type === 'DELETED')) {
      this.hasuraService.request({
        queryPath: './graphql/remove-deleted-state.graphql',
        variables: {
          id: user.id,
        },
      });
    }

    const expiresAt = rememberMe
      ? new Date(Date.now() + this.config.auth.longTokenLifetime)
      : new Date(Date.now() + this.config.auth.shortTokenLifetime);

    return await this.createAccessToken(
      user.id,
      user.type,
      expiresAt,
      false,
      user.role_users.map(ru => ru.role_id),
      ipAddress,
      userAgent,
    );
  }

  async blacklist(jti: number, userId: number): Promise<boolean> {
    const accessToken = await this.hasuraService.requestNFirst<Auth_Access_Token>({
      queryPath: './graphql/get-access-token.graphql',
      root: 'auth_access_token',
      variables: {
        jti,
        userId,
      },
    });

    if (!accessToken) {
      return false;
    }

    // Revoke token
    await this.hasuraService.request({
      queryPath: './graphql/blacklist-access-token.graphql',
      variables: { jti },
    });

    return true;
  }

  async blacklistUser(userId: number): Promise<boolean> {
    try {
      await this.pgPool.query(this.blacklistUserQuery, [userId]);
      return true;
    } catch (e) {
      return false;
    }
  }

  async createAccessToken(
    userId: number,
    userType: User_Type_Enum,
    expiresAt: Date,
    personal = false,
    roles?: number[],
    ipAddress?: string,
    userAgent?: string,
  ): Promise<LoginResult> {
    // Insert access token in database
    const accessToken = await this.hasuraService.request<Auth_Access_Token>({
      queryPath: './graphql/insert-access-token.graphql',
      root: 'insert_auth_access_token_one',
      variables: {
        userId,
        userAgent,
        ipAddress,
        personal,
        expiresAt: expiresAt.toISOString(),
      },
    });

    const jwtPayload: JwtPayload = {
      uid: userId,
      jti: accessToken.id,
      role: userType.toLowerCase() as Role,
      exp: Math.round(expiresAt.getTime() / 1000),
    };

    if (personal) {
      jwtPayload.prt = 1;
    } else {
      jwtPayload.cst = await this.miscService.generateRandomString(
        this.config.auth.csrfTokenLength,
      );
    }

    if (userType === 'MOD') {
      jwtPayload.roles = roles;
    }

    return {
      id: userId,
      accessToken: await this.jwtService.signAsync(jwtPayload),
      csrfToken: jwtPayload.cst,
    };
  }

  async createPersonalToken(userId: number, userType: User_Type_Enum, expiresAt: Date, ipAddress: string, userAgent: string, roles?: number[]): Promise<string> {
    return (
      await this.createAccessToken(
        userId,
        userType,
        expiresAt,
        true,
        roles,
        ipAddress,
        userAgent,
      )
    ).accessToken;
  }

  async authorize(cookie: string, csrfToken?: string): Promise<SessionVariable> {
    // Check if cookie passed down
    if (!cookie) {
      return this.body;
    }

    const token = this.miscService.getCookie(cookie, this.config.auth.cookieKey);

    if (!token) {
      return this.body;
    }

    let jwtPayload: JwtPayload;

    try {
      jwtPayload = await this.jwtService.verifyAsync<JwtPayload>(token);
    } catch (e) {
      return this.body;
    }

    const check = await this.pgPool.query(this.checkBlacklistQuery, [jwtPayload.jti]);

    if (check.rows[0]?.b) {
      return this.body;
    }

    // Check csrf token

    if (!jwtPayload.hasOwnProperty('prt')) {
      if (!csrfToken || csrfToken !== jwtPayload.cst) {
        return this.body;
      }
    }

    const body: SessionVariable = {
      'x-hasura-user-id': jwtPayload.uid.toString(),
      'x-hasura-role': jwtPayload.role,
    };

    if (jwtPayload.role === 'mod') {
      body['x-hasura-u-roles'] = `{${jwtPayload.roles.join()}}`;
    }

    return body;
  }

  async checkPermission(metadata: PermMetadata, sessionVariables: SessionVariable): Promise<boolean> {
    if (sessionVariables['x-hasura-role'] === 'admin') {
      return true;
    }

    if (sessionVariables['x-hasura-role'] !== 'mod') {
      return false;
    }

    const query = (typeof metadata.action === 'string') ? this.canQuery : this.canAtLeastQuery;
    const roles = sessionVariables['x-hasura-u-roles'].slice(1, sessionVariables['x-hasura-u-roles'].length - 1).split(',');

    const data = await this.pgPool.query(query, [
      Number(sessionVariables['x-hasura-user-id']),
      roles,
      metadata.entity,
      metadata.action,
    ]);

    return data.rows[0]?.r || data.rows[0]?.u;
  }

  async checkIsUserVerified(userId: number): Promise<boolean> {
    const data = await this.pgPool.query(this.isUserVerifiedQuery, [userId]);

    return !!data.rows[0]?.verified;
  }
}


