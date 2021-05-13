import { getEnvNum } from '../get-env';

export default function() {
  return {
    reasonLimit: getEnvNum('SUSPENSION_REASON_LIMIT', 5),
    deleteWaitingPeriod: getEnvNum('SUSPENSION_DELETE_WAITING_PERIOD', 1.296e+9),
  };
}