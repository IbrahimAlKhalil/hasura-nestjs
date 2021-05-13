import { Access_Control_Action_Enum, Access_Control_Entity_Enum } from '../../typings';
import { SetMetadata } from '@nestjs/common/decorators/core/set-metadata.decorator';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Can = (_do: Access_Control_Action_Enum, on: Access_Control_Entity_Enum) =>
  SetMetadata('can', { entity: on, action: _do });