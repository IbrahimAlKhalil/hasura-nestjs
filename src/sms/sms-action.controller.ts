import { Action_Resp_Bool, Mutation_RootSms_SendArgs } from '../typings';
import { ActionPayload } from '../typings/action-payload';
import { HasuraService } from '../hasura/hasura.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('sms-action')
export class SmsActionController {
  constructor(
    private readonly hasuraService: HasuraService,
  ) {
  }

  @Post('send')
  async send(
    @Body() { input: { payload } }: ActionPayload<Mutation_RootSms_SendArgs>,
  ): Promise<Action_Resp_Bool> {
    await this.hasuraService.request({
      queryPath: './graphql/insert-message.graphql',
      variables: {
        objects: payload.ids.map(user_id => ({
          text: payload.text,
          user_id,
          status: 'PENDING',
        })),
      },
    });

    return {
      succeeded: true,
    };
  }
}
