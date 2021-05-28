import { getEnv, getEnvNum } from '../get-env';

export default function() {
  return {
    idleTimeout: getEnvNum('WEBSOCKET_IDLE_TIMEOUT', 0),
    maxBackpressure: getEnvNum('WEBSOCKET_MAX_BACKPRESSURE', 1e+6),
    maxPayloadLength: getEnvNum('WEBSOCKET_MAX_PAYLOAD_LENGTH', 16000),
    maxConnections: getEnvNum('WEBSOCKET_MAX_CONNECTION', 10),
    endpoint: getEnv('WEBSOCKET_ENDPOINT', '/'),
    redisChannel: getEnv('WEBSOCKET_REDIS_CHANNEL', 'uws')
  };
}