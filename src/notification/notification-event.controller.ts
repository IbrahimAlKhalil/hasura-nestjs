import { SocketIoService } from '../socket-io/socket-io.service';
import { HasuraService } from '../hasura/hasura.service';
import { Body, Controller, Post } from '@nestjs/common';
import { EventPayload } from '../typings/event-payload';
import { Notification_Notification } from '../typings';

@Controller('n-event')
export class NotificationEventController {
  constructor(
    private readonly socketIoService: SocketIoService,
    private readonly hasuraService: HasuraService,
  ) {
  }

  @Post('notify')
  async notify(
    @Body() { event: { data } }: EventPayload<Notification_Notification>,
  ): Promise<void> {
    const sockets = this.socketIoService.getSocketsByUID(data.new.user_id);

    if (!sockets) {
      return;
    }

    const notification = await this.hasuraService.requestNFirst({
      queryPath: './graphql/get-notification.graphql',
      root: 'notification_notification_by_pk',
      variables: {
        id: data.new.id,
      },
    });

    for (const socket of sockets) {
      socket.emit('n', notification);
    }
  }
}
