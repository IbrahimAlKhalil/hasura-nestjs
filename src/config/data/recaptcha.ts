import { getEnv } from '../get-env';

export default function() {
  return {
    v2Secret: getEnv('RECAPTCHA_V2_SECRET'),
    v3Secret: getEnv('RECAPTCHA_V3_SECRET'),
    endpoint: getEnv('RECAPTCHA_ENDPOINT'),
    lifetime: getEnv('RECAPTCHA_LIFETIME'),
    redisKey: getEnv('RECAPTCHA_REDIS_KEY'),
  };
}
