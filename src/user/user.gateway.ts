import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { IWebSocket } from 'nanoexpress';

@Injectable()
export class UserGateway {
  @OnEvent('wsi.open')
  handleOpen(websocket: IWebSocket): void {
    websocket.subscribe(websocket.sv['x-hasura-user-id']);
  }
}
