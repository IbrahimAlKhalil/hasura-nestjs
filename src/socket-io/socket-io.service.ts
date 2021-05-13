import { SessionVariable } from '../typings/session-variable';
import { SocketIoGateway} from './socket-io.gateway';
import { Injectable } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@Injectable()
export class SocketIoService {
  constructor(
    private readonly gateway: SocketIoGateway,
  ) {
  }

  getSocketsByUID(userId: number): Set<Socket> | null {
    if (!this.gateway.userSockets.hasOwnProperty(userId)) {
      return null;
    }

    return this.gateway.userSockets[userId].sockets;
  }

  getSessionVars(socketOrUID: number | Socket): SessionVariable {
    if (typeof socketOrUID === 'number') {
      return this.gateway.userSockets[socketOrUID].vars;
    }

    return this.gateway.userSockets[socketOrUID.uid].vars;
  }

  getSocket(id: string, nsp = '/'): Promise<Socket> {
    return new Promise(resolve => {
      this.getServer()
        .then(server => resolve(server.of(nsp).sockets.get(id)));
    });
  }

  getServer(): Promise<Server> {
    return new Promise((resolve) => {
      if (this.gateway.server) {
        resolve(this.gateway.server);
      } else {
        const resolver = (): void => {
          if (this.gateway.server) {
            resolve(this.gateway.server);
          } else {
            setImmediate(resolver);
          }
        };

        setImmediate(resolver);
      }
    });
  }
}
