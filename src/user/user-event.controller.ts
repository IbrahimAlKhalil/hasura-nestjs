import { HasuraService } from '../hasura/hasura.service';
import { Body, Controller, Post } from '@nestjs/common';
import { EventPayload } from '../typings/event-payload';
import { AuthService } from '../auth/auth.service';
import { Suspension_State } from '../typings';
import { UserService } from './user.service';
import { Config } from '../config/config';

@Controller('user-event')
export class UserEventController {
  constructor(
    private readonly hasuraService: HasuraService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly config: Config,
  ) {
  }

  @Post('handle-suspension')
  async suspend(
    @Body() { event: { data } }: EventPayload<Suspension_State>,
  ): Promise<void> {
    const state = data.new || data.old;

    if (state.type === 'DISABLED' || state.type === 'DELETED') {
      this.authService.blacklistUser(state.id);
    }
  }

  @Post('delete-users')
  async deleteUsers(): Promise<{ affected_rows: number }> {
    return this.hasuraService.request({
      queryPath: './graphql/delete-accounts.graphql',
      root: 'delete_user',
      variables: {
        suspendedPeriod: new Date(Date.now() - this.config.suspension.deleteWaitingPeriod).toISOString(),
        nonVerifiedPeriod: new Date(Date.now() - this.config.verification.accountVerifyPeriod).toISOString(),
      },
    });
  }
}
