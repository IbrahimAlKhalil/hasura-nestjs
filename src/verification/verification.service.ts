import { Misc_Verification, Misc_Verification_Aggregate, Misc_Verification_Type_Enum } from '../typings';
import { HasuraService } from '../hasura/hasura.service';
import { LibPnService } from '../lib-pn/lib-pn.service';
import { MiscService } from '../misc/misc.service';
import { MailService } from '../mail/mail.service';
import { SmsService } from '../sms/sms.service';
import isEmail from 'validator/lib/isEmail';
import { Injectable } from '@nestjs/common';
import { Config } from '../config/config';


@Injectable()
export class VerificationService {
  constructor(
    private readonly hasuraService: HasuraService,
    private readonly libPnService: LibPnService,
    private readonly miscService: MiscService,
    private readonly mailService: MailService,
    private readonly smsService: SmsService,
    private readonly config: Config,
  ) {
  }

  readonly errorCodes = {
    expired: 'EXPIRED',
    maxItems: 'MAX_ITEMS',
  };

  async create(type: Misc_Verification_Type_Enum, userId: number | null, payload?: string, noKey = false, immortal = false): Promise<Misc_Verification> {
    const token = (await this.miscService.generateRandomNumber(10)).toString();

    const aggResult = await this.hasuraService.requestNFirst<Misc_Verification_Aggregate>({
      root: 'misc_verification_aggregate',
      queryPath: './graphql/get-verification-count.graphql',
      variables: { userId, type },
    });

    if (aggResult.aggregate.count >= this.config.verification.maxItems) {
      return Promise.reject(this.errorCodes.maxItems);
    }

    const variables: Record<string, string | number> = {
      type,
      userId,
      token,
      payload,
      key: noKey ? null : await this.miscService.generateRandomString(),
      expiresAt: immortal ? null : new Date(Date.now() + this.config.verification.lifetime).toISOString(),
    };

    const verification = await this.hasuraService.requestNFirst<Misc_Verification>({
      root: 'insert_misc_verification_one',
      queryPath: './graphql/insert-verification.graphql',
      variables,
    });

    if (verification.expires_at && new Date(verification.expires_at).getTime() <= Date.now()) {
      return Promise.reject(this.errorCodes.expired);
    }

    return verification;
  }

  async sendToken(verification: Misc_Verification): Promise<void> {
    if (verification.type === Misc_Verification_Type_Enum.Email) {
      await this.mailService.sendForEmail(verification);
    } else if (verification.type === Misc_Verification_Type_Enum.PasswordReset && isEmail(verification.payload)) {
      await this.mailService.sendForPasswordReset(verification);
    } else {
      const message = 'আপনার ভেরিফিকেশন কোড হচ্ছে ' + verification.token + '\n' + 'দয়া করে এই কোডটি কারো সাথে শেয়ার করবেন না।';

      await this.smsService.sendToOne(message, verification.payload, 'text');
    }
  }

  async getVerification(id: number): Promise<Misc_Verification | null> {
    const verification = await this.hasuraService.requestNFirst<Misc_Verification>({
      queryPath: './graphql/get-verification.graphql',
      root: 'misc_verification_by_pk',
      variables: { id },
    });

    if (!verification || verification.expires_at && new Date(verification.expires_at).getTime() <= Date.now()) {
      return null;
    }

    return verification;
  }
}
