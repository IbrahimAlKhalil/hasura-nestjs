import { SessionVariable } from './session-variable';

export interface EventPayload<T = any> {
  event: {
    session_variables: SessionVariable;
    op: 'INSERT' | 'UPDATE' | 'DELETE' | 'MANUAL';
    data: {
      old: T;
      new: T;
    }
  };
  created_at: number;
  id: string;
  trigger: {
    name: string;
  };
  table: {
    schema: string;
    name: string;
  }
}
