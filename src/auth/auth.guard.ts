import { Access_Control_Action_Enum, Access_Control_Entity_Enum } from '../typings';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PermMetadata } from './interfaces/perm-metadata';
import { ActionPayload } from '../typings/action-payload';
import { ActionException } from '../action-exception';
import { AuthService } from './auth.service';
import { IHttpRequest } from 'nanoexpress';
import { Reflector } from '@nestjs/core';
import { CommonErr } from '../errors';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<IHttpRequest>();

    if ((request.body as ActionPayload).session_variables['x-hasura-role'] === 'admin') {
      return true;
    }

    const can = this.reflector.get<{ entity: Access_Control_Entity_Enum; action: Access_Control_Action_Enum }>('can', context.getHandler());
    const canAtLeast = this.reflector.get<{ entity: Access_Control_Entity_Enum; action: Access_Control_Action_Enum[] }>('can-at-least', context.getHandler());

    if (!(await this.checkPerm(can || canAtLeast, request))) {
      throw new ActionException(CommonErr.UNAUTHORIZED);
    }

    return true;
  }

  async checkPerm(metadata: PermMetadata | undefined, request: IHttpRequest): Promise<boolean> {
    if (!metadata) {
      return true;
    }

    return this.authService.checkPermission(metadata, (request.body as ActionPayload).session_variables);
  }
}
