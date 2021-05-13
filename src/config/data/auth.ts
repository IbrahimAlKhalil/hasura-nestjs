import { getEnv, getEnvNum } from '../get-env';

export default function() {
  return {
    longTokenLifetime: getEnvNum('AUTH_TOKEN_LONG_LIFETIME', 1.8e+6),
    shortTokenLifetime: getEnvNum('AUTH_TOKEN_SHORT_LIFETIME', 4.32e+7),
    csrfTokenLength: getEnvNum('AUTH_CSRF_TOKEN_LENGTH', 16),
    cookieKey: getEnv('AUTH_TOKEN_COOKIE_KEY'),
    google: {
      clientId: getEnv('AUTH_GOOGLE_CLIENT_ID', null),
      clientSecret: getEnv('AUTH_GOOGLE_CLIENT_SECRET', null),
    },
    facebook: {
      clientId: getEnv('AUTH_FACEBOOK_CLIENT_ID', null),
      clientSecret: getEnv('AUTH_FACEBOOK_CLIENT_SECRET', null),
    },
  };
}
