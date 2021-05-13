import { Sms_Message, Sms_Message_Status_Enum, User } from '../typings';
import { HasuraService } from '../hasura/hasura.service';
import { Body, Controller, Post } from '@nestjs/common';
import { EventPayload } from '../typings/event-payload';
import { SmsService } from './sms.service';
import { AxiosResponse } from 'axios';

@Controller('sms-event')
export class SmsEventController {
  constructor(
    private readonly hasuraService: HasuraService,
    private readonly smsService: SmsService,
  ) {
  }

  private async sendSMS(message: Sms_Message): Promise<AxiosResponse> {
    const user = await this.hasuraService.requestNFirst<User>({
      queryPath: './graphql/get-user.graphql',
      root: 'user_by_pk',
      variables: {
        id: message.user_id,
      },
    });

    if (!user.mobile) {
      return;
    }

    const type = /[^\u0000-\u00ff]/.test(message.text) ? 'unicode' : 'text';

    let status = Sms_Message_Status_Enum.Failed;
    let response: AxiosResponse;

    try {
      response = await this.smsService.sendToOne(
        message.text,
        user.mobile,
        type,
      );

      status = Sms_Message_Status_Enum.Success;
    } catch (e) {
    }

    await this.hasuraService.request({
      queryPath: './graphql/update-message.graphql',
      variables: {
        id: message.id,
        status,
      },
    });

    return response?.data;
  }

  @Post('send')
  async send(
    @Body() payload: EventPayload<Sms_Message>,
  ): Promise<any> {
    return await this.sendSMS(payload.event.data.new);
  }

  @Post('retry')
  async retry(
    @Body() payload: EventPayload<Sms_Message>,
  ): Promise<any> {
    if (payload.event.data.new.status === 'PENDING' && payload.event.data.old.status === 'FAILED') {
      return await this.sendSMS(payload.event.data.old);
    }
  }
}
