import { getEnv, getEnvNum } from '../get-env';

export default function() {
  return {
    endpoint: getEnv('MINIO_ENDPOINT'),
    port: getEnvNum('MINIO_PORT'),
    username: getEnv('MINIO_ROOT_USER'),
    password: getEnv('MINIO_ROOT_PASSWORD'),
  };
}
