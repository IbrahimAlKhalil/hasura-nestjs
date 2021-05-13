import { ActionRespErr } from './typings/action-resp-err';
import { HttpException } from '@nestjs/common';

export class ActionException extends HttpException {
  constructor(public error: ActionRespErr) {
    super(error, 400);
  }
}