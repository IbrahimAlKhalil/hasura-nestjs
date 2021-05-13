import { Role } from '../../typings/role';

export interface JwtPayload {
  uid: number;
  jti: number;
  cst?: string;
  prt?: 1;
  role: Role;
  roles?: number[];
  exp: number;
}