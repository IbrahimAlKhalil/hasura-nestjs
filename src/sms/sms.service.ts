import { HttpService, Injectable } from '@nestjs/common';
import { HasuraService } from '../hasura/hasura.service';
import { Config } from '../config/config';
import { AxiosResponse } from 'axios';

// TODO: Implement job/queue system

@Injectable()
export class SmsService {
  constructor(
    private readonly hasuraService: HasuraService,
    private readonly httpService: HttpService,
    private readonly config: Config,
  ) {
  }

  async sendToOne(message: string, mobile: string, type: MessageType): Promise<AxiosResponse> {
    if (process.env.NODE_ENV === 'development') {
      console.log(`SMS: ${mobile} - ${type} - ${message}`);
    } else if (this.config.sms.apiKey && this.config.sms.senderId) {
      // TODO: Implement
      return this.httpService.get('{ENDPOINT}', {}).toPromise();
    }
  }
}

type MessageType = 'unicode' | 'text';
