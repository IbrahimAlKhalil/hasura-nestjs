import { NotificationEventController } from './notification-event.controller';
import { SocketIoModule } from '../socket-io/socket-io.module';
import { Module } from '@nestjs/common';

@Module({
  controllers: [
    NotificationEventController,
  ],
  imports: [
    SocketIoModule,
  ],
})
export class NotificationModule {
}
