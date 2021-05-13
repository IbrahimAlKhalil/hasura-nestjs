import { SessionVariable } from '../typings/session-variable';
import { Socket } from 'socket.io';

export interface UserSocket {
  vars: SessionVariable
  sockets: Set<Socket>
}
