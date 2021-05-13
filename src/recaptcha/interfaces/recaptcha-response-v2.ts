export interface RecaptchaResponseV2 {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  apk_package_name?: string;
  'error-codes'?: 'missing-input-secret' | 'invalid-input-secret' | 'missing-input-response' | 'invalid-input-response' | 'bad-request' | 'timeout-or-duplicate';
}