import { ArgumentsHost, Catch, ExceptionFilter as ExceptionFilterInterface } from '@nestjs/common';
import { ActionException } from './action-exception';
import { Response } from 'express';

@Catch(ActionException)
export class ExceptionFilter implements ExceptionFilterInterface {
  catch(exception: ActionException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response
      .status(exception.getStatus())
      .json(exception.error);
  }
}
