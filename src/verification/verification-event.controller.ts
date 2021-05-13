import { VerificationService } from './verification.service';
import { HasuraService } from '../hasura/hasura.service';
import { Body, Controller, Post } from '@nestjs/common';
import { EventPayload } from '../typings/event-payload';
import { Misc_Verification } from '../typings';

@Controller('verification-event')
export class VerificationEventController {
  constructor(
    private readonly verificationService: VerificationService,
    private readonly hasuraService: HasuraService,
  ) {
  }

  @Post('send-token')
  async sendToken(
    @Body() { event: { data } }: EventPayload<Misc_Verification>,
  ): Promise<void> {
    await this.verificationService.sendToken(data.new);
  }

  @Post('delete-expired')
  async deleteExpired(): Promise<{affected_rows: number}> {
    return await this.hasuraService.request({
      queryPath: './graphql/delete-expired-verifications.graphql',
      root: 'delete_misc_verification'
    });
  }
}
