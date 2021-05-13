import { getEnv } from '../get-env';

export default function() {
  return {
    endpoint: getEnv('DEBOUNCE_ENDPOINT')
  };
}
