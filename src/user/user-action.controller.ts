import { Action_Resp_Bool, Mutation_RootDelete_AccountArgs, Suspension_Reason, User } from '../typings';
import { ActionPayload } from '../typings/action-payload';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { HasuraService } from '../hasura/hasura.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ActionException } from '../action-exception';
import { UserService } from './user.service';
import { Config } from '../config/config';
import { CommonErr } from '../errors';

@Controller('user-action')
export class UserActionController {
  constructor(
    private readonly hasuraService: HasuraService,
    private readonly bcryptService: BcryptService,
    private readonly userService: UserService,
    private readonly config: Config,
  ) {
  }

  @Post('delete-account')
  async deleteAccount(
    @Body() { session_variables, input: { payload } }: ActionPayload<Mutation_RootDelete_AccountArgs>,
  ): Promise<Action_Resp_Bool> {
    if (payload.reasonIds) {
      // Don't let the user select more than expected reasons
      if (payload.reasonIds?.length > this.config.suspension.reasonLimit) {
        throw new ActionException(CommonErr.BAD_USER_INPUT);
      }

      const reasons = await this.hasuraService.request<Suspension_Reason[]>({
        queryPath: './graphql/get-suspension-reasons.graphql',
        root: 'suspension_reason',
        variables: {
          ids: payload.reasonIds,
        },
      });

      // Don't let the user select any of the internal reasons
      if (reasons.some(reason => reason.internal)) {
        throw new ActionException(CommonErr.BAD_USER_INPUT);
      }
    }

    const id = Number(session_variables['x-hasura-user-id']);

    const user = await this.hasuraService.request<User>({
      queryPath: './graphql/get-user-for-delete.graphql',
      root: 'user_by_pk',
      variables: { id },
    });

    if (user.states.length) {
      return {
        succeeded: false,
      };
    }

    if (!(await this.bcryptService.compare(payload.password, user.password))) {
      throw new ActionException(CommonErr.INCORRECT_PASSWORD);
    }

    return {
      succeeded: await this.userService.delete(id, payload.reasonIds),
    };
  }
}
