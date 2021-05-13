import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BcryptService {
  hash(text: string, saltRound = 10): Promise<string> {
    return bcrypt.hash(text.toString(), saltRound);
  }

  compare(text: string, hash: string): Promise<boolean> {
    return bcrypt.compare(text.toString(), hash);
  }
}
