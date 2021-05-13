import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import PhoneNumber = libphonenumber.PhoneNumber;
import { Injectable } from '@nestjs/common';

@Injectable()
export class LibPnService {
  validate(mobile: string): boolean {
    const instance: PhoneNumberUtil = PhoneNumberUtil.getInstance();

    let phoneNumber: PhoneNumber;

    try {
      phoneNumber = instance.parseAndKeepRawInput(mobile);
      instance.isPossibleNumber(phoneNumber);
    } catch (e) {
      return false;
    }

    return true;
  }

  format(mobile: string): string {
    const instance: PhoneNumberUtil = PhoneNumberUtil.getInstance();

    const phoneNumber: PhoneNumber = instance.parseAndKeepRawInput(mobile);

    return instance.format(phoneNumber, PhoneNumberFormat.E164);
  }
}
