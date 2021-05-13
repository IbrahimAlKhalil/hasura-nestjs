import { getEnv, getEnvNum } from '../get-env';

export default function () {
  return {
    host: getEnv('HASURA_HOST'),
    port: getEnvNum('HASURA_PORT'),
    secret: getEnv('HASURA_SECRET'),
  };
}
