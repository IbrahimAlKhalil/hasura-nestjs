import { getEnv, getEnvNum } from '../get-env';

export default function() {
  return {
    lifetime: getEnvNum('VERIFICATION_LIFETIME', 3600000), // 1 hour
    maxResend: getEnvNum('VERIFICATION_MAX_RESEND', 6),
    resendDelay: getEnvNum('VERIFICATION_RESEND_DELAY', 1.2e+5), // 2 minutes
    maxItems: getEnvNum('VERIFICATION_MAX_ITEMS', 8),
    accountVerifyPeriod: getEnvNum('VERIFICATION_ACCOUNT_VERIFY_PERIOD', 1.296e+9), // 15 days
    cookieKey: {
      mobile: getEnv('VERIFICATION_MOBILE_COOKIE_KEY'),
      email: getEnv('VERIFICATION_EMAIL_COOKIE_KEY'),
      resetPass: getEnv('VERIFICATION_RESET_PASS_COOKIE_KEY'),
    },
  };
}