export interface Identity {
  type: 'username' | 'mobile' | 'email';
  value: string;
}