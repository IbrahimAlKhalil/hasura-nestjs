import { Body, Controller, Post } from '@nestjs/common';
import { EventPayload } from '../typings/event-payload';
import { Notification_Notification } from '../typings';
import { UwsService } from '../uws/uws.service';

@Controller('n-event')
export class NotificationEventController {
  constructor(
    private readonly uwsService: UwsService,
  ) {
  }

  @Post('notify')
  async notify(
    @Body() { event: { data } }: EventPayload<Notification_Notification>,
  ): Promise<void> {
    this.uwsService.publish(data.new.user_id.toString(), 'n', data.new.id);
  }
}
