import { getEnv } from '../get-env';

export default function() {
  return {
    env: getEnv('NODE_ENV') as nodeEnv,
    secret: getEnv('APP_SECRET'),
    url: getEnv('APP_URL'),
    publicBucket: getEnv('APP_PUBLIC_BUCKET'),
  };
}

type nodeEnv = 'development' | 'production' | 'test' | 'staging'
