import { SetMetadata } from '@nestjs/common/decorators/core/set-metadata.decorator';
import { Action, Entity } from '../auth.enum';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CanAtLeast = (action: Action[], on: Entity) =>
  SetMetadata('can-at-least', { entity: on, action });
