import { NotificationEventController } from './notification-event.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [
    NotificationEventController,
  ],
})
export class NotificationModule {
}
