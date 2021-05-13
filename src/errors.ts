export const CommonErr = {
  UNEXPECTED: {
    code: 'UNEXPECTED',
    message: 'An unexpected error occurred, please try again later',
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    message: 'You are not authorized to make this request',
  },
  BAD_USER_INPUT: {
    code: 'BAD_USER_INPUT',
    message: 'Validation on user input failed',
  },
  INCORRECT_PASSWORD: {
    code: 'INCORRECT_PASSWORD',
    message: 'Given password is not correct',
  },
  RECAPTCHA2_TOKEN_REQUIRED: {
    code: 'RECAPTCHA2_TOKEN_REQUIRED',
    message: 'Your trust score is below the acceptable range',
  },
  RECAPTCHA3_TOKEN_EXPIRED: {
    code: 'RECAPTCHA3_TOKEN_EXPIRED',
    message: 'Recaptcha v3 token expired',
  },
  SERVICE_UNAVAILABLE: {
    code: 'SERVICE_UNAVAILABLE',
    message: 'Sorry, the requested service is currently unavailable, please try again later',
  },
  ACCOUNT_NOT_VERIFIED: {
    code: 'ACCOUNT_NOT_VERIFIED',
    message: 'You have to verify your account to perform this action',
  },
};

export const AuthErr = {
  INCORRECT_CREDENTIALS: {
    code: 'AUTH_INCORRECT_CREDENTIALS',
    message: 'Given username or password is incorrect',
  },
  INVALID_DATE: {
    code: 'AUTH_INVALID_DATE',
    message: 'Expiration date must be ISO 8601 date string',
  },
};

export const RegErr = {
  EMAIL_TAKEN: {
    code: 'REG_EMAIL_TAKEN',
    message: 'This email is already used in another account',
  },
  MOBILE_TAKEN: {
    code: 'REG_MOBILE_TAKEN',
    message: 'This mobile number is already used in another account',
  },
  INVALID_USERNAME: {
    code: 'REG_INVALID_USERNAME',
    message: 'Invalid username',
  },
  INVALID_MOBILE: {
    code: 'REG_INVALID_MOBILE',
    message: 'Invalid mobile number',
  },
  INVALID_EMAIL: {
    code: 'REG_INVALID_EMAIL',
    message: 'Invalid email address',
  },
  PASSWORD_LENGTH_MIN: {
    code: 'REG_PASSWORD_LENGTH_MIN',
    message: 'Password must be at least 8 characters long',
  },
  PASSWORD_LENGTH_MAX: {
    code: 'REG_PASSWORD_LENGTH_MAX',
    message: 'Password cannot be more than 16 characters long',
  },
  DISPOSABLE_EMAIL_NOT_ALLOWED: {
    code: 'REG_DISPOSABLE_EMAIL_NOT_ALLOWED',
    message: 'Sorry disposable email address is not allowed',
  },
};

export const VerificationErr = {
  TOKEN_EXPIRED: {
    code: 'VERIFICATION_TOKEN_EXPIRED',
    message: 'Verification token expired or does not exist',
  },
  INVALID_TOKEN_OR_KEY: {
    code: 'VERIFICATION_INVALID_TOKEN_OR_KEY',
    message: 'Given verification token or key is invalid',
  },
  PAYLOAD_REQUIRED: {
    code: 'VERIFICATION_PAYLOAD_REQUIRED',
    message: 'Verification payload is required',
  },
  MOBILE_TAKEN: {
    code: 'VERIFICATION_MOBILE_TAKEN',
    message: RegErr.MOBILE_TAKEN.message,
  },
  NOT_EDITABLE: {
    code: 'VERIFICATION_NOT_EDITABLE',
    message: 'You cannot edit the payload this verification',
  },
  MAX_RESEND_REACHED: {
    code: 'VERIFICATION_MAX_RESEND_REACHED',
    message: 'You have reached maximum resend threshold',
  },
  TO_MANY_RESEND: {
    code: 'VERIFICATION_TO_MANY_RESEND',
    message: 'Too many resend, please try again later',
  },
};

export const ChangeErr = {
  PASSWORD_LENGTH_MIN: {
    code: 'CHANGE_PASSWORD_LENGTH_MIN',
    message: RegErr.PASSWORD_LENGTH_MIN.message,
  },
  PASSWORD_LENGTH_MAX: {
    code: 'CHANGE_PASSWORD_LENGTH_MAX',
    message: RegErr.PASSWORD_LENGTH_MAX.message,
  },
  INVALID_MOBILE_NUMBER: {
    code: 'CHANGE_INVALID_MOBILE_NUMBER',
    message: 'Mobile number is not valid',
  },
  INVALID_EMAIL_ADDRESS: {
    code: 'CHANGE_INVALID_EMAIL_ADDRESS',
    message: 'Email address is not valid',
  },
  MEDIUM_BLOCKED: {
    code: 'MEDIUM_BLOCKED',
    message: 'You have been blocked to use this particular medium in verification for minimum 24 hours because of sending too many requests',
  },
  TOO_MANY_REQUEST: {
    code: 'CHANGE_TOO_MANY_REQUEST',
    message: 'You have reached maximum verification threshold',
  },
  EMAIL_TAKEN: {
    code: 'CHANGE_EMAIL_TAKEN',
    message: RegErr.EMAIL_TAKEN.message,
  },
  MOBILE_TAKEN: {
    code: 'CHANGE_MOBILE_TAKEN',
    message: RegErr.MOBILE_TAKEN.message,
  },
};
