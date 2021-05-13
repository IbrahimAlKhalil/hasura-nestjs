import { getEnv, getEnvNum } from '../get-env';

export default function() {
  return {
    host: getEnv('MAIL_HOST'),
    port: getEnvNum('MAIL_PORT'),
    user: getEnv('MAIL_USER'),
    password: getEnv('MAIL_PASSWORD'),
  };
}