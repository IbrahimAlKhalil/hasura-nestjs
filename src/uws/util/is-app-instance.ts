import { INanoexpressApp } from 'nanoexpress';

export function isAppInstance(value: any): value is INanoexpressApp {
  return value && value.hasOwnProperty('listen') && typeof value.listen === 'function';
}