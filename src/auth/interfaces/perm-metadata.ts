import { Access_Control_Action_Enum, Access_Control_Entity_Enum } from '../../typings';

export interface PermMetadata {
  entity: Access_Control_Entity_Enum;
  action: Access_Control_Action_Enum | Access_Control_Action_Enum[];
}
