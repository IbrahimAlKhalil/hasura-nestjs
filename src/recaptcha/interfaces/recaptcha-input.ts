export interface RecaptchaInput {
  secret: string;
  response: string;
  remoteip?: string;
}