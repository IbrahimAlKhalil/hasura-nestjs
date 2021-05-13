import { Role } from './role';

export interface SessionVariable {
  'x-hasura-user-id'?: string;
  'x-hasura-u-roles'?: string;
  'x-hasura-role': Role;
}