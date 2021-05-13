import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { UserSocket } from './user-socket';
import { AuthService } from '../auth/auth.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ transports: ['websocket', 'polling'] })
export class SocketIoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly authService: AuthService,
  ) {
  }

  @WebSocketServer()
  readonly server: Server;

  readonly userSockets: UserSockets = {};

  async handleConnection(socket: Socket): Promise<void> {
    const sessionVariables = await this.authService.authorize(
      socket.handshake.headers.cookie,
      socket.handshake.auth.csrfToken,
    );

    // Disconnect anonymous users
    if (sessionVariables['x-hasura-role'] === 'anonymous') {
      socket.disconnect(true);
      return;
    }

    const uid = Number(sessionVariables['x-hasura-user-id']);

    let userSocket: UserSocket;

    if (!this.userSockets.hasOwnProperty(uid)) {
      userSocket = {
        vars: sessionVariables,
        sockets: new Set<Socket>(),
      };

      this.userSockets[uid] = userSocket;
    } else {
      userSocket = this.userSockets[uid];
    }
    socket.uid = uid;

    if (userSocket.sockets.size >= 4) {
      socket.disconnect(true);
    } else {
      userSocket.sockets.add(socket);
    }
  }

  handleDisconnect(socket: Socket): void {
    if (!this.userSockets.hasOwnProperty(socket.uid)) {
      return;
    }

    const userSocket = this.userSockets[socket.uid];

    userSocket.sockets.delete(socket);

    if (userSocket.sockets.size === 0) {
      delete this.userSockets[socket.uid];
    }
  }
}

type UserSockets = {
  [key: number]: UserSocket
}

declare module 'socket.io' {
  interface Socket {
    uid: number
  }
}
