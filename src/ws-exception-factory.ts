import { WsException } from '@nestjs/websockets';

export function wsExceptionFactory(errors): WsException {
  return new WsException(
    errors.map(e => ({
      property: e.property,
      messages: Object.keys(e.constraints).map(key => e.constraints[key]),
    })),
  );
}
