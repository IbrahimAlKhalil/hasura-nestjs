import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { SocketIoService } from '../socket-io/socket-io.service';
import { wsExceptionFactory } from '../ws-exception-factory';
import { UploadPictureDto } from './dto/upload-picture.dto';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { HasuraService } from '../hasura/hasura.service';
import { ActionException } from '../action-exception';
import { AuthService } from '../auth/auth.service';
import { Action_Resp_Bool, User } from '../typings';
import { UserService } from './user.service';
import { CommonErr } from '../errors';
import * as fileType from 'file-type';
import { Socket } from 'socket.io';

@WebSocketGateway({ transports: ['websocket', 'polling'] })
export class UserGateway {
  constructor(
    private readonly socketIoService: SocketIoService,
    private readonly hasuraService: HasuraService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
  }

  @SubscribeMessage('upload-picture')
  @UsePipes(new ValidationPipe({
    exceptionFactory: wsExceptionFactory,
  }))
  async uploadPicture(socket: Socket, payload: UploadPictureDto): Promise<Action_Resp_Bool> {
    const sessionVariables = this.socketIoService.getSessionVars(socket);

    const user = await this.hasuraService.requestNFirst<User>({
      queryPath: './graphql/get-user.graphql',
      root: 'user_by_pk',
      variables: { id: Number(sessionVariables['x-hasura-user-id']) },
    });

    // Validate file type
    const mimes = new Set([
      'image/jpeg',
      'image/png',
    ]);

    const fileInfo = fileType(payload.file);

    if (!fileInfo || !mimes.has(fileInfo.mime)) {
      throw new ActionException(CommonErr.BAD_USER_INPUT);
    }

    return {
      succeeded: await this.userService.setPicture(user, payload.file),
    };
  }

  @SubscribeMessage('join-mod')
  async joinModRoom(socket: Socket): Promise<void> {
    const vars = this.socketIoService.getSessionVars(socket);

    if (vars['x-hasura-role'] === 'mod') {
      socket.join('mod');
      socket.to('mod').emit('mod-join', socket.uid);
    }
  }

  @SubscribeMessage('leave-mod')
  async leaveModRoom(socket: Socket): Promise<void> {
    const vars = this.socketIoService.getSessionVars(socket);

    if (vars['x-hasura-role'] === 'mod') {
      socket.leave('mod');
      socket.to('mod').emit('mod-leave', socket.uid);
    }
  }
}
