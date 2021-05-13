import { SessionVariable } from './session-variable';

export interface ActionPayload<T = any> {
  // eslint-disable-next-line camelcase
  session_variables: SessionVariable
  input: T
  action: {
    name: string
  }
}