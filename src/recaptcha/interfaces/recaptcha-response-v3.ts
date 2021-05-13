import { RecaptchaResponseV2 } from './recaptcha-response-v2';

export interface RecaptchaResponseV3 extends RecaptchaResponseV2 {
  score: number;
  action: string;
}