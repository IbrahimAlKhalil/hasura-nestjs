export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _name: any;
  _text: any;
  bigint: any;
  date: any;
  inet: any;
  interval: any;
  json: any;
  jsonb: any;
  name: any;
  regtype: any;
  smallint: any;
  timestamptz: any;
};

export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _niregex?: Maybe<Scalars['String']>;
  _nlike?: Maybe<Scalars['String']>;
  _nregex?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _regex?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


export type _Name_Comparison_Exp = {
  _eq?: Maybe<Scalars['_name']>;
  _gt?: Maybe<Scalars['_name']>;
  _gte?: Maybe<Scalars['_name']>;
  _in?: Maybe<Array<Scalars['_name']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_name']>;
  _lte?: Maybe<Scalars['_name']>;
  _neq?: Maybe<Scalars['_name']>;
  _nin?: Maybe<Array<Scalars['_name']>>;
};


export type _Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['_text']>;
  _gt?: Maybe<Scalars['_text']>;
  _gte?: Maybe<Scalars['_text']>;
  _in?: Maybe<Array<Scalars['_text']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_text']>;
  _lte?: Maybe<Scalars['_text']>;
  _neq?: Maybe<Scalars['_text']>;
  _nin?: Maybe<Array<Scalars['_text']>>;
};

export type Access_Control_Action = {
  __typename?: 'access_control_action';
  logs: Array<Access_Control_Log>;
  logs_aggregate: Access_Control_Log_Aggregate;
  role_permissions: Array<Access_Control_Role_Permission>;
  role_permissions_aggregate: Access_Control_Role_Permission_Aggregate;
  user_permissions: Array<Access_Control_User_Permission>;
  user_permissions_aggregate: Access_Control_User_Permission_Aggregate;
  value: Scalars['String'];
};


export type Access_Control_ActionLogsArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type Access_Control_ActionLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type Access_Control_ActionRole_PermissionsArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Access_Control_ActionRole_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Access_Control_ActionUser_PermissionsArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};


export type Access_Control_ActionUser_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};

export type Access_Control_Action_Aggregate = {
  __typename?: 'access_control_action_aggregate';
  aggregate?: Maybe<Access_Control_Action_Aggregate_Fields>;
  nodes: Array<Access_Control_Action>;
};

export type Access_Control_Action_Aggregate_Fields = {
  __typename?: 'access_control_action_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Access_Control_Action_Max_Fields>;
  min?: Maybe<Access_Control_Action_Min_Fields>;
};


export type Access_Control_Action_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Control_Action_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Access_Control_Action_Bool_Exp = {
  _and?: Maybe<Array<Access_Control_Action_Bool_Exp>>;
  _not?: Maybe<Access_Control_Action_Bool_Exp>;
  _or?: Maybe<Array<Access_Control_Action_Bool_Exp>>;
  logs?: Maybe<Access_Control_Log_Bool_Exp>;
  role_permissions?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
  user_permissions?: Maybe<Access_Control_User_Permission_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Access_Control_Action_Constraint {
  ActionPkey = 'action_pkey'
}

export enum Access_Control_Action_Enum {
  Create = 'CREATE',
  Delete = 'DELETE',
  Select = 'SELECT',
  Update = 'UPDATE'
}

export type Access_Control_Action_Enum_Comparison_Exp = {
  _eq?: Maybe<Access_Control_Action_Enum>;
  _in?: Maybe<Array<Access_Control_Action_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Access_Control_Action_Enum>;
  _nin?: Maybe<Array<Access_Control_Action_Enum>>;
};

export type Access_Control_Action_Insert_Input = {
  logs?: Maybe<Access_Control_Log_Arr_Rel_Insert_Input>;
  role_permissions?: Maybe<Access_Control_Role_Permission_Arr_Rel_Insert_Input>;
  user_permissions?: Maybe<Access_Control_User_Permission_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Access_Control_Action_Max_Fields = {
  __typename?: 'access_control_action_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Access_Control_Action_Min_Fields = {
  __typename?: 'access_control_action_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Access_Control_Action_Mutation_Response = {
  __typename?: 'access_control_action_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Access_Control_Action>;
};

export type Access_Control_Action_Obj_Rel_Insert_Input = {
  data: Access_Control_Action_Insert_Input;
  on_conflict?: Maybe<Access_Control_Action_On_Conflict>;
};

export type Access_Control_Action_On_Conflict = {
  constraint: Access_Control_Action_Constraint;
  update_columns?: Array<Access_Control_Action_Update_Column>;
  where?: Maybe<Access_Control_Action_Bool_Exp>;
};

export type Access_Control_Action_Order_By = {
  logs_aggregate?: Maybe<Access_Control_Log_Aggregate_Order_By>;
  role_permissions_aggregate?: Maybe<Access_Control_Role_Permission_Aggregate_Order_By>;
  user_permissions_aggregate?: Maybe<Access_Control_User_Permission_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Access_Control_Action_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Access_Control_Action_Select_Column {
  Value = 'value'
}

export type Access_Control_Action_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Access_Control_Action_Update_Column {
  Value = 'value'
}

export type Access_Control_Content = {
  __typename?: 'access_control_content';
  description?: Maybe<Scalars['String']>;
  entity: Access_Control_Entity_Enum;
  entityByEntity: Access_Control_Entity;
  id: Scalars['smallint'];
  lang: Scalars['smallint'];
  language: Misc_Language;
  name: Scalars['String'];
};

export type Access_Control_Content_Aggregate = {
  __typename?: 'access_control_content_aggregate';
  aggregate?: Maybe<Access_Control_Content_Aggregate_Fields>;
  nodes: Array<Access_Control_Content>;
};

export type Access_Control_Content_Aggregate_Fields = {
  __typename?: 'access_control_content_aggregate_fields';
  avg?: Maybe<Access_Control_Content_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Access_Control_Content_Max_Fields>;
  min?: Maybe<Access_Control_Content_Min_Fields>;
  stddev?: Maybe<Access_Control_Content_Stddev_Fields>;
  stddev_pop?: Maybe<Access_Control_Content_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Access_Control_Content_Stddev_Samp_Fields>;
  sum?: Maybe<Access_Control_Content_Sum_Fields>;
  var_pop?: Maybe<Access_Control_Content_Var_Pop_Fields>;
  var_samp?: Maybe<Access_Control_Content_Var_Samp_Fields>;
  variance?: Maybe<Access_Control_Content_Variance_Fields>;
};


export type Access_Control_Content_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Control_Content_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Access_Control_Content_Aggregate_Order_By = {
  avg?: Maybe<Access_Control_Content_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Access_Control_Content_Max_Order_By>;
  min?: Maybe<Access_Control_Content_Min_Order_By>;
  stddev?: Maybe<Access_Control_Content_Stddev_Order_By>;
  stddev_pop?: Maybe<Access_Control_Content_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Access_Control_Content_Stddev_Samp_Order_By>;
  sum?: Maybe<Access_Control_Content_Sum_Order_By>;
  var_pop?: Maybe<Access_Control_Content_Var_Pop_Order_By>;
  var_samp?: Maybe<Access_Control_Content_Var_Samp_Order_By>;
  variance?: Maybe<Access_Control_Content_Variance_Order_By>;
};

export type Access_Control_Content_Arr_Rel_Insert_Input = {
  data: Array<Access_Control_Content_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Content_On_Conflict>;
};

export type Access_Control_Content_Avg_Fields = {
  __typename?: 'access_control_content_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Access_Control_Content_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Access_Control_Content_Bool_Exp = {
  _and?: Maybe<Array<Access_Control_Content_Bool_Exp>>;
  _not?: Maybe<Access_Control_Content_Bool_Exp>;
  _or?: Maybe<Array<Access_Control_Content_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  entity?: Maybe<Access_Control_Entity_Enum_Comparison_Exp>;
  entityByEntity?: Maybe<Access_Control_Entity_Bool_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  lang?: Maybe<Smallint_Comparison_Exp>;
  language?: Maybe<Misc_Language_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Access_Control_Content_Constraint {
  ContentEntityLangKey = 'content_entity_lang_key',
  ContentPkey = 'content_pkey'
}

export type Access_Control_Content_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Access_Control_Content_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<Access_Control_Entity_Enum>;
  entityByEntity?: Maybe<Access_Control_Entity_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  language?: Maybe<Misc_Language_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

export type Access_Control_Content_Max_Fields = {
  __typename?: 'access_control_content_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Access_Control_Content_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Access_Control_Content_Min_Fields = {
  __typename?: 'access_control_content_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Access_Control_Content_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Access_Control_Content_Mutation_Response = {
  __typename?: 'access_control_content_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Access_Control_Content>;
};

export type Access_Control_Content_On_Conflict = {
  constraint: Access_Control_Content_Constraint;
  update_columns?: Array<Access_Control_Content_Update_Column>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};

export type Access_Control_Content_Order_By = {
  description?: Maybe<Order_By>;
  entity?: Maybe<Order_By>;
  entityByEntity?: Maybe<Access_Control_Entity_Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  language?: Maybe<Misc_Language_Order_By>;
  name?: Maybe<Order_By>;
};

export type Access_Control_Content_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Access_Control_Content_Select_Column {
  Description = 'description',
  Entity = 'entity',
  Id = 'id',
  Lang = 'lang',
  Name = 'name'
}

export type Access_Control_Content_Set_Input = {
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<Access_Control_Entity_Enum>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Access_Control_Content_Stddev_Fields = {
  __typename?: 'access_control_content_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Access_Control_Content_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Access_Control_Content_Stddev_Pop_Fields = {
  __typename?: 'access_control_content_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Access_Control_Content_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Access_Control_Content_Stddev_Samp_Fields = {
  __typename?: 'access_control_content_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Access_Control_Content_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Access_Control_Content_Sum_Fields = {
  __typename?: 'access_control_content_sum_fields';
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Access_Control_Content_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export enum Access_Control_Content_Update_Column {
  Description = 'description',
  Entity = 'entity',
  Id = 'id',
  Lang = 'lang',
  Name = 'name'
}

export type Access_Control_Content_Var_Pop_Fields = {
  __typename?: 'access_control_content_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Access_Control_Content_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Access_Control_Content_Var_Samp_Fields = {
  __typename?: 'access_control_content_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Access_Control_Content_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Access_Control_Content_Variance_Fields = {
  __typename?: 'access_control_content_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Access_Control_Content_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Access_Control_Entity = {
  __typename?: 'access_control_entity';
  contents: Array<Access_Control_Content>;
  contents_aggregate: Access_Control_Content_Aggregate;
  logs: Array<Access_Control_Log>;
  logs_aggregate: Access_Control_Log_Aggregate;
  role_permissions: Array<Access_Control_Role_Permission>;
  role_permissions_aggregate: Access_Control_Role_Permission_Aggregate;
  user_permissions: Array<Access_Control_User_Permission>;
  user_permissions_aggregate: Access_Control_User_Permission_Aggregate;
  value: Scalars['String'];
};


export type Access_Control_EntityContentsArgs = {
  distinct_on?: Maybe<Array<Access_Control_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Content_Order_By>>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};


export type Access_Control_EntityContents_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Content_Order_By>>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};


export type Access_Control_EntityLogsArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type Access_Control_EntityLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type Access_Control_EntityRole_PermissionsArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Access_Control_EntityRole_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Access_Control_EntityUser_PermissionsArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};


export type Access_Control_EntityUser_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};

export type Access_Control_Entity_Aggregate = {
  __typename?: 'access_control_entity_aggregate';
  aggregate?: Maybe<Access_Control_Entity_Aggregate_Fields>;
  nodes: Array<Access_Control_Entity>;
};

export type Access_Control_Entity_Aggregate_Fields = {
  __typename?: 'access_control_entity_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Access_Control_Entity_Max_Fields>;
  min?: Maybe<Access_Control_Entity_Min_Fields>;
};


export type Access_Control_Entity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Control_Entity_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Access_Control_Entity_Bool_Exp = {
  _and?: Maybe<Array<Access_Control_Entity_Bool_Exp>>;
  _not?: Maybe<Access_Control_Entity_Bool_Exp>;
  _or?: Maybe<Array<Access_Control_Entity_Bool_Exp>>;
  contents?: Maybe<Access_Control_Content_Bool_Exp>;
  logs?: Maybe<Access_Control_Log_Bool_Exp>;
  role_permissions?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
  user_permissions?: Maybe<Access_Control_User_Permission_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Access_Control_Entity_Constraint {
  EntityPkey = 'entity_pkey'
}

export enum Access_Control_Entity_Enum {
  User = 'user'
}

export type Access_Control_Entity_Enum_Comparison_Exp = {
  _eq?: Maybe<Access_Control_Entity_Enum>;
  _in?: Maybe<Array<Access_Control_Entity_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Access_Control_Entity_Enum>;
  _nin?: Maybe<Array<Access_Control_Entity_Enum>>;
};

export type Access_Control_Entity_Insert_Input = {
  contents?: Maybe<Access_Control_Content_Arr_Rel_Insert_Input>;
  logs?: Maybe<Access_Control_Log_Arr_Rel_Insert_Input>;
  role_permissions?: Maybe<Access_Control_Role_Permission_Arr_Rel_Insert_Input>;
  user_permissions?: Maybe<Access_Control_User_Permission_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Access_Control_Entity_Max_Fields = {
  __typename?: 'access_control_entity_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Access_Control_Entity_Min_Fields = {
  __typename?: 'access_control_entity_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Access_Control_Entity_Mutation_Response = {
  __typename?: 'access_control_entity_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Access_Control_Entity>;
};

export type Access_Control_Entity_Obj_Rel_Insert_Input = {
  data: Access_Control_Entity_Insert_Input;
  on_conflict?: Maybe<Access_Control_Entity_On_Conflict>;
};

export type Access_Control_Entity_On_Conflict = {
  constraint: Access_Control_Entity_Constraint;
  update_columns?: Array<Access_Control_Entity_Update_Column>;
  where?: Maybe<Access_Control_Entity_Bool_Exp>;
};

export type Access_Control_Entity_Order_By = {
  contents_aggregate?: Maybe<Access_Control_Content_Aggregate_Order_By>;
  logs_aggregate?: Maybe<Access_Control_Log_Aggregate_Order_By>;
  role_permissions_aggregate?: Maybe<Access_Control_Role_Permission_Aggregate_Order_By>;
  user_permissions_aggregate?: Maybe<Access_Control_User_Permission_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Access_Control_Entity_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Access_Control_Entity_Select_Column {
  Value = 'value'
}

export type Access_Control_Entity_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Access_Control_Entity_Update_Column {
  Value = 'value'
}

export type Access_Control_Log = {
  __typename?: 'access_control_log';
  action: Access_Control_Action_Enum;
  actionByAction: Access_Control_Action;
  created_at: Scalars['timestamptz'];
  entity: Access_Control_Entity_Enum;
  entityByEntity: Access_Control_Entity;
  entity_id: Scalars['String'];
  ip: Scalars['inet'];
  new?: Maybe<Scalars['json']>;
  old?: Maybe<Scalars['json']>;
  user: User;
  user_agent: Scalars['String'];
  user_id: Scalars['Int'];
};


export type Access_Control_LogNewArgs = {
  path?: Maybe<Scalars['String']>;
};


export type Access_Control_LogOldArgs = {
  path?: Maybe<Scalars['String']>;
};

export type Access_Control_Log_Aggregate = {
  __typename?: 'access_control_log_aggregate';
  aggregate?: Maybe<Access_Control_Log_Aggregate_Fields>;
  nodes: Array<Access_Control_Log>;
};

export type Access_Control_Log_Aggregate_Fields = {
  __typename?: 'access_control_log_aggregate_fields';
  avg?: Maybe<Access_Control_Log_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Access_Control_Log_Max_Fields>;
  min?: Maybe<Access_Control_Log_Min_Fields>;
  stddev?: Maybe<Access_Control_Log_Stddev_Fields>;
  stddev_pop?: Maybe<Access_Control_Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Access_Control_Log_Stddev_Samp_Fields>;
  sum?: Maybe<Access_Control_Log_Sum_Fields>;
  var_pop?: Maybe<Access_Control_Log_Var_Pop_Fields>;
  var_samp?: Maybe<Access_Control_Log_Var_Samp_Fields>;
  variance?: Maybe<Access_Control_Log_Variance_Fields>;
};


export type Access_Control_Log_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Control_Log_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Access_Control_Log_Aggregate_Order_By = {
  avg?: Maybe<Access_Control_Log_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Access_Control_Log_Max_Order_By>;
  min?: Maybe<Access_Control_Log_Min_Order_By>;
  stddev?: Maybe<Access_Control_Log_Stddev_Order_By>;
  stddev_pop?: Maybe<Access_Control_Log_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Access_Control_Log_Stddev_Samp_Order_By>;
  sum?: Maybe<Access_Control_Log_Sum_Order_By>;
  var_pop?: Maybe<Access_Control_Log_Var_Pop_Order_By>;
  var_samp?: Maybe<Access_Control_Log_Var_Samp_Order_By>;
  variance?: Maybe<Access_Control_Log_Variance_Order_By>;
};

export type Access_Control_Log_Arr_Rel_Insert_Input = {
  data: Array<Access_Control_Log_Insert_Input>;
};

export type Access_Control_Log_Avg_Fields = {
  __typename?: 'access_control_log_avg_fields';
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Log_Avg_Order_By = {
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Bool_Exp = {
  _and?: Maybe<Array<Access_Control_Log_Bool_Exp>>;
  _not?: Maybe<Access_Control_Log_Bool_Exp>;
  _or?: Maybe<Array<Access_Control_Log_Bool_Exp>>;
  action?: Maybe<Access_Control_Action_Enum_Comparison_Exp>;
  actionByAction?: Maybe<Access_Control_Action_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  entity?: Maybe<Access_Control_Entity_Enum_Comparison_Exp>;
  entityByEntity?: Maybe<Access_Control_Entity_Bool_Exp>;
  entity_id?: Maybe<String_Comparison_Exp>;
  ip?: Maybe<Inet_Comparison_Exp>;
  new?: Maybe<Json_Comparison_Exp>;
  old?: Maybe<Json_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_agent?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

export type Access_Control_Log_Inc_Input = {
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Log_Insert_Input = {
  action?: Maybe<Access_Control_Action_Enum>;
  actionByAction?: Maybe<Access_Control_Action_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity?: Maybe<Access_Control_Entity_Enum>;
  entityByEntity?: Maybe<Access_Control_Entity_Obj_Rel_Insert_Input>;
  entity_id?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['inet']>;
  new?: Maybe<Scalars['json']>;
  old?: Maybe<Scalars['json']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Log_Max_Fields = {
  __typename?: 'access_control_log_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['String']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Log_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Min_Fields = {
  __typename?: 'access_control_log_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  entity_id?: Maybe<Scalars['String']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Log_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  entity_id?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Mutation_Response = {
  __typename?: 'access_control_log_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Access_Control_Log>;
};

export type Access_Control_Log_Order_By = {
  action?: Maybe<Order_By>;
  actionByAction?: Maybe<Access_Control_Action_Order_By>;
  created_at?: Maybe<Order_By>;
  entity?: Maybe<Order_By>;
  entityByEntity?: Maybe<Access_Control_Entity_Order_By>;
  entity_id?: Maybe<Order_By>;
  ip?: Maybe<Order_By>;
  new?: Maybe<Order_By>;
  old?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_agent?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Access_Control_Log_Select_Column {
  Action = 'action',
  CreatedAt = 'created_at',
  Entity = 'entity',
  EntityId = 'entity_id',
  Ip = 'ip',
  New = 'new',
  Old = 'old',
  UserAgent = 'user_agent',
  UserId = 'user_id'
}

export type Access_Control_Log_Set_Input = {
  action?: Maybe<Access_Control_Action_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity?: Maybe<Access_Control_Entity_Enum>;
  entity_id?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['inet']>;
  new?: Maybe<Scalars['json']>;
  old?: Maybe<Scalars['json']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Log_Stddev_Fields = {
  __typename?: 'access_control_log_stddev_fields';
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Log_Stddev_Order_By = {
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Stddev_Pop_Fields = {
  __typename?: 'access_control_log_stddev_pop_fields';
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Log_Stddev_Pop_Order_By = {
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Stddev_Samp_Fields = {
  __typename?: 'access_control_log_stddev_samp_fields';
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Log_Stddev_Samp_Order_By = {
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Sum_Fields = {
  __typename?: 'access_control_log_sum_fields';
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Log_Sum_Order_By = {
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Var_Pop_Fields = {
  __typename?: 'access_control_log_var_pop_fields';
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Log_Var_Pop_Order_By = {
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Var_Samp_Fields = {
  __typename?: 'access_control_log_var_samp_fields';
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Log_Var_Samp_Order_By = {
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Log_Variance_Fields = {
  __typename?: 'access_control_log_variance_fields';
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Log_Variance_Order_By = {
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role = {
  __typename?: 'access_control_role';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  role_permissions: Array<Access_Control_Role_Permission>;
  role_permissions_aggregate: Access_Control_Role_Permission_Aggregate;
  role_users: Array<Access_Control_Role_User>;
  role_users_aggregate: Access_Control_Role_User_Aggregate;
  updated_at: Scalars['timestamptz'];
};


export type Access_Control_RoleRole_PermissionsArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Access_Control_RoleRole_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Access_Control_RoleRole_UsersArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_User_Order_By>>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};


export type Access_Control_RoleRole_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_User_Order_By>>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};

export type Access_Control_Role_Aggregate = {
  __typename?: 'access_control_role_aggregate';
  aggregate?: Maybe<Access_Control_Role_Aggregate_Fields>;
  nodes: Array<Access_Control_Role>;
};

export type Access_Control_Role_Aggregate_Fields = {
  __typename?: 'access_control_role_aggregate_fields';
  avg?: Maybe<Access_Control_Role_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Access_Control_Role_Max_Fields>;
  min?: Maybe<Access_Control_Role_Min_Fields>;
  stddev?: Maybe<Access_Control_Role_Stddev_Fields>;
  stddev_pop?: Maybe<Access_Control_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Access_Control_Role_Stddev_Samp_Fields>;
  sum?: Maybe<Access_Control_Role_Sum_Fields>;
  var_pop?: Maybe<Access_Control_Role_Var_Pop_Fields>;
  var_samp?: Maybe<Access_Control_Role_Var_Samp_Fields>;
  variance?: Maybe<Access_Control_Role_Variance_Fields>;
};


export type Access_Control_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Control_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Access_Control_Role_Avg_Fields = {
  __typename?: 'access_control_role_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Bool_Exp = {
  _and?: Maybe<Array<Access_Control_Role_Bool_Exp>>;
  _not?: Maybe<Access_Control_Role_Bool_Exp>;
  _or?: Maybe<Array<Access_Control_Role_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  role_permissions?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
  role_users?: Maybe<Access_Control_Role_User_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Access_Control_Role_Constraint {
  RolePkey = 'role_pkey'
}

export type Access_Control_Role_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  role_permissions?: Maybe<Access_Control_Role_Permission_Arr_Rel_Insert_Input>;
  role_users?: Maybe<Access_Control_Role_User_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Access_Control_Role_Max_Fields = {
  __typename?: 'access_control_role_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Access_Control_Role_Min_Fields = {
  __typename?: 'access_control_role_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Access_Control_Role_Mutation_Response = {
  __typename?: 'access_control_role_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Access_Control_Role>;
};

export type Access_Control_Role_Obj_Rel_Insert_Input = {
  data: Access_Control_Role_Insert_Input;
  on_conflict?: Maybe<Access_Control_Role_On_Conflict>;
};

export type Access_Control_Role_On_Conflict = {
  constraint: Access_Control_Role_Constraint;
  update_columns?: Array<Access_Control_Role_Update_Column>;
  where?: Maybe<Access_Control_Role_Bool_Exp>;
};

export type Access_Control_Role_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  role_permissions_aggregate?: Maybe<Access_Control_Role_Permission_Aggregate_Order_By>;
  role_users_aggregate?: Maybe<Access_Control_Role_User_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission = {
  __typename?: 'access_control_role_permission';
  action: Access_Control_Action_Enum;
  actionByAction: Access_Control_Action;
  created_at: Scalars['timestamptz'];
  entity: Access_Control_Entity_Enum;
  entityByEntity: Access_Control_Entity;
  id: Scalars['Int'];
  role: Access_Control_Role;
  role_id: Scalars['Int'];
};

export type Access_Control_Role_Permission_Aggregate = {
  __typename?: 'access_control_role_permission_aggregate';
  aggregate?: Maybe<Access_Control_Role_Permission_Aggregate_Fields>;
  nodes: Array<Access_Control_Role_Permission>;
};

export type Access_Control_Role_Permission_Aggregate_Fields = {
  __typename?: 'access_control_role_permission_aggregate_fields';
  avg?: Maybe<Access_Control_Role_Permission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Access_Control_Role_Permission_Max_Fields>;
  min?: Maybe<Access_Control_Role_Permission_Min_Fields>;
  stddev?: Maybe<Access_Control_Role_Permission_Stddev_Fields>;
  stddev_pop?: Maybe<Access_Control_Role_Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Access_Control_Role_Permission_Stddev_Samp_Fields>;
  sum?: Maybe<Access_Control_Role_Permission_Sum_Fields>;
  var_pop?: Maybe<Access_Control_Role_Permission_Var_Pop_Fields>;
  var_samp?: Maybe<Access_Control_Role_Permission_Var_Samp_Fields>;
  variance?: Maybe<Access_Control_Role_Permission_Variance_Fields>;
};


export type Access_Control_Role_Permission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Access_Control_Role_Permission_Aggregate_Order_By = {
  avg?: Maybe<Access_Control_Role_Permission_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Access_Control_Role_Permission_Max_Order_By>;
  min?: Maybe<Access_Control_Role_Permission_Min_Order_By>;
  stddev?: Maybe<Access_Control_Role_Permission_Stddev_Order_By>;
  stddev_pop?: Maybe<Access_Control_Role_Permission_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Access_Control_Role_Permission_Stddev_Samp_Order_By>;
  sum?: Maybe<Access_Control_Role_Permission_Sum_Order_By>;
  var_pop?: Maybe<Access_Control_Role_Permission_Var_Pop_Order_By>;
  var_samp?: Maybe<Access_Control_Role_Permission_Var_Samp_Order_By>;
  variance?: Maybe<Access_Control_Role_Permission_Variance_Order_By>;
};

export type Access_Control_Role_Permission_Arr_Rel_Insert_Input = {
  data: Array<Access_Control_Role_Permission_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Role_Permission_On_Conflict>;
};

export type Access_Control_Role_Permission_Avg_Fields = {
  __typename?: 'access_control_role_permission_avg_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Permission_Avg_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Bool_Exp = {
  _and?: Maybe<Array<Access_Control_Role_Permission_Bool_Exp>>;
  _not?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
  _or?: Maybe<Array<Access_Control_Role_Permission_Bool_Exp>>;
  action?: Maybe<Access_Control_Action_Enum_Comparison_Exp>;
  actionByAction?: Maybe<Access_Control_Action_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  entity?: Maybe<Access_Control_Entity_Enum_Comparison_Exp>;
  entityByEntity?: Maybe<Access_Control_Entity_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<Access_Control_Role_Bool_Exp>;
  role_id?: Maybe<Int_Comparison_Exp>;
};

export enum Access_Control_Role_Permission_Constraint {
  RolePermissionPkey = 'role_permission_pkey',
  RolePermissionRoleIdEntityActionKey = 'role_permission_role_id_entity_action_key'
}

export type Access_Control_Role_Permission_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_Permission_Insert_Input = {
  action?: Maybe<Access_Control_Action_Enum>;
  actionByAction?: Maybe<Access_Control_Action_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity?: Maybe<Access_Control_Entity_Enum>;
  entityByEntity?: Maybe<Access_Control_Entity_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Access_Control_Role_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_Permission_Max_Fields = {
  __typename?: 'access_control_role_permission_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_Permission_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Min_Fields = {
  __typename?: 'access_control_role_permission_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_Permission_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Mutation_Response = {
  __typename?: 'access_control_role_permission_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Access_Control_Role_Permission>;
};

export type Access_Control_Role_Permission_On_Conflict = {
  constraint: Access_Control_Role_Permission_Constraint;
  update_columns?: Array<Access_Control_Role_Permission_Update_Column>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};

export type Access_Control_Role_Permission_Order_By = {
  action?: Maybe<Order_By>;
  actionByAction?: Maybe<Access_Control_Action_Order_By>;
  created_at?: Maybe<Order_By>;
  entity?: Maybe<Order_By>;
  entityByEntity?: Maybe<Access_Control_Entity_Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Access_Control_Role_Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Access_Control_Role_Permission_Select_Column {
  Action = 'action',
  CreatedAt = 'created_at',
  Entity = 'entity',
  Id = 'id',
  RoleId = 'role_id'
}

export type Access_Control_Role_Permission_Set_Input = {
  action?: Maybe<Access_Control_Action_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity?: Maybe<Access_Control_Entity_Enum>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_Permission_Stddev_Fields = {
  __typename?: 'access_control_role_permission_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Permission_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Stddev_Pop_Fields = {
  __typename?: 'access_control_role_permission_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Permission_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Stddev_Samp_Fields = {
  __typename?: 'access_control_role_permission_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Permission_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Sum_Fields = {
  __typename?: 'access_control_role_permission_sum_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_Permission_Sum_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export enum Access_Control_Role_Permission_Update_Column {
  Action = 'action',
  CreatedAt = 'created_at',
  Entity = 'entity',
  Id = 'id',
  RoleId = 'role_id'
}

export type Access_Control_Role_Permission_Var_Pop_Fields = {
  __typename?: 'access_control_role_permission_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Permission_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Var_Samp_Fields = {
  __typename?: 'access_control_role_permission_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Permission_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Permission_Variance_Fields = {
  __typename?: 'access_control_role_permission_variance_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Permission_Variance_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Access_Control_Role_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Access_Control_Role_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Access_Control_Role_Stddev_Fields = {
  __typename?: 'access_control_role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Stddev_Pop_Fields = {
  __typename?: 'access_control_role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Stddev_Samp_Fields = {
  __typename?: 'access_control_role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Sum_Fields = {
  __typename?: 'access_control_role_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export enum Access_Control_Role_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Access_Control_Role_User = {
  __typename?: 'access_control_role_user';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  role: Access_Control_Role;
  role_id: Scalars['Int'];
  user: User;
  user_id: Scalars['Int'];
};

export type Access_Control_Role_User_Aggregate = {
  __typename?: 'access_control_role_user_aggregate';
  aggregate?: Maybe<Access_Control_Role_User_Aggregate_Fields>;
  nodes: Array<Access_Control_Role_User>;
};

export type Access_Control_Role_User_Aggregate_Fields = {
  __typename?: 'access_control_role_user_aggregate_fields';
  avg?: Maybe<Access_Control_Role_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Access_Control_Role_User_Max_Fields>;
  min?: Maybe<Access_Control_Role_User_Min_Fields>;
  stddev?: Maybe<Access_Control_Role_User_Stddev_Fields>;
  stddev_pop?: Maybe<Access_Control_Role_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Access_Control_Role_User_Stddev_Samp_Fields>;
  sum?: Maybe<Access_Control_Role_User_Sum_Fields>;
  var_pop?: Maybe<Access_Control_Role_User_Var_Pop_Fields>;
  var_samp?: Maybe<Access_Control_Role_User_Var_Samp_Fields>;
  variance?: Maybe<Access_Control_Role_User_Variance_Fields>;
};


export type Access_Control_Role_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Access_Control_Role_User_Aggregate_Order_By = {
  avg?: Maybe<Access_Control_Role_User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Access_Control_Role_User_Max_Order_By>;
  min?: Maybe<Access_Control_Role_User_Min_Order_By>;
  stddev?: Maybe<Access_Control_Role_User_Stddev_Order_By>;
  stddev_pop?: Maybe<Access_Control_Role_User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Access_Control_Role_User_Stddev_Samp_Order_By>;
  sum?: Maybe<Access_Control_Role_User_Sum_Order_By>;
  var_pop?: Maybe<Access_Control_Role_User_Var_Pop_Order_By>;
  var_samp?: Maybe<Access_Control_Role_User_Var_Samp_Order_By>;
  variance?: Maybe<Access_Control_Role_User_Variance_Order_By>;
};

export type Access_Control_Role_User_Arr_Rel_Insert_Input = {
  data: Array<Access_Control_Role_User_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Role_User_On_Conflict>;
};

export type Access_Control_Role_User_Avg_Fields = {
  __typename?: 'access_control_role_user_avg_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_User_Avg_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Bool_Exp = {
  _and?: Maybe<Array<Access_Control_Role_User_Bool_Exp>>;
  _not?: Maybe<Access_Control_Role_User_Bool_Exp>;
  _or?: Maybe<Array<Access_Control_Role_User_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<Access_Control_Role_Bool_Exp>;
  role_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

export enum Access_Control_Role_User_Constraint {
  RoleUserPkey = 'role_user_pkey',
  RoleUserUserIdRoleIdKey = 'role_user_user_id_role_id_key'
}

export type Access_Control_Role_User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Access_Control_Role_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_User_Max_Fields = {
  __typename?: 'access_control_role_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_User_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Min_Fields = {
  __typename?: 'access_control_role_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_User_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Mutation_Response = {
  __typename?: 'access_control_role_user_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Access_Control_Role_User>;
};

export type Access_Control_Role_User_On_Conflict = {
  constraint: Access_Control_Role_User_Constraint;
  update_columns?: Array<Access_Control_Role_User_Update_Column>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};

export type Access_Control_Role_User_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Access_Control_Role_Order_By>;
  role_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Access_Control_Role_User_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  RoleId = 'role_id',
  UserId = 'user_id'
}

export type Access_Control_Role_User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_User_Stddev_Fields = {
  __typename?: 'access_control_role_user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Stddev_Pop_Fields = {
  __typename?: 'access_control_role_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Stddev_Samp_Fields = {
  __typename?: 'access_control_role_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Sum_Fields = {
  __typename?: 'access_control_role_user_sum_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_Role_User_Sum_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Access_Control_Role_User_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  RoleId = 'role_id',
  UserId = 'user_id'
}

export type Access_Control_Role_User_Var_Pop_Fields = {
  __typename?: 'access_control_role_user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Var_Samp_Fields = {
  __typename?: 'access_control_role_user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_User_Variance_Fields = {
  __typename?: 'access_control_role_user_variance_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_User_Variance_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_Role_Var_Pop_Fields = {
  __typename?: 'access_control_role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Var_Samp_Fields = {
  __typename?: 'access_control_role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Access_Control_Role_Variance_Fields = {
  __typename?: 'access_control_role_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Access_Control_User_Permission = {
  __typename?: 'access_control_user_permission';
  action: Access_Control_Action_Enum;
  actionByAction: Access_Control_Action;
  created_at: Scalars['timestamptz'];
  entity: Access_Control_Entity_Enum;
  entityByEntity: Access_Control_Entity;
  id: Scalars['Int'];
  user: User;
  user_id: Scalars['Int'];
};

export type Access_Control_User_Permission_Aggregate = {
  __typename?: 'access_control_user_permission_aggregate';
  aggregate?: Maybe<Access_Control_User_Permission_Aggregate_Fields>;
  nodes: Array<Access_Control_User_Permission>;
};

export type Access_Control_User_Permission_Aggregate_Fields = {
  __typename?: 'access_control_user_permission_aggregate_fields';
  avg?: Maybe<Access_Control_User_Permission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Access_Control_User_Permission_Max_Fields>;
  min?: Maybe<Access_Control_User_Permission_Min_Fields>;
  stddev?: Maybe<Access_Control_User_Permission_Stddev_Fields>;
  stddev_pop?: Maybe<Access_Control_User_Permission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Access_Control_User_Permission_Stddev_Samp_Fields>;
  sum?: Maybe<Access_Control_User_Permission_Sum_Fields>;
  var_pop?: Maybe<Access_Control_User_Permission_Var_Pop_Fields>;
  var_samp?: Maybe<Access_Control_User_Permission_Var_Samp_Fields>;
  variance?: Maybe<Access_Control_User_Permission_Variance_Fields>;
};


export type Access_Control_User_Permission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Access_Control_User_Permission_Aggregate_Order_By = {
  avg?: Maybe<Access_Control_User_Permission_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Access_Control_User_Permission_Max_Order_By>;
  min?: Maybe<Access_Control_User_Permission_Min_Order_By>;
  stddev?: Maybe<Access_Control_User_Permission_Stddev_Order_By>;
  stddev_pop?: Maybe<Access_Control_User_Permission_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Access_Control_User_Permission_Stddev_Samp_Order_By>;
  sum?: Maybe<Access_Control_User_Permission_Sum_Order_By>;
  var_pop?: Maybe<Access_Control_User_Permission_Var_Pop_Order_By>;
  var_samp?: Maybe<Access_Control_User_Permission_Var_Samp_Order_By>;
  variance?: Maybe<Access_Control_User_Permission_Variance_Order_By>;
};

export type Access_Control_User_Permission_Arr_Rel_Insert_Input = {
  data: Array<Access_Control_User_Permission_Insert_Input>;
  on_conflict?: Maybe<Access_Control_User_Permission_On_Conflict>;
};

export type Access_Control_User_Permission_Avg_Fields = {
  __typename?: 'access_control_user_permission_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_User_Permission_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Bool_Exp = {
  _and?: Maybe<Array<Access_Control_User_Permission_Bool_Exp>>;
  _not?: Maybe<Access_Control_User_Permission_Bool_Exp>;
  _or?: Maybe<Array<Access_Control_User_Permission_Bool_Exp>>;
  action?: Maybe<Access_Control_Action_Enum_Comparison_Exp>;
  actionByAction?: Maybe<Access_Control_Action_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  entity?: Maybe<Access_Control_Entity_Enum_Comparison_Exp>;
  entityByEntity?: Maybe<Access_Control_Entity_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

export enum Access_Control_User_Permission_Constraint {
  UserPermissionPkey = 'user_permission_pkey',
  UserPermissionUserIdEntityActionKey = 'user_permission_user_id_entity_action_key'
}

export type Access_Control_User_Permission_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_User_Permission_Insert_Input = {
  action?: Maybe<Access_Control_Action_Enum>;
  actionByAction?: Maybe<Access_Control_Action_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity?: Maybe<Access_Control_Entity_Enum>;
  entityByEntity?: Maybe<Access_Control_Entity_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_User_Permission_Max_Fields = {
  __typename?: 'access_control_user_permission_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_User_Permission_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Min_Fields = {
  __typename?: 'access_control_user_permission_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_User_Permission_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Mutation_Response = {
  __typename?: 'access_control_user_permission_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Access_Control_User_Permission>;
};

export type Access_Control_User_Permission_On_Conflict = {
  constraint: Access_Control_User_Permission_Constraint;
  update_columns?: Array<Access_Control_User_Permission_Update_Column>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};

export type Access_Control_User_Permission_Order_By = {
  action?: Maybe<Order_By>;
  actionByAction?: Maybe<Access_Control_Action_Order_By>;
  created_at?: Maybe<Order_By>;
  entity?: Maybe<Order_By>;
  entityByEntity?: Maybe<Access_Control_Entity_Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Access_Control_User_Permission_Select_Column {
  Action = 'action',
  CreatedAt = 'created_at',
  Entity = 'entity',
  Id = 'id',
  UserId = 'user_id'
}

export type Access_Control_User_Permission_Set_Input = {
  action?: Maybe<Access_Control_Action_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entity?: Maybe<Access_Control_Entity_Enum>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_User_Permission_Stddev_Fields = {
  __typename?: 'access_control_user_permission_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_User_Permission_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Stddev_Pop_Fields = {
  __typename?: 'access_control_user_permission_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_User_Permission_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Stddev_Samp_Fields = {
  __typename?: 'access_control_user_permission_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_User_Permission_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Sum_Fields = {
  __typename?: 'access_control_user_permission_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Access_Control_User_Permission_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Access_Control_User_Permission_Update_Column {
  Action = 'action',
  CreatedAt = 'created_at',
  Entity = 'entity',
  Id = 'id',
  UserId = 'user_id'
}

export type Access_Control_User_Permission_Var_Pop_Fields = {
  __typename?: 'access_control_user_permission_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_User_Permission_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Var_Samp_Fields = {
  __typename?: 'access_control_user_permission_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_User_Permission_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Access_Control_User_Permission_Variance_Fields = {
  __typename?: 'access_control_user_permission_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Access_Control_User_Permission_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Action_Resp_Bool = {
  __typename?: 'action_resp_bool';
  succeeded: Scalars['Boolean'];
};

export type Auth_Access_Token = {
  __typename?: 'auth_access_token';
  blacklist?: Maybe<Auth_Blacklist>;
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  ip_address: Scalars['String'];
  personal: Scalars['Boolean'];
  user: User;
  user_agent?: Maybe<Scalars['String']>;
  user_id: Scalars['Int'];
};

export type Auth_Access_Token_Aggregate = {
  __typename?: 'auth_access_token_aggregate';
  aggregate?: Maybe<Auth_Access_Token_Aggregate_Fields>;
  nodes: Array<Auth_Access_Token>;
};

export type Auth_Access_Token_Aggregate_Fields = {
  __typename?: 'auth_access_token_aggregate_fields';
  avg?: Maybe<Auth_Access_Token_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Access_Token_Max_Fields>;
  min?: Maybe<Auth_Access_Token_Min_Fields>;
  stddev?: Maybe<Auth_Access_Token_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Access_Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Access_Token_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Access_Token_Sum_Fields>;
  var_pop?: Maybe<Auth_Access_Token_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Access_Token_Var_Samp_Fields>;
  variance?: Maybe<Auth_Access_Token_Variance_Fields>;
};


export type Auth_Access_Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Access_Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Auth_Access_Token_Aggregate_Order_By = {
  avg?: Maybe<Auth_Access_Token_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Access_Token_Max_Order_By>;
  min?: Maybe<Auth_Access_Token_Min_Order_By>;
  stddev?: Maybe<Auth_Access_Token_Stddev_Order_By>;
  stddev_pop?: Maybe<Auth_Access_Token_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Auth_Access_Token_Stddev_Samp_Order_By>;
  sum?: Maybe<Auth_Access_Token_Sum_Order_By>;
  var_pop?: Maybe<Auth_Access_Token_Var_Pop_Order_By>;
  var_samp?: Maybe<Auth_Access_Token_Var_Samp_Order_By>;
  variance?: Maybe<Auth_Access_Token_Variance_Order_By>;
};

export type Auth_Access_Token_Arr_Rel_Insert_Input = {
  data: Array<Auth_Access_Token_Insert_Input>;
  on_conflict?: Maybe<Auth_Access_Token_On_Conflict>;
};

export type Auth_Access_Token_Avg_Fields = {
  __typename?: 'auth_access_token_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Access_Token_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Bool_Exp = {
  _and?: Maybe<Array<Auth_Access_Token_Bool_Exp>>;
  _not?: Maybe<Auth_Access_Token_Bool_Exp>;
  _or?: Maybe<Array<Auth_Access_Token_Bool_Exp>>;
  blacklist?: Maybe<Auth_Blacklist_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  ip_address?: Maybe<String_Comparison_Exp>;
  personal?: Maybe<Boolean_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_agent?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

export enum Auth_Access_Token_Constraint {
  AccessTokenPkey = 'access_token_pkey'
}

export type Auth_Access_Token_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Auth_Access_Token_Insert_Input = {
  blacklist?: Maybe<Auth_Blacklist_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  ip_address?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Auth_Access_Token_Max_Fields = {
  __typename?: 'auth_access_token_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  ip_address?: Maybe<Scalars['String']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Auth_Access_Token_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ip_address?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Min_Fields = {
  __typename?: 'auth_access_token_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  ip_address?: Maybe<Scalars['String']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Auth_Access_Token_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ip_address?: Maybe<Order_By>;
  user_agent?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Mutation_Response = {
  __typename?: 'auth_access_token_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Auth_Access_Token>;
};

export type Auth_Access_Token_Obj_Rel_Insert_Input = {
  data: Auth_Access_Token_Insert_Input;
  on_conflict?: Maybe<Auth_Access_Token_On_Conflict>;
};

export type Auth_Access_Token_On_Conflict = {
  constraint: Auth_Access_Token_Constraint;
  update_columns?: Array<Auth_Access_Token_Update_Column>;
  where?: Maybe<Auth_Access_Token_Bool_Exp>;
};

export type Auth_Access_Token_Order_By = {
  blacklist?: Maybe<Auth_Blacklist_Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ip_address?: Maybe<Order_By>;
  personal?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_agent?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Auth_Access_Token_Select_Column {
  CreatedAt = 'created_at',
  ExpiresAt = 'expires_at',
  Id = 'id',
  IpAddress = 'ip_address',
  Personal = 'personal',
  UserAgent = 'user_agent',
  UserId = 'user_id'
}

export type Auth_Access_Token_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  ip_address?: Maybe<Scalars['String']>;
  personal?: Maybe<Scalars['Boolean']>;
  user_agent?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Auth_Access_Token_Stddev_Fields = {
  __typename?: 'auth_access_token_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Access_Token_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Stddev_Pop_Fields = {
  __typename?: 'auth_access_token_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Access_Token_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Stddev_Samp_Fields = {
  __typename?: 'auth_access_token_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Access_Token_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Sum_Fields = {
  __typename?: 'auth_access_token_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Auth_Access_Token_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Auth_Access_Token_Update_Column {
  CreatedAt = 'created_at',
  ExpiresAt = 'expires_at',
  Id = 'id',
  IpAddress = 'ip_address',
  Personal = 'personal',
  UserAgent = 'user_agent',
  UserId = 'user_id'
}

export type Auth_Access_Token_Var_Pop_Fields = {
  __typename?: 'auth_access_token_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Access_Token_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Var_Samp_Fields = {
  __typename?: 'auth_access_token_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Access_Token_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Access_Token_Variance_Fields = {
  __typename?: 'auth_access_token_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Access_Token_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Blacklist = {
  __typename?: 'auth_blacklist';
  access_token: Auth_Access_Token;
  id: Scalars['Int'];
};

export type Auth_Blacklist_Aggregate = {
  __typename?: 'auth_blacklist_aggregate';
  aggregate?: Maybe<Auth_Blacklist_Aggregate_Fields>;
  nodes: Array<Auth_Blacklist>;
};

export type Auth_Blacklist_Aggregate_Fields = {
  __typename?: 'auth_blacklist_aggregate_fields';
  avg?: Maybe<Auth_Blacklist_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Blacklist_Max_Fields>;
  min?: Maybe<Auth_Blacklist_Min_Fields>;
  stddev?: Maybe<Auth_Blacklist_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Blacklist_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Blacklist_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Blacklist_Sum_Fields>;
  var_pop?: Maybe<Auth_Blacklist_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Blacklist_Var_Samp_Fields>;
  variance?: Maybe<Auth_Blacklist_Variance_Fields>;
};


export type Auth_Blacklist_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Blacklist_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Auth_Blacklist_Avg_Fields = {
  __typename?: 'auth_blacklist_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Blacklist_Bool_Exp = {
  _and?: Maybe<Array<Auth_Blacklist_Bool_Exp>>;
  _not?: Maybe<Auth_Blacklist_Bool_Exp>;
  _or?: Maybe<Array<Auth_Blacklist_Bool_Exp>>;
  access_token?: Maybe<Auth_Access_Token_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

export enum Auth_Blacklist_Constraint {
  BlacklistPkey = 'blacklist_pkey'
}

export type Auth_Blacklist_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Auth_Blacklist_Insert_Input = {
  access_token?: Maybe<Auth_Access_Token_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
};

export type Auth_Blacklist_Max_Fields = {
  __typename?: 'auth_blacklist_max_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Auth_Blacklist_Min_Fields = {
  __typename?: 'auth_blacklist_min_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Auth_Blacklist_Mutation_Response = {
  __typename?: 'auth_blacklist_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Auth_Blacklist>;
};

export type Auth_Blacklist_Obj_Rel_Insert_Input = {
  data: Auth_Blacklist_Insert_Input;
  on_conflict?: Maybe<Auth_Blacklist_On_Conflict>;
};

export type Auth_Blacklist_On_Conflict = {
  constraint: Auth_Blacklist_Constraint;
  update_columns?: Array<Auth_Blacklist_Update_Column>;
  where?: Maybe<Auth_Blacklist_Bool_Exp>;
};

export type Auth_Blacklist_Order_By = {
  access_token?: Maybe<Auth_Access_Token_Order_By>;
  id?: Maybe<Order_By>;
};

export type Auth_Blacklist_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Auth_Blacklist_Select_Column {
  Id = 'id'
}

export type Auth_Blacklist_Set_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Auth_Blacklist_Stddev_Fields = {
  __typename?: 'auth_blacklist_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Blacklist_Stddev_Pop_Fields = {
  __typename?: 'auth_blacklist_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Blacklist_Stddev_Samp_Fields = {
  __typename?: 'auth_blacklist_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Blacklist_Sum_Fields = {
  __typename?: 'auth_blacklist_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export enum Auth_Blacklist_Update_Column {
  Id = 'id'
}

export type Auth_Blacklist_Var_Pop_Fields = {
  __typename?: 'auth_blacklist_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Blacklist_Var_Samp_Fields = {
  __typename?: 'auth_blacklist_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Blacklist_Variance_Fields = {
  __typename?: 'auth_blacklist_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Login_Input = {
  password: Scalars['String'];
  rememberMe?: Maybe<Scalars['Boolean']>;
  tokenV2?: Maybe<Scalars['String']>;
  tokenV3: Scalars['String'];
  username: Scalars['String'];
};

export type Auth_Login_Resp = {
  __typename?: 'auth_login_resp';
  csrfToken: Scalars['String'];
  id: Scalars['Int'];
};

export type Auth_Third_Party = {
  __typename?: 'auth_third_party';
  id: Scalars['smallint'];
  name: Scalars['String'];
  third_party_user_ids: Array<Auth_Third_Party_User_Id>;
  third_party_user_ids_aggregate: Auth_Third_Party_User_Id_Aggregate;
};


export type Auth_Third_PartyThird_Party_User_IdsArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_User_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_User_Id_Order_By>>;
  where?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
};


export type Auth_Third_PartyThird_Party_User_Ids_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_User_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_User_Id_Order_By>>;
  where?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
};

export type Auth_Third_Party_Aggregate = {
  __typename?: 'auth_third_party_aggregate';
  aggregate?: Maybe<Auth_Third_Party_Aggregate_Fields>;
  nodes: Array<Auth_Third_Party>;
};

export type Auth_Third_Party_Aggregate_Fields = {
  __typename?: 'auth_third_party_aggregate_fields';
  avg?: Maybe<Auth_Third_Party_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Third_Party_Max_Fields>;
  min?: Maybe<Auth_Third_Party_Min_Fields>;
  stddev?: Maybe<Auth_Third_Party_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Third_Party_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Third_Party_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Third_Party_Sum_Fields>;
  var_pop?: Maybe<Auth_Third_Party_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Third_Party_Var_Samp_Fields>;
  variance?: Maybe<Auth_Third_Party_Variance_Fields>;
};


export type Auth_Third_Party_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Third_Party_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Auth_Third_Party_Avg_Fields = {
  __typename?: 'auth_third_party_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_Bool_Exp = {
  _and?: Maybe<Array<Auth_Third_Party_Bool_Exp>>;
  _not?: Maybe<Auth_Third_Party_Bool_Exp>;
  _or?: Maybe<Array<Auth_Third_Party_Bool_Exp>>;
  id?: Maybe<Smallint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  third_party_user_ids?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
};

export enum Auth_Third_Party_Constraint {
  ThirdPartyNameKey = 'third_party_name_key',
  ThirdPartyPkey = 'third_party_pkey'
}

export type Auth_Third_Party_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
};

export type Auth_Third_Party_Insert_Input = {
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  third_party_user_ids?: Maybe<Auth_Third_Party_User_Id_Arr_Rel_Insert_Input>;
};

export type Auth_Third_Party_Max_Fields = {
  __typename?: 'auth_third_party_max_fields';
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Auth_Third_Party_Min_Fields = {
  __typename?: 'auth_third_party_min_fields';
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Auth_Third_Party_Mutation_Response = {
  __typename?: 'auth_third_party_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Auth_Third_Party>;
};

export type Auth_Third_Party_Obj_Rel_Insert_Input = {
  data: Auth_Third_Party_Insert_Input;
  on_conflict?: Maybe<Auth_Third_Party_On_Conflict>;
};

export type Auth_Third_Party_On_Conflict = {
  constraint: Auth_Third_Party_Constraint;
  update_columns?: Array<Auth_Third_Party_Update_Column>;
  where?: Maybe<Auth_Third_Party_Bool_Exp>;
};

export type Auth_Third_Party_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  third_party_user_ids_aggregate?: Maybe<Auth_Third_Party_User_Id_Aggregate_Order_By>;
};

export type Auth_Third_Party_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Auth_Third_Party_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Auth_Third_Party_Set_Input = {
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Auth_Third_Party_Stddev_Fields = {
  __typename?: 'auth_third_party_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_Stddev_Pop_Fields = {
  __typename?: 'auth_third_party_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_Stddev_Samp_Fields = {
  __typename?: 'auth_third_party_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_Sum_Fields = {
  __typename?: 'auth_third_party_sum_fields';
  id?: Maybe<Scalars['smallint']>;
};

export enum Auth_Third_Party_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Auth_Third_Party_User_Id = {
  __typename?: 'auth_third_party_user_id';
  id: Scalars['Int'];
  third_party: Auth_Third_Party;
  third_party_id: Scalars['smallint'];
  user_id: Scalars['Int'];
  value: Scalars['String'];
};

export type Auth_Third_Party_User_Id_Aggregate = {
  __typename?: 'auth_third_party_user_id_aggregate';
  aggregate?: Maybe<Auth_Third_Party_User_Id_Aggregate_Fields>;
  nodes: Array<Auth_Third_Party_User_Id>;
};

export type Auth_Third_Party_User_Id_Aggregate_Fields = {
  __typename?: 'auth_third_party_user_id_aggregate_fields';
  avg?: Maybe<Auth_Third_Party_User_Id_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Third_Party_User_Id_Max_Fields>;
  min?: Maybe<Auth_Third_Party_User_Id_Min_Fields>;
  stddev?: Maybe<Auth_Third_Party_User_Id_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Third_Party_User_Id_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Third_Party_User_Id_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Third_Party_User_Id_Sum_Fields>;
  var_pop?: Maybe<Auth_Third_Party_User_Id_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Third_Party_User_Id_Var_Samp_Fields>;
  variance?: Maybe<Auth_Third_Party_User_Id_Variance_Fields>;
};


export type Auth_Third_Party_User_Id_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Third_Party_User_Id_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Auth_Third_Party_User_Id_Aggregate_Order_By = {
  avg?: Maybe<Auth_Third_Party_User_Id_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Third_Party_User_Id_Max_Order_By>;
  min?: Maybe<Auth_Third_Party_User_Id_Min_Order_By>;
  stddev?: Maybe<Auth_Third_Party_User_Id_Stddev_Order_By>;
  stddev_pop?: Maybe<Auth_Third_Party_User_Id_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Auth_Third_Party_User_Id_Stddev_Samp_Order_By>;
  sum?: Maybe<Auth_Third_Party_User_Id_Sum_Order_By>;
  var_pop?: Maybe<Auth_Third_Party_User_Id_Var_Pop_Order_By>;
  var_samp?: Maybe<Auth_Third_Party_User_Id_Var_Samp_Order_By>;
  variance?: Maybe<Auth_Third_Party_User_Id_Variance_Order_By>;
};

export type Auth_Third_Party_User_Id_Arr_Rel_Insert_Input = {
  data: Array<Auth_Third_Party_User_Id_Insert_Input>;
  on_conflict?: Maybe<Auth_Third_Party_User_Id_On_Conflict>;
};

export type Auth_Third_Party_User_Id_Avg_Fields = {
  __typename?: 'auth_third_party_user_id_avg_fields';
  id?: Maybe<Scalars['Float']>;
  third_party_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_User_Id_Avg_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Bool_Exp = {
  _and?: Maybe<Array<Auth_Third_Party_User_Id_Bool_Exp>>;
  _not?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
  _or?: Maybe<Array<Auth_Third_Party_User_Id_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  third_party?: Maybe<Auth_Third_Party_Bool_Exp>;
  third_party_id?: Maybe<Smallint_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Auth_Third_Party_User_Id_Constraint {
  ThirdPartyUserIdPkey = 'third_party_user_id_pkey',
  ThirdPartyUserIdThirdPartyIdValueKey = 'third_party_user_id_third_party_id_value_key'
}

export type Auth_Third_Party_User_Id_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  third_party_id?: Maybe<Scalars['smallint']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Auth_Third_Party_User_Id_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  third_party?: Maybe<Auth_Third_Party_Obj_Rel_Insert_Input>;
  third_party_id?: Maybe<Scalars['smallint']>;
  user_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type Auth_Third_Party_User_Id_Max_Fields = {
  __typename?: 'auth_third_party_user_id_max_fields';
  id?: Maybe<Scalars['Int']>;
  third_party_id?: Maybe<Scalars['smallint']>;
  user_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type Auth_Third_Party_User_Id_Max_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Min_Fields = {
  __typename?: 'auth_third_party_user_id_min_fields';
  id?: Maybe<Scalars['Int']>;
  third_party_id?: Maybe<Scalars['smallint']>;
  user_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type Auth_Third_Party_User_Id_Min_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Mutation_Response = {
  __typename?: 'auth_third_party_user_id_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Auth_Third_Party_User_Id>;
};

export type Auth_Third_Party_User_Id_On_Conflict = {
  constraint: Auth_Third_Party_User_Id_Constraint;
  update_columns?: Array<Auth_Third_Party_User_Id_Update_Column>;
  where?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
};

export type Auth_Third_Party_User_Id_Order_By = {
  id?: Maybe<Order_By>;
  third_party?: Maybe<Auth_Third_Party_Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Auth_Third_Party_User_Id_Select_Column {
  Id = 'id',
  ThirdPartyId = 'third_party_id',
  UserId = 'user_id',
  Value = 'value'
}

export type Auth_Third_Party_User_Id_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  third_party_id?: Maybe<Scalars['smallint']>;
  user_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type Auth_Third_Party_User_Id_Stddev_Fields = {
  __typename?: 'auth_third_party_user_id_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  third_party_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_User_Id_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Stddev_Pop_Fields = {
  __typename?: 'auth_third_party_user_id_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  third_party_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_User_Id_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Stddev_Samp_Fields = {
  __typename?: 'auth_third_party_user_id_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  third_party_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_User_Id_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Sum_Fields = {
  __typename?: 'auth_third_party_user_id_sum_fields';
  id?: Maybe<Scalars['Int']>;
  third_party_id?: Maybe<Scalars['smallint']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Auth_Third_Party_User_Id_Sum_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Auth_Third_Party_User_Id_Update_Column {
  Id = 'id',
  ThirdPartyId = 'third_party_id',
  UserId = 'user_id',
  Value = 'value'
}

export type Auth_Third_Party_User_Id_Var_Pop_Fields = {
  __typename?: 'auth_third_party_user_id_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  third_party_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_User_Id_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Var_Samp_Fields = {
  __typename?: 'auth_third_party_user_id_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  third_party_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_User_Id_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Third_Party_User_Id_Variance_Fields = {
  __typename?: 'auth_third_party_user_id_variance_fields';
  id?: Maybe<Scalars['Float']>;
  third_party_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_User_Id_Variance_Order_By = {
  id?: Maybe<Order_By>;
  third_party_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Third_Party_Var_Pop_Fields = {
  __typename?: 'auth_third_party_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_Var_Samp_Fields = {
  __typename?: 'auth_third_party_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Third_Party_Variance_Fields = {
  __typename?: 'auth_third_party_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Auth_Token = {
  __typename?: 'auth_token';
  value: Scalars['String'];
};


export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

export type Change_Password_Input = {
  new: Scalars['String'];
  old: Scalars['String'];
};

export type Change_Reset_Password_Input = {
  medium: Reset_Password_Medium_Enum;
  tokenV2?: Maybe<Scalars['String']>;
  tokenV3: Scalars['String'];
  username: Scalars['String'];
};

export type Chat_Message = {
  __typename?: 'chat_message';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  message_files: Array<Chat_Message_File>;
  message_files_aggregate: Chat_Message_File_Aggregate;
  receiver_id: Scalars['Int'];
  sender_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};


export type Chat_MessageMessage_FilesArgs = {
  distinct_on?: Maybe<Array<Chat_Message_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_File_Order_By>>;
  where?: Maybe<Chat_Message_File_Bool_Exp>;
};


export type Chat_MessageMessage_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_File_Order_By>>;
  where?: Maybe<Chat_Message_File_Bool_Exp>;
};

export type Chat_Message_Aggregate = {
  __typename?: 'chat_message_aggregate';
  aggregate?: Maybe<Chat_Message_Aggregate_Fields>;
  nodes: Array<Chat_Message>;
};

export type Chat_Message_Aggregate_Fields = {
  __typename?: 'chat_message_aggregate_fields';
  avg?: Maybe<Chat_Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chat_Message_Max_Fields>;
  min?: Maybe<Chat_Message_Min_Fields>;
  stddev?: Maybe<Chat_Message_Stddev_Fields>;
  stddev_pop?: Maybe<Chat_Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chat_Message_Stddev_Samp_Fields>;
  sum?: Maybe<Chat_Message_Sum_Fields>;
  var_pop?: Maybe<Chat_Message_Var_Pop_Fields>;
  var_samp?: Maybe<Chat_Message_Var_Samp_Fields>;
  variance?: Maybe<Chat_Message_Variance_Fields>;
};


export type Chat_Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Chat_Message_Avg_Fields = {
  __typename?: 'chat_message_avg_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_Bool_Exp = {
  _and?: Maybe<Array<Chat_Message_Bool_Exp>>;
  _not?: Maybe<Chat_Message_Bool_Exp>;
  _or?: Maybe<Array<Chat_Message_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  message_files?: Maybe<Chat_Message_File_Bool_Exp>;
  receiver_id?: Maybe<Int_Comparison_Exp>;
  sender_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Chat_Message_Constraint {
  MessagePkey = 'message_pkey'
}

export type Chat_Message_File = {
  __typename?: 'chat_message_file';
  id: Scalars['Int'];
  message: Chat_Message;
  message_id: Scalars['Int'];
  path: Scalars['String'];
};

export type Chat_Message_File_Aggregate = {
  __typename?: 'chat_message_file_aggregate';
  aggregate?: Maybe<Chat_Message_File_Aggregate_Fields>;
  nodes: Array<Chat_Message_File>;
};

export type Chat_Message_File_Aggregate_Fields = {
  __typename?: 'chat_message_file_aggregate_fields';
  avg?: Maybe<Chat_Message_File_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chat_Message_File_Max_Fields>;
  min?: Maybe<Chat_Message_File_Min_Fields>;
  stddev?: Maybe<Chat_Message_File_Stddev_Fields>;
  stddev_pop?: Maybe<Chat_Message_File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chat_Message_File_Stddev_Samp_Fields>;
  sum?: Maybe<Chat_Message_File_Sum_Fields>;
  var_pop?: Maybe<Chat_Message_File_Var_Pop_Fields>;
  var_samp?: Maybe<Chat_Message_File_Var_Samp_Fields>;
  variance?: Maybe<Chat_Message_File_Variance_Fields>;
};


export type Chat_Message_File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Message_File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Chat_Message_File_Aggregate_Order_By = {
  avg?: Maybe<Chat_Message_File_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Message_File_Max_Order_By>;
  min?: Maybe<Chat_Message_File_Min_Order_By>;
  stddev?: Maybe<Chat_Message_File_Stddev_Order_By>;
  stddev_pop?: Maybe<Chat_Message_File_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chat_Message_File_Stddev_Samp_Order_By>;
  sum?: Maybe<Chat_Message_File_Sum_Order_By>;
  var_pop?: Maybe<Chat_Message_File_Var_Pop_Order_By>;
  var_samp?: Maybe<Chat_Message_File_Var_Samp_Order_By>;
  variance?: Maybe<Chat_Message_File_Variance_Order_By>;
};

export type Chat_Message_File_Arr_Rel_Insert_Input = {
  data: Array<Chat_Message_File_Insert_Input>;
  on_conflict?: Maybe<Chat_Message_File_On_Conflict>;
};

export type Chat_Message_File_Avg_Fields = {
  __typename?: 'chat_message_file_avg_fields';
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_File_Avg_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

export type Chat_Message_File_Bool_Exp = {
  _and?: Maybe<Array<Chat_Message_File_Bool_Exp>>;
  _not?: Maybe<Chat_Message_File_Bool_Exp>;
  _or?: Maybe<Array<Chat_Message_File_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  message?: Maybe<Chat_Message_Bool_Exp>;
  message_id?: Maybe<Int_Comparison_Exp>;
  path?: Maybe<String_Comparison_Exp>;
};

export enum Chat_Message_File_Constraint {
  MessageFilePkey = 'message_file_pkey'
}

export type Chat_Message_File_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
};

export type Chat_Message_File_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Chat_Message_Obj_Rel_Insert_Input>;
  message_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

export type Chat_Message_File_Max_Fields = {
  __typename?: 'chat_message_file_max_fields';
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

export type Chat_Message_File_Max_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
};

export type Chat_Message_File_Min_Fields = {
  __typename?: 'chat_message_file_min_fields';
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

export type Chat_Message_File_Min_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
};

export type Chat_Message_File_Mutation_Response = {
  __typename?: 'chat_message_file_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Chat_Message_File>;
};

export type Chat_Message_File_On_Conflict = {
  constraint: Chat_Message_File_Constraint;
  update_columns?: Array<Chat_Message_File_Update_Column>;
  where?: Maybe<Chat_Message_File_Bool_Exp>;
};

export type Chat_Message_File_Order_By = {
  id?: Maybe<Order_By>;
  message?: Maybe<Chat_Message_Order_By>;
  message_id?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
};

export type Chat_Message_File_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Chat_Message_File_Select_Column {
  Id = 'id',
  MessageId = 'message_id',
  Path = 'path'
}

export type Chat_Message_File_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

export type Chat_Message_File_Stddev_Fields = {
  __typename?: 'chat_message_file_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_File_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

export type Chat_Message_File_Stddev_Pop_Fields = {
  __typename?: 'chat_message_file_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_File_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

export type Chat_Message_File_Stddev_Samp_Fields = {
  __typename?: 'chat_message_file_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_File_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

export type Chat_Message_File_Sum_Fields = {
  __typename?: 'chat_message_file_sum_fields';
  id?: Maybe<Scalars['Int']>;
  message_id?: Maybe<Scalars['Int']>;
};

export type Chat_Message_File_Sum_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

export enum Chat_Message_File_Update_Column {
  Id = 'id',
  MessageId = 'message_id',
  Path = 'path'
}

export type Chat_Message_File_Var_Pop_Fields = {
  __typename?: 'chat_message_file_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_File_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

export type Chat_Message_File_Var_Samp_Fields = {
  __typename?: 'chat_message_file_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_File_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

export type Chat_Message_File_Variance_Fields = {
  __typename?: 'chat_message_file_variance_fields';
  id?: Maybe<Scalars['Float']>;
  message_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_File_Variance_Order_By = {
  id?: Maybe<Order_By>;
  message_id?: Maybe<Order_By>;
};

export type Chat_Message_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
};

export type Chat_Message_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_files?: Maybe<Chat_Message_File_Arr_Rel_Insert_Input>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

export type Chat_Message_Max_Fields = {
  __typename?: 'chat_message_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

export type Chat_Message_Min_Fields = {
  __typename?: 'chat_message_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

export type Chat_Message_Mutation_Response = {
  __typename?: 'chat_message_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Chat_Message>;
};

export type Chat_Message_Obj_Rel_Insert_Input = {
  data: Chat_Message_Insert_Input;
  on_conflict?: Maybe<Chat_Message_On_Conflict>;
};

export type Chat_Message_On_Conflict = {
  constraint: Chat_Message_Constraint;
  update_columns?: Array<Chat_Message_Update_Column>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};

export type Chat_Message_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_files_aggregate?: Maybe<Chat_Message_File_Aggregate_Order_By>;
  receiver_id?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Chat_Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Chat_Message_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  ReceiverId = 'receiver_id',
  SenderId = 'sender_id',
  UpdatedAt = 'updated_at',
  Value = 'value'
}

export type Chat_Message_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

export type Chat_Message_Stddev_Fields = {
  __typename?: 'chat_message_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_Stddev_Pop_Fields = {
  __typename?: 'chat_message_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_Stddev_Samp_Fields = {
  __typename?: 'chat_message_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_Sum_Fields = {
  __typename?: 'chat_message_sum_fields';
  id?: Maybe<Scalars['Int']>;
  receiver_id?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['Int']>;
};

export enum Chat_Message_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  ReceiverId = 'receiver_id',
  SenderId = 'sender_id',
  UpdatedAt = 'updated_at',
  Value = 'value'
}

export type Chat_Message_Var_Pop_Fields = {
  __typename?: 'chat_message_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_Var_Samp_Fields = {
  __typename?: 'chat_message_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};

export type Chat_Message_Variance_Fields = {
  __typename?: 'chat_message_variance_fields';
  id?: Maybe<Scalars['Float']>;
  receiver_id?: Maybe<Scalars['Float']>;
  sender_id?: Maybe<Scalars['Float']>;
};


export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

export type Geo_Country = {
  __typename?: 'geo_country';
  i18n: Array<Geo_Country_I18n>;
  i18n_aggregate: Geo_Country_I18n_Aggregate;
  id: Scalars['smallint'];
  states: Array<Geo_State>;
  states_aggregate: Geo_State_Aggregate;
};


export type Geo_CountryI18nArgs = {
  distinct_on?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_I18n_Order_By>>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};


export type Geo_CountryI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_I18n_Order_By>>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};


export type Geo_CountryStatesArgs = {
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Geo_CountryStates_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};

export type Geo_Country_Aggregate = {
  __typename?: 'geo_country_aggregate';
  aggregate?: Maybe<Geo_Country_Aggregate_Fields>;
  nodes: Array<Geo_Country>;
};

export type Geo_Country_Aggregate_Fields = {
  __typename?: 'geo_country_aggregate_fields';
  avg?: Maybe<Geo_Country_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_Country_Max_Fields>;
  min?: Maybe<Geo_Country_Min_Fields>;
  stddev?: Maybe<Geo_Country_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_Country_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_Country_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_Country_Sum_Fields>;
  var_pop?: Maybe<Geo_Country_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_Country_Var_Samp_Fields>;
  variance?: Maybe<Geo_Country_Variance_Fields>;
};


export type Geo_Country_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_Country_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_Country_Avg_Fields = {
  __typename?: 'geo_country_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Country_Bool_Exp = {
  _and?: Maybe<Array<Geo_Country_Bool_Exp>>;
  _not?: Maybe<Geo_Country_Bool_Exp>;
  _or?: Maybe<Array<Geo_Country_Bool_Exp>>;
  i18n?: Maybe<Geo_Country_I18n_Bool_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  states?: Maybe<Geo_State_Bool_Exp>;
};

export enum Geo_Country_Constraint {
  CountryPkey = 'country_pkey'
}

export type Geo_Country_I18n = {
  __typename?: 'geo_country_i18n';
  country: Geo_Country;
  country_id: Scalars['Int'];
  id: Scalars['smallint'];
  lang: Scalars['smallint'];
  language: Misc_Language;
  name: Scalars['String'];
};

export type Geo_Country_I18n_Aggregate = {
  __typename?: 'geo_country_i18n_aggregate';
  aggregate?: Maybe<Geo_Country_I18n_Aggregate_Fields>;
  nodes: Array<Geo_Country_I18n>;
};

export type Geo_Country_I18n_Aggregate_Fields = {
  __typename?: 'geo_country_i18n_aggregate_fields';
  avg?: Maybe<Geo_Country_I18n_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_Country_I18n_Max_Fields>;
  min?: Maybe<Geo_Country_I18n_Min_Fields>;
  stddev?: Maybe<Geo_Country_I18n_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_Country_I18n_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_Country_I18n_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_Country_I18n_Sum_Fields>;
  var_pop?: Maybe<Geo_Country_I18n_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_Country_I18n_Var_Samp_Fields>;
  variance?: Maybe<Geo_Country_I18n_Variance_Fields>;
};


export type Geo_Country_I18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_Country_I18n_Aggregate_Order_By = {
  avg?: Maybe<Geo_Country_I18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_Country_I18n_Max_Order_By>;
  min?: Maybe<Geo_Country_I18n_Min_Order_By>;
  stddev?: Maybe<Geo_Country_I18n_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_Country_I18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_Country_I18n_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_Country_I18n_Sum_Order_By>;
  var_pop?: Maybe<Geo_Country_I18n_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_Country_I18n_Var_Samp_Order_By>;
  variance?: Maybe<Geo_Country_I18n_Variance_Order_By>;
};

export type Geo_Country_I18n_Arr_Rel_Insert_Input = {
  data: Array<Geo_Country_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_Country_I18n_On_Conflict>;
};

export type Geo_Country_I18n_Avg_Fields = {
  __typename?: 'geo_country_i18n_avg_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Country_I18n_Avg_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Bool_Exp = {
  _and?: Maybe<Array<Geo_Country_I18n_Bool_Exp>>;
  _not?: Maybe<Geo_Country_I18n_Bool_Exp>;
  _or?: Maybe<Array<Geo_Country_I18n_Bool_Exp>>;
  country?: Maybe<Geo_Country_Bool_Exp>;
  country_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  lang?: Maybe<Smallint_Comparison_Exp>;
  language?: Maybe<Misc_Language_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Geo_Country_I18n_Constraint {
  CountryI18nCountryIdLangKey = 'country_i18n_country_id_lang_key',
  CountryI18nPkey = 'country_i18n_pkey'
}

export type Geo_Country_I18n_Inc_Input = {
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Geo_Country_I18n_Insert_Input = {
  country?: Maybe<Geo_Country_Obj_Rel_Insert_Input>;
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  language?: Maybe<Misc_Language_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_Country_I18n_Max_Fields = {
  __typename?: 'geo_country_i18n_max_fields';
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_Country_I18n_Max_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Min_Fields = {
  __typename?: 'geo_country_i18n_min_fields';
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_Country_I18n_Min_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Mutation_Response = {
  __typename?: 'geo_country_i18n_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_Country_I18n>;
};

export type Geo_Country_I18n_On_Conflict = {
  constraint: Geo_Country_I18n_Constraint;
  update_columns?: Array<Geo_Country_I18n_Update_Column>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};

export type Geo_Country_I18n_Order_By = {
  country?: Maybe<Geo_Country_Order_By>;
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  language?: Maybe<Misc_Language_Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_Country_I18n_Select_Column {
  CountryId = 'country_id',
  Id = 'id',
  Lang = 'lang',
  Name = 'name'
}

export type Geo_Country_I18n_Set_Input = {
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_Country_I18n_Stddev_Fields = {
  __typename?: 'geo_country_i18n_stddev_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Country_I18n_Stddev_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Stddev_Pop_Fields = {
  __typename?: 'geo_country_i18n_stddev_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Country_I18n_Stddev_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Stddev_Samp_Fields = {
  __typename?: 'geo_country_i18n_stddev_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Country_I18n_Stddev_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Sum_Fields = {
  __typename?: 'geo_country_i18n_sum_fields';
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Geo_Country_I18n_Sum_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export enum Geo_Country_I18n_Update_Column {
  CountryId = 'country_id',
  Id = 'id',
  Lang = 'lang',
  Name = 'name'
}

export type Geo_Country_I18n_Var_Pop_Fields = {
  __typename?: 'geo_country_i18n_var_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Country_I18n_Var_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Var_Samp_Fields = {
  __typename?: 'geo_country_i18n_var_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Country_I18n_Var_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Country_I18n_Variance_Fields = {
  __typename?: 'geo_country_i18n_variance_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Country_I18n_Variance_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Country_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Country_Insert_Input = {
  i18n?: Maybe<Geo_Country_I18n_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['smallint']>;
  states?: Maybe<Geo_State_Arr_Rel_Insert_Input>;
};

export type Geo_Country_Max_Fields = {
  __typename?: 'geo_country_max_fields';
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Country_Min_Fields = {
  __typename?: 'geo_country_min_fields';
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Country_Mutation_Response = {
  __typename?: 'geo_country_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_Country>;
};

export type Geo_Country_Obj_Rel_Insert_Input = {
  data: Geo_Country_Insert_Input;
  on_conflict?: Maybe<Geo_Country_On_Conflict>;
};

export type Geo_Country_On_Conflict = {
  constraint: Geo_Country_Constraint;
  update_columns?: Array<Geo_Country_Update_Column>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};

export type Geo_Country_Order_By = {
  i18n_aggregate?: Maybe<Geo_Country_I18n_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  states_aggregate?: Maybe<Geo_State_Aggregate_Order_By>;
};

export type Geo_Country_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_Country_Select_Column {
  Id = 'id'
}

export type Geo_Country_Set_Input = {
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Country_Stddev_Fields = {
  __typename?: 'geo_country_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Country_Stddev_Pop_Fields = {
  __typename?: 'geo_country_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Country_Stddev_Samp_Fields = {
  __typename?: 'geo_country_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Country_Sum_Fields = {
  __typename?: 'geo_country_sum_fields';
  id?: Maybe<Scalars['smallint']>;
};

export enum Geo_Country_Update_Column {
  Id = 'id'
}

export type Geo_Country_Var_Pop_Fields = {
  __typename?: 'geo_country_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Country_Var_Samp_Fields = {
  __typename?: 'geo_country_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Country_Variance_Fields = {
  __typename?: 'geo_country_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Geo_District = {
  __typename?: 'geo_district';
  division: Geo_Division;
  division_id: Scalars['smallint'];
  i18n: Array<Geo_District_I18n>;
  i18n_aggregate: Geo_District_I18n_Aggregate;
  id: Scalars['smallint'];
  sub_districts: Array<Geo_Sub_District>;
  sub_districts_aggregate: Geo_Sub_District_Aggregate;
};


export type Geo_DistrictI18nArgs = {
  distinct_on?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_I18n_Order_By>>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};


export type Geo_DistrictI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_I18n_Order_By>>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};


export type Geo_DistrictSub_DistrictsArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Geo_DistrictSub_Districts_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};

export type Geo_District_Aggregate = {
  __typename?: 'geo_district_aggregate';
  aggregate?: Maybe<Geo_District_Aggregate_Fields>;
  nodes: Array<Geo_District>;
};

export type Geo_District_Aggregate_Fields = {
  __typename?: 'geo_district_aggregate_fields';
  avg?: Maybe<Geo_District_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_District_Max_Fields>;
  min?: Maybe<Geo_District_Min_Fields>;
  stddev?: Maybe<Geo_District_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_District_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_District_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_District_Sum_Fields>;
  var_pop?: Maybe<Geo_District_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_District_Var_Samp_Fields>;
  variance?: Maybe<Geo_District_Variance_Fields>;
};


export type Geo_District_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_District_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_District_Aggregate_Order_By = {
  avg?: Maybe<Geo_District_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_District_Max_Order_By>;
  min?: Maybe<Geo_District_Min_Order_By>;
  stddev?: Maybe<Geo_District_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_District_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_District_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_District_Sum_Order_By>;
  var_pop?: Maybe<Geo_District_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_District_Var_Samp_Order_By>;
  variance?: Maybe<Geo_District_Variance_Order_By>;
};

export type Geo_District_Arr_Rel_Insert_Input = {
  data: Array<Geo_District_Insert_Input>;
  on_conflict?: Maybe<Geo_District_On_Conflict>;
};

export type Geo_District_Avg_Fields = {
  __typename?: 'geo_district_avg_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_District_Avg_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_District_Bool_Exp = {
  _and?: Maybe<Array<Geo_District_Bool_Exp>>;
  _not?: Maybe<Geo_District_Bool_Exp>;
  _or?: Maybe<Array<Geo_District_Bool_Exp>>;
  division?: Maybe<Geo_Division_Bool_Exp>;
  division_id?: Maybe<Smallint_Comparison_Exp>;
  i18n?: Maybe<Geo_District_I18n_Bool_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  sub_districts?: Maybe<Geo_Sub_District_Bool_Exp>;
};

export enum Geo_District_Constraint {
  DistrictPkey = 'district_pkey'
}

export type Geo_District_I18n = {
  __typename?: 'geo_district_i18n';
  district: Geo_District;
  district_id: Scalars['Int'];
  id: Scalars['smallint'];
  lang: Scalars['smallint'];
  language: Misc_Language;
  name: Scalars['String'];
};

export type Geo_District_I18n_Aggregate = {
  __typename?: 'geo_district_i18n_aggregate';
  aggregate?: Maybe<Geo_District_I18n_Aggregate_Fields>;
  nodes: Array<Geo_District_I18n>;
};

export type Geo_District_I18n_Aggregate_Fields = {
  __typename?: 'geo_district_i18n_aggregate_fields';
  avg?: Maybe<Geo_District_I18n_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_District_I18n_Max_Fields>;
  min?: Maybe<Geo_District_I18n_Min_Fields>;
  stddev?: Maybe<Geo_District_I18n_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_District_I18n_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_District_I18n_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_District_I18n_Sum_Fields>;
  var_pop?: Maybe<Geo_District_I18n_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_District_I18n_Var_Samp_Fields>;
  variance?: Maybe<Geo_District_I18n_Variance_Fields>;
};


export type Geo_District_I18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_District_I18n_Aggregate_Order_By = {
  avg?: Maybe<Geo_District_I18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_District_I18n_Max_Order_By>;
  min?: Maybe<Geo_District_I18n_Min_Order_By>;
  stddev?: Maybe<Geo_District_I18n_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_District_I18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_District_I18n_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_District_I18n_Sum_Order_By>;
  var_pop?: Maybe<Geo_District_I18n_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_District_I18n_Var_Samp_Order_By>;
  variance?: Maybe<Geo_District_I18n_Variance_Order_By>;
};

export type Geo_District_I18n_Arr_Rel_Insert_Input = {
  data: Array<Geo_District_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_District_I18n_On_Conflict>;
};

export type Geo_District_I18n_Avg_Fields = {
  __typename?: 'geo_district_i18n_avg_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_District_I18n_Avg_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_District_I18n_Bool_Exp = {
  _and?: Maybe<Array<Geo_District_I18n_Bool_Exp>>;
  _not?: Maybe<Geo_District_I18n_Bool_Exp>;
  _or?: Maybe<Array<Geo_District_I18n_Bool_Exp>>;
  district?: Maybe<Geo_District_Bool_Exp>;
  district_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  lang?: Maybe<Smallint_Comparison_Exp>;
  language?: Maybe<Misc_Language_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Geo_District_I18n_Constraint {
  DistrictI18nDistrictIdLangKey = 'district_i18n_district_id_lang_key',
  DistrictI18nPkey = 'district_i18n_pkey'
}

export type Geo_District_I18n_Inc_Input = {
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Geo_District_I18n_Insert_Input = {
  district?: Maybe<Geo_District_Obj_Rel_Insert_Input>;
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  language?: Maybe<Misc_Language_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_District_I18n_Max_Fields = {
  __typename?: 'geo_district_i18n_max_fields';
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_District_I18n_Max_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_District_I18n_Min_Fields = {
  __typename?: 'geo_district_i18n_min_fields';
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_District_I18n_Min_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_District_I18n_Mutation_Response = {
  __typename?: 'geo_district_i18n_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_District_I18n>;
};

export type Geo_District_I18n_On_Conflict = {
  constraint: Geo_District_I18n_Constraint;
  update_columns?: Array<Geo_District_I18n_Update_Column>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};

export type Geo_District_I18n_Order_By = {
  district?: Maybe<Geo_District_Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  language?: Maybe<Misc_Language_Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_District_I18n_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_District_I18n_Select_Column {
  DistrictId = 'district_id',
  Id = 'id',
  Lang = 'lang',
  Name = 'name'
}

export type Geo_District_I18n_Set_Input = {
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_District_I18n_Stddev_Fields = {
  __typename?: 'geo_district_i18n_stddev_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_District_I18n_Stddev_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_District_I18n_Stddev_Pop_Fields = {
  __typename?: 'geo_district_i18n_stddev_pop_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_District_I18n_Stddev_Pop_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_District_I18n_Stddev_Samp_Fields = {
  __typename?: 'geo_district_i18n_stddev_samp_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_District_I18n_Stddev_Samp_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_District_I18n_Sum_Fields = {
  __typename?: 'geo_district_i18n_sum_fields';
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Geo_District_I18n_Sum_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export enum Geo_District_I18n_Update_Column {
  DistrictId = 'district_id',
  Id = 'id',
  Lang = 'lang',
  Name = 'name'
}

export type Geo_District_I18n_Var_Pop_Fields = {
  __typename?: 'geo_district_i18n_var_pop_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_District_I18n_Var_Pop_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_District_I18n_Var_Samp_Fields = {
  __typename?: 'geo_district_i18n_var_samp_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_District_I18n_Var_Samp_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_District_I18n_Variance_Fields = {
  __typename?: 'geo_district_i18n_variance_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_District_I18n_Variance_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_District_Inc_Input = {
  division_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_District_Insert_Input = {
  division?: Maybe<Geo_Division_Obj_Rel_Insert_Input>;
  division_id?: Maybe<Scalars['smallint']>;
  i18n?: Maybe<Geo_District_I18n_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['smallint']>;
  sub_districts?: Maybe<Geo_Sub_District_Arr_Rel_Insert_Input>;
};

export type Geo_District_Max_Fields = {
  __typename?: 'geo_district_max_fields';
  division_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_District_Max_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_District_Min_Fields = {
  __typename?: 'geo_district_min_fields';
  division_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_District_Min_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_District_Mutation_Response = {
  __typename?: 'geo_district_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_District>;
};

export type Geo_District_Obj_Rel_Insert_Input = {
  data: Geo_District_Insert_Input;
  on_conflict?: Maybe<Geo_District_On_Conflict>;
};

export type Geo_District_On_Conflict = {
  constraint: Geo_District_Constraint;
  update_columns?: Array<Geo_District_Update_Column>;
  where?: Maybe<Geo_District_Bool_Exp>;
};

export type Geo_District_Order_By = {
  division?: Maybe<Geo_Division_Order_By>;
  division_id?: Maybe<Order_By>;
  i18n_aggregate?: Maybe<Geo_District_I18n_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  sub_districts_aggregate?: Maybe<Geo_Sub_District_Aggregate_Order_By>;
};

export type Geo_District_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_District_Select_Column {
  DivisionId = 'division_id',
  Id = 'id'
}

export type Geo_District_Set_Input = {
  division_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_District_Stddev_Fields = {
  __typename?: 'geo_district_stddev_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_District_Stddev_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_District_Stddev_Pop_Fields = {
  __typename?: 'geo_district_stddev_pop_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_District_Stddev_Pop_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_District_Stddev_Samp_Fields = {
  __typename?: 'geo_district_stddev_samp_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_District_Stddev_Samp_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_District_Sum_Fields = {
  __typename?: 'geo_district_sum_fields';
  division_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_District_Sum_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Geo_District_Update_Column {
  DivisionId = 'division_id',
  Id = 'id'
}

export type Geo_District_Var_Pop_Fields = {
  __typename?: 'geo_district_var_pop_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_District_Var_Pop_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_District_Var_Samp_Fields = {
  __typename?: 'geo_district_var_samp_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_District_Var_Samp_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_District_Variance_Fields = {
  __typename?: 'geo_district_variance_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_District_Variance_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Division = {
  __typename?: 'geo_division';
  districts: Array<Geo_District>;
  districts_aggregate: Geo_District_Aggregate;
  i18n: Array<Geo_Division_I18n>;
  i18n_aggregate: Geo_Division_I18n_Aggregate;
  id: Scalars['smallint'];
  state: Geo_State;
  state_id: Scalars['smallint'];
};


export type Geo_DivisionDistrictsArgs = {
  distinct_on?: Maybe<Array<Geo_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_Order_By>>;
  where?: Maybe<Geo_District_Bool_Exp>;
};


export type Geo_DivisionDistricts_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_Order_By>>;
  where?: Maybe<Geo_District_Bool_Exp>;
};


export type Geo_DivisionI18nArgs = {
  distinct_on?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_I18n_Order_By>>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};


export type Geo_DivisionI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_I18n_Order_By>>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};

export type Geo_Division_Aggregate = {
  __typename?: 'geo_division_aggregate';
  aggregate?: Maybe<Geo_Division_Aggregate_Fields>;
  nodes: Array<Geo_Division>;
};

export type Geo_Division_Aggregate_Fields = {
  __typename?: 'geo_division_aggregate_fields';
  avg?: Maybe<Geo_Division_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_Division_Max_Fields>;
  min?: Maybe<Geo_Division_Min_Fields>;
  stddev?: Maybe<Geo_Division_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_Division_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_Division_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_Division_Sum_Fields>;
  var_pop?: Maybe<Geo_Division_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_Division_Var_Samp_Fields>;
  variance?: Maybe<Geo_Division_Variance_Fields>;
};


export type Geo_Division_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_Division_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_Division_Aggregate_Order_By = {
  avg?: Maybe<Geo_Division_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_Division_Max_Order_By>;
  min?: Maybe<Geo_Division_Min_Order_By>;
  stddev?: Maybe<Geo_Division_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_Division_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_Division_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_Division_Sum_Order_By>;
  var_pop?: Maybe<Geo_Division_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_Division_Var_Samp_Order_By>;
  variance?: Maybe<Geo_Division_Variance_Order_By>;
};

export type Geo_Division_Arr_Rel_Insert_Input = {
  data: Array<Geo_Division_Insert_Input>;
  on_conflict?: Maybe<Geo_Division_On_Conflict>;
};

export type Geo_Division_Avg_Fields = {
  __typename?: 'geo_division_avg_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_Division_Avg_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Bool_Exp = {
  _and?: Maybe<Array<Geo_Division_Bool_Exp>>;
  _not?: Maybe<Geo_Division_Bool_Exp>;
  _or?: Maybe<Array<Geo_Division_Bool_Exp>>;
  districts?: Maybe<Geo_District_Bool_Exp>;
  i18n?: Maybe<Geo_Division_I18n_Bool_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  state?: Maybe<Geo_State_Bool_Exp>;
  state_id?: Maybe<Smallint_Comparison_Exp>;
};

export enum Geo_Division_Constraint {
  DivisionPkey = 'division_pkey'
}

export type Geo_Division_I18n = {
  __typename?: 'geo_division_i18n';
  division: Geo_Division;
  division_id: Scalars['Int'];
  id: Scalars['smallint'];
  lang: Scalars['smallint'];
  language: Misc_Language;
  name: Scalars['String'];
};

export type Geo_Division_I18n_Aggregate = {
  __typename?: 'geo_division_i18n_aggregate';
  aggregate?: Maybe<Geo_Division_I18n_Aggregate_Fields>;
  nodes: Array<Geo_Division_I18n>;
};

export type Geo_Division_I18n_Aggregate_Fields = {
  __typename?: 'geo_division_i18n_aggregate_fields';
  avg?: Maybe<Geo_Division_I18n_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_Division_I18n_Max_Fields>;
  min?: Maybe<Geo_Division_I18n_Min_Fields>;
  stddev?: Maybe<Geo_Division_I18n_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_Division_I18n_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_Division_I18n_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_Division_I18n_Sum_Fields>;
  var_pop?: Maybe<Geo_Division_I18n_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_Division_I18n_Var_Samp_Fields>;
  variance?: Maybe<Geo_Division_I18n_Variance_Fields>;
};


export type Geo_Division_I18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_Division_I18n_Aggregate_Order_By = {
  avg?: Maybe<Geo_Division_I18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_Division_I18n_Max_Order_By>;
  min?: Maybe<Geo_Division_I18n_Min_Order_By>;
  stddev?: Maybe<Geo_Division_I18n_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_Division_I18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_Division_I18n_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_Division_I18n_Sum_Order_By>;
  var_pop?: Maybe<Geo_Division_I18n_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_Division_I18n_Var_Samp_Order_By>;
  variance?: Maybe<Geo_Division_I18n_Variance_Order_By>;
};

export type Geo_Division_I18n_Arr_Rel_Insert_Input = {
  data: Array<Geo_Division_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_Division_I18n_On_Conflict>;
};

export type Geo_Division_I18n_Avg_Fields = {
  __typename?: 'geo_division_i18n_avg_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Division_I18n_Avg_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Bool_Exp = {
  _and?: Maybe<Array<Geo_Division_I18n_Bool_Exp>>;
  _not?: Maybe<Geo_Division_I18n_Bool_Exp>;
  _or?: Maybe<Array<Geo_Division_I18n_Bool_Exp>>;
  division?: Maybe<Geo_Division_Bool_Exp>;
  division_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  lang?: Maybe<Smallint_Comparison_Exp>;
  language?: Maybe<Misc_Language_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Geo_Division_I18n_Constraint {
  DivisionI18nDivisionIdLangKey = 'division_i18n_division_id_lang_key',
  DivisionI18nPkey = 'division_i18n_pkey'
}

export type Geo_Division_I18n_Inc_Input = {
  division_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Geo_Division_I18n_Insert_Input = {
  division?: Maybe<Geo_Division_Obj_Rel_Insert_Input>;
  division_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  language?: Maybe<Misc_Language_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_Division_I18n_Max_Fields = {
  __typename?: 'geo_division_i18n_max_fields';
  division_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_Division_I18n_Max_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Min_Fields = {
  __typename?: 'geo_division_i18n_min_fields';
  division_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_Division_I18n_Min_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Mutation_Response = {
  __typename?: 'geo_division_i18n_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_Division_I18n>;
};

export type Geo_Division_I18n_On_Conflict = {
  constraint: Geo_Division_I18n_Constraint;
  update_columns?: Array<Geo_Division_I18n_Update_Column>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};

export type Geo_Division_I18n_Order_By = {
  division?: Maybe<Geo_Division_Order_By>;
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  language?: Maybe<Misc_Language_Order_By>;
  name?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_Division_I18n_Select_Column {
  DivisionId = 'division_id',
  Id = 'id',
  Lang = 'lang',
  Name = 'name'
}

export type Geo_Division_I18n_Set_Input = {
  division_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo_Division_I18n_Stddev_Fields = {
  __typename?: 'geo_division_i18n_stddev_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Division_I18n_Stddev_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Stddev_Pop_Fields = {
  __typename?: 'geo_division_i18n_stddev_pop_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Division_I18n_Stddev_Pop_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Stddev_Samp_Fields = {
  __typename?: 'geo_division_i18n_stddev_samp_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Division_I18n_Stddev_Samp_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Sum_Fields = {
  __typename?: 'geo_division_i18n_sum_fields';
  division_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Geo_Division_I18n_Sum_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export enum Geo_Division_I18n_Update_Column {
  DivisionId = 'division_id',
  Id = 'id',
  Lang = 'lang',
  Name = 'name'
}

export type Geo_Division_I18n_Var_Pop_Fields = {
  __typename?: 'geo_division_i18n_var_pop_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Division_I18n_Var_Pop_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Var_Samp_Fields = {
  __typename?: 'geo_division_i18n_var_samp_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Division_I18n_Var_Samp_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Division_I18n_Variance_Fields = {
  __typename?: 'geo_division_i18n_variance_fields';
  division_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Geo_Division_I18n_Variance_Order_By = {
  division_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Geo_Division_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['smallint']>;
};

export type Geo_Division_Insert_Input = {
  districts?: Maybe<Geo_District_Arr_Rel_Insert_Input>;
  i18n?: Maybe<Geo_Division_I18n_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['smallint']>;
  state?: Maybe<Geo_State_Obj_Rel_Insert_Input>;
  state_id?: Maybe<Scalars['smallint']>;
};

export type Geo_Division_Max_Fields = {
  __typename?: 'geo_division_max_fields';
  id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['smallint']>;
};

export type Geo_Division_Max_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Min_Fields = {
  __typename?: 'geo_division_min_fields';
  id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['smallint']>;
};

export type Geo_Division_Min_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Mutation_Response = {
  __typename?: 'geo_division_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_Division>;
};

export type Geo_Division_Obj_Rel_Insert_Input = {
  data: Geo_Division_Insert_Input;
  on_conflict?: Maybe<Geo_Division_On_Conflict>;
};

export type Geo_Division_On_Conflict = {
  constraint: Geo_Division_Constraint;
  update_columns?: Array<Geo_Division_Update_Column>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};

export type Geo_Division_Order_By = {
  districts_aggregate?: Maybe<Geo_District_Aggregate_Order_By>;
  i18n_aggregate?: Maybe<Geo_Division_I18n_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  state?: Maybe<Geo_State_Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_Division_Select_Column {
  Id = 'id',
  StateId = 'state_id'
}

export type Geo_Division_Set_Input = {
  id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['smallint']>;
};

export type Geo_Division_Stddev_Fields = {
  __typename?: 'geo_division_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_Division_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Stddev_Pop_Fields = {
  __typename?: 'geo_division_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_Division_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Stddev_Samp_Fields = {
  __typename?: 'geo_division_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_Division_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Sum_Fields = {
  __typename?: 'geo_division_sum_fields';
  id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['smallint']>;
};

export type Geo_Division_Sum_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export enum Geo_Division_Update_Column {
  Id = 'id',
  StateId = 'state_id'
}

export type Geo_Division_Var_Pop_Fields = {
  __typename?: 'geo_division_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_Division_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Var_Samp_Fields = {
  __typename?: 'geo_division_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_Division_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_Division_Variance_Fields = {
  __typename?: 'geo_division_variance_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_Division_Variance_Order_By = {
  id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State = {
  __typename?: 'geo_state';
  country: Geo_Country;
  country_id: Scalars['smallint'];
  divisions: Array<Geo_Division>;
  divisions_aggregate: Geo_Division_Aggregate;
  i18n: Array<Geo_State_I18n>;
  i18n_aggregate: Geo_State_I18n_Aggregate;
  id: Scalars['smallint'];
};


export type Geo_StateDivisionsArgs = {
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Geo_StateDivisions_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Geo_StateI18nArgs = {
  distinct_on?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_I18n_Order_By>>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};


export type Geo_StateI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_I18n_Order_By>>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};

export type Geo_State_Aggregate = {
  __typename?: 'geo_state_aggregate';
  aggregate?: Maybe<Geo_State_Aggregate_Fields>;
  nodes: Array<Geo_State>;
};

export type Geo_State_Aggregate_Fields = {
  __typename?: 'geo_state_aggregate_fields';
  avg?: Maybe<Geo_State_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_State_Max_Fields>;
  min?: Maybe<Geo_State_Min_Fields>;
  stddev?: Maybe<Geo_State_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_State_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_State_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_State_Sum_Fields>;
  var_pop?: Maybe<Geo_State_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_State_Var_Samp_Fields>;
  variance?: Maybe<Geo_State_Variance_Fields>;
};


export type Geo_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_State_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_State_Aggregate_Order_By = {
  avg?: Maybe<Geo_State_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_State_Max_Order_By>;
  min?: Maybe<Geo_State_Min_Order_By>;
  stddev?: Maybe<Geo_State_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_State_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_State_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_State_Sum_Order_By>;
  var_pop?: Maybe<Geo_State_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_State_Var_Samp_Order_By>;
  variance?: Maybe<Geo_State_Variance_Order_By>;
};

export type Geo_State_Arr_Rel_Insert_Input = {
  data: Array<Geo_State_Insert_Input>;
  on_conflict?: Maybe<Geo_State_On_Conflict>;
};

export type Geo_State_Avg_Fields = {
  __typename?: 'geo_state_avg_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_State_Avg_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Bool_Exp = {
  _and?: Maybe<Array<Geo_State_Bool_Exp>>;
  _not?: Maybe<Geo_State_Bool_Exp>;
  _or?: Maybe<Array<Geo_State_Bool_Exp>>;
  country?: Maybe<Geo_Country_Bool_Exp>;
  country_id?: Maybe<Smallint_Comparison_Exp>;
  divisions?: Maybe<Geo_Division_Bool_Exp>;
  i18n?: Maybe<Geo_State_I18n_Bool_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
};

export enum Geo_State_Constraint {
  StatePkey = 'state_pkey'
}

export type Geo_State_I18n = {
  __typename?: 'geo_state_i18n';
  id: Scalars['smallint'];
  lang: Scalars['smallint'];
  language: Misc_Language;
  name: Scalars['String'];
  state: Geo_State;
  state_id: Scalars['Int'];
};

export type Geo_State_I18n_Aggregate = {
  __typename?: 'geo_state_i18n_aggregate';
  aggregate?: Maybe<Geo_State_I18n_Aggregate_Fields>;
  nodes: Array<Geo_State_I18n>;
};

export type Geo_State_I18n_Aggregate_Fields = {
  __typename?: 'geo_state_i18n_aggregate_fields';
  avg?: Maybe<Geo_State_I18n_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_State_I18n_Max_Fields>;
  min?: Maybe<Geo_State_I18n_Min_Fields>;
  stddev?: Maybe<Geo_State_I18n_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_State_I18n_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_State_I18n_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_State_I18n_Sum_Fields>;
  var_pop?: Maybe<Geo_State_I18n_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_State_I18n_Var_Samp_Fields>;
  variance?: Maybe<Geo_State_I18n_Variance_Fields>;
};


export type Geo_State_I18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_State_I18n_Aggregate_Order_By = {
  avg?: Maybe<Geo_State_I18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_State_I18n_Max_Order_By>;
  min?: Maybe<Geo_State_I18n_Min_Order_By>;
  stddev?: Maybe<Geo_State_I18n_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_State_I18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_State_I18n_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_State_I18n_Sum_Order_By>;
  var_pop?: Maybe<Geo_State_I18n_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_State_I18n_Var_Samp_Order_By>;
  variance?: Maybe<Geo_State_I18n_Variance_Order_By>;
};

export type Geo_State_I18n_Arr_Rel_Insert_Input = {
  data: Array<Geo_State_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_State_I18n_On_Conflict>;
};

export type Geo_State_I18n_Avg_Fields = {
  __typename?: 'geo_state_i18n_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_State_I18n_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Bool_Exp = {
  _and?: Maybe<Array<Geo_State_I18n_Bool_Exp>>;
  _not?: Maybe<Geo_State_I18n_Bool_Exp>;
  _or?: Maybe<Array<Geo_State_I18n_Bool_Exp>>;
  id?: Maybe<Smallint_Comparison_Exp>;
  lang?: Maybe<Smallint_Comparison_Exp>;
  language?: Maybe<Misc_Language_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  state?: Maybe<Geo_State_Bool_Exp>;
  state_id?: Maybe<Int_Comparison_Exp>;
};

export enum Geo_State_I18n_Constraint {
  StateI18nPkey = 'state_i18n_pkey',
  StateI18nStateIdLangKey = 'state_i18n_state_id_lang_key'
}

export type Geo_State_I18n_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Geo_State_I18n_Insert_Input = {
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  language?: Maybe<Misc_Language_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Geo_State_Obj_Rel_Insert_Input>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Geo_State_I18n_Max_Fields = {
  __typename?: 'geo_state_i18n_max_fields';
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Geo_State_I18n_Max_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Min_Fields = {
  __typename?: 'geo_state_i18n_min_fields';
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Geo_State_I18n_Min_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Mutation_Response = {
  __typename?: 'geo_state_i18n_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_State_I18n>;
};

export type Geo_State_I18n_On_Conflict = {
  constraint: Geo_State_I18n_Constraint;
  update_columns?: Array<Geo_State_I18n_Update_Column>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};

export type Geo_State_I18n_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  language?: Maybe<Misc_Language_Order_By>;
  name?: Maybe<Order_By>;
  state?: Maybe<Geo_State_Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_State_I18n_Select_Column {
  Id = 'id',
  Lang = 'lang',
  Name = 'name',
  StateId = 'state_id'
}

export type Geo_State_I18n_Set_Input = {
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Geo_State_I18n_Stddev_Fields = {
  __typename?: 'geo_state_i18n_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_State_I18n_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Stddev_Pop_Fields = {
  __typename?: 'geo_state_i18n_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_State_I18n_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Stddev_Samp_Fields = {
  __typename?: 'geo_state_i18n_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_State_I18n_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Sum_Fields = {
  __typename?: 'geo_state_i18n_sum_fields';
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Geo_State_I18n_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export enum Geo_State_I18n_Update_Column {
  Id = 'id',
  Lang = 'lang',
  Name = 'name',
  StateId = 'state_id'
}

export type Geo_State_I18n_Var_Pop_Fields = {
  __typename?: 'geo_state_i18n_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_State_I18n_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Var_Samp_Fields = {
  __typename?: 'geo_state_i18n_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_State_I18n_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_I18n_Variance_Fields = {
  __typename?: 'geo_state_i18n_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Geo_State_I18n_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Geo_State_Inc_Input = {
  country_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_State_Insert_Input = {
  country?: Maybe<Geo_Country_Obj_Rel_Insert_Input>;
  country_id?: Maybe<Scalars['smallint']>;
  divisions?: Maybe<Geo_Division_Arr_Rel_Insert_Input>;
  i18n?: Maybe<Geo_State_I18n_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_State_Max_Fields = {
  __typename?: 'geo_state_max_fields';
  country_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_State_Max_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Min_Fields = {
  __typename?: 'geo_state_min_fields';
  country_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_State_Min_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Mutation_Response = {
  __typename?: 'geo_state_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_State>;
};

export type Geo_State_Obj_Rel_Insert_Input = {
  data: Geo_State_Insert_Input;
  on_conflict?: Maybe<Geo_State_On_Conflict>;
};

export type Geo_State_On_Conflict = {
  constraint: Geo_State_Constraint;
  update_columns?: Array<Geo_State_Update_Column>;
  where?: Maybe<Geo_State_Bool_Exp>;
};

export type Geo_State_Order_By = {
  country?: Maybe<Geo_Country_Order_By>;
  country_id?: Maybe<Order_By>;
  divisions_aggregate?: Maybe<Geo_Division_Aggregate_Order_By>;
  i18n_aggregate?: Maybe<Geo_State_I18n_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_State_Select_Column {
  CountryId = 'country_id',
  Id = 'id'
}

export type Geo_State_Set_Input = {
  country_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_State_Stddev_Fields = {
  __typename?: 'geo_state_stddev_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_State_Stddev_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Stddev_Pop_Fields = {
  __typename?: 'geo_state_stddev_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_State_Stddev_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Stddev_Samp_Fields = {
  __typename?: 'geo_state_stddev_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_State_Stddev_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Sum_Fields = {
  __typename?: 'geo_state_sum_fields';
  country_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_State_Sum_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Geo_State_Update_Column {
  CountryId = 'country_id',
  Id = 'id'
}

export type Geo_State_Var_Pop_Fields = {
  __typename?: 'geo_state_var_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_State_Var_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Var_Samp_Fields = {
  __typename?: 'geo_state_var_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_State_Var_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_State_Variance_Fields = {
  __typename?: 'geo_state_variance_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_State_Variance_Order_By = {
  country_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District = {
  __typename?: 'geo_sub_district';
  addresses: Array<Profile_Address>;
  addresses_aggregate: Profile_Address_Aggregate;
  district: Geo_District;
  district_id: Scalars['smallint'];
  i18n: Array<Geo_Sub_District_I18n>;
  i18n_aggregate: Geo_Sub_District_I18n_Aggregate;
  id: Scalars['smallint'];
};


export type Geo_Sub_DistrictAddressesArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type Geo_Sub_DistrictAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type Geo_Sub_DistrictI18nArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_I18n_Order_By>>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};


export type Geo_Sub_DistrictI18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_I18n_Order_By>>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};

export type Geo_Sub_District_Aggregate = {
  __typename?: 'geo_sub_district_aggregate';
  aggregate?: Maybe<Geo_Sub_District_Aggregate_Fields>;
  nodes: Array<Geo_Sub_District>;
};

export type Geo_Sub_District_Aggregate_Fields = {
  __typename?: 'geo_sub_district_aggregate_fields';
  avg?: Maybe<Geo_Sub_District_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_Sub_District_Max_Fields>;
  min?: Maybe<Geo_Sub_District_Min_Fields>;
  stddev?: Maybe<Geo_Sub_District_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_Sub_District_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_Sub_District_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_Sub_District_Sum_Fields>;
  var_pop?: Maybe<Geo_Sub_District_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_Sub_District_Var_Samp_Fields>;
  variance?: Maybe<Geo_Sub_District_Variance_Fields>;
};


export type Geo_Sub_District_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_Sub_District_Aggregate_Order_By = {
  avg?: Maybe<Geo_Sub_District_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_Sub_District_Max_Order_By>;
  min?: Maybe<Geo_Sub_District_Min_Order_By>;
  stddev?: Maybe<Geo_Sub_District_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_Sub_District_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_Sub_District_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_Sub_District_Sum_Order_By>;
  var_pop?: Maybe<Geo_Sub_District_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_Sub_District_Var_Samp_Order_By>;
  variance?: Maybe<Geo_Sub_District_Variance_Order_By>;
};

export type Geo_Sub_District_Arr_Rel_Insert_Input = {
  data: Array<Geo_Sub_District_Insert_Input>;
  on_conflict?: Maybe<Geo_Sub_District_On_Conflict>;
};

export type Geo_Sub_District_Avg_Fields = {
  __typename?: 'geo_sub_district_avg_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_Avg_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Bool_Exp = {
  _and?: Maybe<Array<Geo_Sub_District_Bool_Exp>>;
  _not?: Maybe<Geo_Sub_District_Bool_Exp>;
  _or?: Maybe<Array<Geo_Sub_District_Bool_Exp>>;
  addresses?: Maybe<Profile_Address_Bool_Exp>;
  district?: Maybe<Geo_District_Bool_Exp>;
  district_id?: Maybe<Smallint_Comparison_Exp>;
  i18n?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
};

export enum Geo_Sub_District_Constraint {
  SubDistrictPkey = 'sub_district_pkey'
}

export type Geo_Sub_District_I18n = {
  __typename?: 'geo_sub_district_i18n';
  id: Scalars['smallint'];
  lang: Scalars['smallint'];
  language: Misc_Language;
  name: Scalars['String'];
  sub_district: Geo_Sub_District;
  sub_district_id: Scalars['Int'];
};

export type Geo_Sub_District_I18n_Aggregate = {
  __typename?: 'geo_sub_district_i18n_aggregate';
  aggregate?: Maybe<Geo_Sub_District_I18n_Aggregate_Fields>;
  nodes: Array<Geo_Sub_District_I18n>;
};

export type Geo_Sub_District_I18n_Aggregate_Fields = {
  __typename?: 'geo_sub_district_i18n_aggregate_fields';
  avg?: Maybe<Geo_Sub_District_I18n_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Geo_Sub_District_I18n_Max_Fields>;
  min?: Maybe<Geo_Sub_District_I18n_Min_Fields>;
  stddev?: Maybe<Geo_Sub_District_I18n_Stddev_Fields>;
  stddev_pop?: Maybe<Geo_Sub_District_I18n_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Geo_Sub_District_I18n_Stddev_Samp_Fields>;
  sum?: Maybe<Geo_Sub_District_I18n_Sum_Fields>;
  var_pop?: Maybe<Geo_Sub_District_I18n_Var_Pop_Fields>;
  var_samp?: Maybe<Geo_Sub_District_I18n_Var_Samp_Fields>;
  variance?: Maybe<Geo_Sub_District_I18n_Variance_Fields>;
};


export type Geo_Sub_District_I18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Geo_Sub_District_I18n_Aggregate_Order_By = {
  avg?: Maybe<Geo_Sub_District_I18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Geo_Sub_District_I18n_Max_Order_By>;
  min?: Maybe<Geo_Sub_District_I18n_Min_Order_By>;
  stddev?: Maybe<Geo_Sub_District_I18n_Stddev_Order_By>;
  stddev_pop?: Maybe<Geo_Sub_District_I18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Geo_Sub_District_I18n_Stddev_Samp_Order_By>;
  sum?: Maybe<Geo_Sub_District_I18n_Sum_Order_By>;
  var_pop?: Maybe<Geo_Sub_District_I18n_Var_Pop_Order_By>;
  var_samp?: Maybe<Geo_Sub_District_I18n_Var_Samp_Order_By>;
  variance?: Maybe<Geo_Sub_District_I18n_Variance_Order_By>;
};

export type Geo_Sub_District_I18n_Arr_Rel_Insert_Input = {
  data: Array<Geo_Sub_District_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_Sub_District_I18n_On_Conflict>;
};

export type Geo_Sub_District_I18n_Avg_Fields = {
  __typename?: 'geo_sub_district_i18n_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_I18n_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Bool_Exp = {
  _and?: Maybe<Array<Geo_Sub_District_I18n_Bool_Exp>>;
  _not?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
  _or?: Maybe<Array<Geo_Sub_District_I18n_Bool_Exp>>;
  id?: Maybe<Smallint_Comparison_Exp>;
  lang?: Maybe<Smallint_Comparison_Exp>;
  language?: Maybe<Misc_Language_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sub_district?: Maybe<Geo_Sub_District_Bool_Exp>;
  sub_district_id?: Maybe<Int_Comparison_Exp>;
};

export enum Geo_Sub_District_I18n_Constraint {
  SubDistrictI18nPkey = 'sub_district_i18n_pkey',
  SubDistrictI18nSubDistrictIdLangKey = 'sub_district_i18n_sub_district_id_lang_key'
}

export type Geo_Sub_District_I18n_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  sub_district_id?: Maybe<Scalars['Int']>;
};

export type Geo_Sub_District_I18n_Insert_Input = {
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  language?: Maybe<Misc_Language_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  sub_district?: Maybe<Geo_Sub_District_Obj_Rel_Insert_Input>;
  sub_district_id?: Maybe<Scalars['Int']>;
};

export type Geo_Sub_District_I18n_Max_Fields = {
  __typename?: 'geo_sub_district_i18n_max_fields';
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  sub_district_id?: Maybe<Scalars['Int']>;
};

export type Geo_Sub_District_I18n_Max_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Min_Fields = {
  __typename?: 'geo_sub_district_i18n_min_fields';
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  sub_district_id?: Maybe<Scalars['Int']>;
};

export type Geo_Sub_District_I18n_Min_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Mutation_Response = {
  __typename?: 'geo_sub_district_i18n_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_Sub_District_I18n>;
};

export type Geo_Sub_District_I18n_On_Conflict = {
  constraint: Geo_Sub_District_I18n_Constraint;
  update_columns?: Array<Geo_Sub_District_I18n_Update_Column>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};

export type Geo_Sub_District_I18n_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  language?: Maybe<Misc_Language_Order_By>;
  name?: Maybe<Order_By>;
  sub_district?: Maybe<Geo_Sub_District_Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_Sub_District_I18n_Select_Column {
  Id = 'id',
  Lang = 'lang',
  Name = 'name',
  SubDistrictId = 'sub_district_id'
}

export type Geo_Sub_District_I18n_Set_Input = {
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  sub_district_id?: Maybe<Scalars['Int']>;
};

export type Geo_Sub_District_I18n_Stddev_Fields = {
  __typename?: 'geo_sub_district_i18n_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_I18n_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Stddev_Pop_Fields = {
  __typename?: 'geo_sub_district_i18n_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_I18n_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Stddev_Samp_Fields = {
  __typename?: 'geo_sub_district_i18n_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_I18n_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Sum_Fields = {
  __typename?: 'geo_sub_district_i18n_sum_fields';
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  sub_district_id?: Maybe<Scalars['Int']>;
};

export type Geo_Sub_District_I18n_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export enum Geo_Sub_District_I18n_Update_Column {
  Id = 'id',
  Lang = 'lang',
  Name = 'name',
  SubDistrictId = 'sub_district_id'
}

export type Geo_Sub_District_I18n_Var_Pop_Fields = {
  __typename?: 'geo_sub_district_i18n_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_I18n_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Var_Samp_Fields = {
  __typename?: 'geo_sub_district_i18n_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_I18n_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_I18n_Variance_Fields = {
  __typename?: 'geo_sub_district_i18n_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_I18n_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Inc_Input = {
  district_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Sub_District_Insert_Input = {
  addresses?: Maybe<Profile_Address_Arr_Rel_Insert_Input>;
  district?: Maybe<Geo_District_Obj_Rel_Insert_Input>;
  district_id?: Maybe<Scalars['smallint']>;
  i18n?: Maybe<Geo_Sub_District_I18n_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Sub_District_Max_Fields = {
  __typename?: 'geo_sub_district_max_fields';
  district_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Sub_District_Max_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Min_Fields = {
  __typename?: 'geo_sub_district_min_fields';
  district_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Sub_District_Min_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Mutation_Response = {
  __typename?: 'geo_sub_district_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Geo_Sub_District>;
};

export type Geo_Sub_District_Obj_Rel_Insert_Input = {
  data: Geo_Sub_District_Insert_Input;
  on_conflict?: Maybe<Geo_Sub_District_On_Conflict>;
};

export type Geo_Sub_District_On_Conflict = {
  constraint: Geo_Sub_District_Constraint;
  update_columns?: Array<Geo_Sub_District_Update_Column>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};

export type Geo_Sub_District_Order_By = {
  addresses_aggregate?: Maybe<Profile_Address_Aggregate_Order_By>;
  district?: Maybe<Geo_District_Order_By>;
  district_id?: Maybe<Order_By>;
  i18n_aggregate?: Maybe<Geo_Sub_District_I18n_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Geo_Sub_District_Select_Column {
  DistrictId = 'district_id',
  Id = 'id'
}

export type Geo_Sub_District_Set_Input = {
  district_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Sub_District_Stddev_Fields = {
  __typename?: 'geo_sub_district_stddev_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_Stddev_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Stddev_Pop_Fields = {
  __typename?: 'geo_sub_district_stddev_pop_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_Stddev_Pop_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Stddev_Samp_Fields = {
  __typename?: 'geo_sub_district_stddev_samp_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_Stddev_Samp_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Sum_Fields = {
  __typename?: 'geo_sub_district_sum_fields';
  district_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
};

export type Geo_Sub_District_Sum_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export enum Geo_Sub_District_Update_Column {
  DistrictId = 'district_id',
  Id = 'id'
}

export type Geo_Sub_District_Var_Pop_Fields = {
  __typename?: 'geo_sub_district_var_pop_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_Var_Pop_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Var_Samp_Fields = {
  __typename?: 'geo_sub_district_var_samp_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_Var_Samp_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Geo_Sub_District_Variance_Fields = {
  __typename?: 'geo_sub_district_variance_fields';
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Geo_Sub_District_Variance_Order_By = {
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};


export type Inet_Comparison_Exp = {
  _eq?: Maybe<Scalars['inet']>;
  _gt?: Maybe<Scalars['inet']>;
  _gte?: Maybe<Scalars['inet']>;
  _in?: Maybe<Array<Scalars['inet']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['inet']>;
  _lte?: Maybe<Scalars['inet']>;
  _neq?: Maybe<Scalars['inet']>;
  _nin?: Maybe<Array<Scalars['inet']>>;
};


export type Interval_Comparison_Exp = {
  _eq?: Maybe<Scalars['interval']>;
  _gt?: Maybe<Scalars['interval']>;
  _gte?: Maybe<Scalars['interval']>;
  _in?: Maybe<Array<Scalars['interval']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['interval']>;
  _lte?: Maybe<Scalars['interval']>;
  _neq?: Maybe<Scalars['interval']>;
  _nin?: Maybe<Array<Scalars['interval']>>;
};


export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


export type Jsonb_Comparison_Exp = {
  _contained_in?: Maybe<Scalars['jsonb']>;
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  _has_key?: Maybe<Scalars['String']>;
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

export type Misc_Language = {
  __typename?: 'misc_language';
  code: Scalars['String'];
  contents: Array<Access_Control_Content>;
  contents_aggregate: Access_Control_Content_Aggregate;
  country_i18ns: Array<Geo_Country_I18n>;
  country_i18ns_aggregate: Geo_Country_I18n_Aggregate;
  district_i18ns: Array<Geo_District_I18n>;
  district_i18ns_aggregate: Geo_District_I18n_Aggregate;
  division_i18ns: Array<Geo_Division_I18n>;
  division_i18ns_aggregate: Geo_Division_I18n_Aggregate;
  id: Scalars['smallint'];
  name: Scalars['String'];
  state_i18ns: Array<Geo_State_I18n>;
  state_i18ns_aggregate: Geo_State_I18n_Aggregate;
  sub_district_i18ns: Array<Geo_Sub_District_I18n>;
  sub_district_i18ns_aggregate: Geo_Sub_District_I18n_Aggregate;
};


export type Misc_LanguageContentsArgs = {
  distinct_on?: Maybe<Array<Access_Control_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Content_Order_By>>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};


export type Misc_LanguageContents_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Content_Order_By>>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};


export type Misc_LanguageCountry_I18nsArgs = {
  distinct_on?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_I18n_Order_By>>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};


export type Misc_LanguageCountry_I18ns_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_I18n_Order_By>>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};


export type Misc_LanguageDistrict_I18nsArgs = {
  distinct_on?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_I18n_Order_By>>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};


export type Misc_LanguageDistrict_I18ns_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_I18n_Order_By>>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};


export type Misc_LanguageDivision_I18nsArgs = {
  distinct_on?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_I18n_Order_By>>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};


export type Misc_LanguageDivision_I18ns_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_I18n_Order_By>>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};


export type Misc_LanguageState_I18nsArgs = {
  distinct_on?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_I18n_Order_By>>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};


export type Misc_LanguageState_I18ns_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_I18n_Order_By>>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};


export type Misc_LanguageSub_District_I18nsArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_I18n_Order_By>>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};


export type Misc_LanguageSub_District_I18ns_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_I18n_Order_By>>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};

export type Misc_Language_Aggregate = {
  __typename?: 'misc_language_aggregate';
  aggregate?: Maybe<Misc_Language_Aggregate_Fields>;
  nodes: Array<Misc_Language>;
};

export type Misc_Language_Aggregate_Fields = {
  __typename?: 'misc_language_aggregate_fields';
  avg?: Maybe<Misc_Language_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Misc_Language_Max_Fields>;
  min?: Maybe<Misc_Language_Min_Fields>;
  stddev?: Maybe<Misc_Language_Stddev_Fields>;
  stddev_pop?: Maybe<Misc_Language_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Misc_Language_Stddev_Samp_Fields>;
  sum?: Maybe<Misc_Language_Sum_Fields>;
  var_pop?: Maybe<Misc_Language_Var_Pop_Fields>;
  var_samp?: Maybe<Misc_Language_Var_Samp_Fields>;
  variance?: Maybe<Misc_Language_Variance_Fields>;
};


export type Misc_Language_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Misc_Language_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Misc_Language_Avg_Fields = {
  __typename?: 'misc_language_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Misc_Language_Bool_Exp = {
  _and?: Maybe<Array<Misc_Language_Bool_Exp>>;
  _not?: Maybe<Misc_Language_Bool_Exp>;
  _or?: Maybe<Array<Misc_Language_Bool_Exp>>;
  code?: Maybe<String_Comparison_Exp>;
  contents?: Maybe<Access_Control_Content_Bool_Exp>;
  country_i18ns?: Maybe<Geo_Country_I18n_Bool_Exp>;
  district_i18ns?: Maybe<Geo_District_I18n_Bool_Exp>;
  division_i18ns?: Maybe<Geo_Division_I18n_Bool_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  state_i18ns?: Maybe<Geo_State_I18n_Bool_Exp>;
  sub_district_i18ns?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};

export enum Misc_Language_Constraint {
  LanguageCodeKey = 'language_code_key',
  LanguagePkey = 'language_pkey'
}

export type Misc_Language_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
};

export type Misc_Language_Insert_Input = {
  code?: Maybe<Scalars['String']>;
  contents?: Maybe<Access_Control_Content_Arr_Rel_Insert_Input>;
  country_i18ns?: Maybe<Geo_Country_I18n_Arr_Rel_Insert_Input>;
  district_i18ns?: Maybe<Geo_District_I18n_Arr_Rel_Insert_Input>;
  division_i18ns?: Maybe<Geo_Division_I18n_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  state_i18ns?: Maybe<Geo_State_I18n_Arr_Rel_Insert_Input>;
  sub_district_i18ns?: Maybe<Geo_Sub_District_I18n_Arr_Rel_Insert_Input>;
};

export type Misc_Language_Max_Fields = {
  __typename?: 'misc_language_max_fields';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Misc_Language_Min_Fields = {
  __typename?: 'misc_language_min_fields';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Misc_Language_Mutation_Response = {
  __typename?: 'misc_language_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Misc_Language>;
};

export type Misc_Language_Obj_Rel_Insert_Input = {
  data: Misc_Language_Insert_Input;
  on_conflict?: Maybe<Misc_Language_On_Conflict>;
};

export type Misc_Language_On_Conflict = {
  constraint: Misc_Language_Constraint;
  update_columns?: Array<Misc_Language_Update_Column>;
  where?: Maybe<Misc_Language_Bool_Exp>;
};

export type Misc_Language_Order_By = {
  code?: Maybe<Order_By>;
  contents_aggregate?: Maybe<Access_Control_Content_Aggregate_Order_By>;
  country_i18ns_aggregate?: Maybe<Geo_Country_I18n_Aggregate_Order_By>;
  district_i18ns_aggregate?: Maybe<Geo_District_I18n_Aggregate_Order_By>;
  division_i18ns_aggregate?: Maybe<Geo_Division_I18n_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  state_i18ns_aggregate?: Maybe<Geo_State_I18n_Aggregate_Order_By>;
  sub_district_i18ns_aggregate?: Maybe<Geo_Sub_District_I18n_Aggregate_Order_By>;
};

export type Misc_Language_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Misc_Language_Select_Column {
  Code = 'code',
  Id = 'id',
  Name = 'name'
}

export type Misc_Language_Set_Input = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
};

export type Misc_Language_Stddev_Fields = {
  __typename?: 'misc_language_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Misc_Language_Stddev_Pop_Fields = {
  __typename?: 'misc_language_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Misc_Language_Stddev_Samp_Fields = {
  __typename?: 'misc_language_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Misc_Language_Sum_Fields = {
  __typename?: 'misc_language_sum_fields';
  id?: Maybe<Scalars['smallint']>;
};

export enum Misc_Language_Update_Column {
  Code = 'code',
  Id = 'id',
  Name = 'name'
}

export type Misc_Language_Var_Pop_Fields = {
  __typename?: 'misc_language_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Misc_Language_Var_Samp_Fields = {
  __typename?: 'misc_language_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Misc_Language_Variance_Fields = {
  __typename?: 'misc_language_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Misc_Verification = {
  __typename?: 'misc_verification';
  created_at: Scalars['timestamptz'];
  expires_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  sent_at?: Maybe<Scalars['timestamptz']>;
  sent_count?: Maybe<Scalars['Int']>;
  token: Scalars['String'];
  type: Misc_Verification_Type_Enum;
  user_id: Scalars['Int'];
  verification_type: Misc_Verification_Type;
};

export type Misc_Verification_Aggregate = {
  __typename?: 'misc_verification_aggregate';
  aggregate?: Maybe<Misc_Verification_Aggregate_Fields>;
  nodes: Array<Misc_Verification>;
};

export type Misc_Verification_Aggregate_Fields = {
  __typename?: 'misc_verification_aggregate_fields';
  avg?: Maybe<Misc_Verification_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Misc_Verification_Max_Fields>;
  min?: Maybe<Misc_Verification_Min_Fields>;
  stddev?: Maybe<Misc_Verification_Stddev_Fields>;
  stddev_pop?: Maybe<Misc_Verification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Misc_Verification_Stddev_Samp_Fields>;
  sum?: Maybe<Misc_Verification_Sum_Fields>;
  var_pop?: Maybe<Misc_Verification_Var_Pop_Fields>;
  var_samp?: Maybe<Misc_Verification_Var_Samp_Fields>;
  variance?: Maybe<Misc_Verification_Variance_Fields>;
};


export type Misc_Verification_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Misc_Verification_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Misc_Verification_Aggregate_Order_By = {
  avg?: Maybe<Misc_Verification_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Misc_Verification_Max_Order_By>;
  min?: Maybe<Misc_Verification_Min_Order_By>;
  stddev?: Maybe<Misc_Verification_Stddev_Order_By>;
  stddev_pop?: Maybe<Misc_Verification_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Misc_Verification_Stddev_Samp_Order_By>;
  sum?: Maybe<Misc_Verification_Sum_Order_By>;
  var_pop?: Maybe<Misc_Verification_Var_Pop_Order_By>;
  var_samp?: Maybe<Misc_Verification_Var_Samp_Order_By>;
  variance?: Maybe<Misc_Verification_Variance_Order_By>;
};

export type Misc_Verification_Arr_Rel_Insert_Input = {
  data: Array<Misc_Verification_Insert_Input>;
  on_conflict?: Maybe<Misc_Verification_On_Conflict>;
};

export type Misc_Verification_Avg_Fields = {
  __typename?: 'misc_verification_avg_fields';
  id?: Maybe<Scalars['Float']>;
  sent_count?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Misc_Verification_Avg_Order_By = {
  id?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Bool_Exp = {
  _and?: Maybe<Array<Misc_Verification_Bool_Exp>>;
  _not?: Maybe<Misc_Verification_Bool_Exp>;
  _or?: Maybe<Array<Misc_Verification_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  payload?: Maybe<String_Comparison_Exp>;
  sent_at?: Maybe<Timestamptz_Comparison_Exp>;
  sent_count?: Maybe<Int_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Misc_Verification_Type_Enum_Comparison_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  verification_type?: Maybe<Misc_Verification_Type_Bool_Exp>;
};

export enum Misc_Verification_Constraint {
  VerificationPkey = 'verification_pkey',
  VerificationUserIdTypePayloadKey = 'verification_user_id_type_payload_key'
}

export type Misc_Verification_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  sent_count?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Misc_Verification_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  sent_at?: Maybe<Scalars['timestamptz']>;
  sent_count?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  type?: Maybe<Misc_Verification_Type_Enum>;
  user_id?: Maybe<Scalars['Int']>;
  verification_type?: Maybe<Misc_Verification_Type_Obj_Rel_Insert_Input>;
};

export type Misc_Verification_Max_Fields = {
  __typename?: 'misc_verification_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  sent_at?: Maybe<Scalars['timestamptz']>;
  sent_count?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Misc_Verification_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
  sent_at?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Min_Fields = {
  __typename?: 'misc_verification_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  sent_at?: Maybe<Scalars['timestamptz']>;
  sent_count?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Misc_Verification_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
  sent_at?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Mutation_Response = {
  __typename?: 'misc_verification_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Misc_Verification>;
};

export type Misc_Verification_On_Conflict = {
  constraint: Misc_Verification_Constraint;
  update_columns?: Array<Misc_Verification_Update_Column>;
  where?: Maybe<Misc_Verification_Bool_Exp>;
};

export type Misc_Verification_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
  sent_at?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  verification_type?: Maybe<Misc_Verification_Type_Order_By>;
};

export type Misc_Verification_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Misc_Verification_Select_Column {
  CreatedAt = 'created_at',
  ExpiresAt = 'expires_at',
  Id = 'id',
  Key = 'key',
  Payload = 'payload',
  SentAt = 'sent_at',
  SentCount = 'sent_count',
  Token = 'token',
  Type = 'type',
  UserId = 'user_id'
}

export type Misc_Verification_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
  sent_at?: Maybe<Scalars['timestamptz']>;
  sent_count?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  type?: Maybe<Misc_Verification_Type_Enum>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Misc_Verification_Stddev_Fields = {
  __typename?: 'misc_verification_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  sent_count?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Misc_Verification_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Stddev_Pop_Fields = {
  __typename?: 'misc_verification_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sent_count?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Misc_Verification_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Stddev_Samp_Fields = {
  __typename?: 'misc_verification_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sent_count?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Misc_Verification_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Sum_Fields = {
  __typename?: 'misc_verification_sum_fields';
  id?: Maybe<Scalars['Int']>;
  sent_count?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Misc_Verification_Sum_Order_By = {
  id?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Type = {
  __typename?: 'misc_verification_type';
  value: Scalars['String'];
  verifications: Array<Misc_Verification>;
  verifications_aggregate: Misc_Verification_Aggregate;
};


export type Misc_Verification_TypeVerificationsArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Order_By>>;
  where?: Maybe<Misc_Verification_Bool_Exp>;
};


export type Misc_Verification_TypeVerifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Order_By>>;
  where?: Maybe<Misc_Verification_Bool_Exp>;
};

export type Misc_Verification_Type_Aggregate = {
  __typename?: 'misc_verification_type_aggregate';
  aggregate?: Maybe<Misc_Verification_Type_Aggregate_Fields>;
  nodes: Array<Misc_Verification_Type>;
};

export type Misc_Verification_Type_Aggregate_Fields = {
  __typename?: 'misc_verification_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Misc_Verification_Type_Max_Fields>;
  min?: Maybe<Misc_Verification_Type_Min_Fields>;
};


export type Misc_Verification_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Misc_Verification_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Misc_Verification_Type_Bool_Exp = {
  _and?: Maybe<Array<Misc_Verification_Type_Bool_Exp>>;
  _not?: Maybe<Misc_Verification_Type_Bool_Exp>;
  _or?: Maybe<Array<Misc_Verification_Type_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
  verifications?: Maybe<Misc_Verification_Bool_Exp>;
};

export enum Misc_Verification_Type_Constraint {
  VerificationTypePkey = 'verification_type_pkey'
}

export enum Misc_Verification_Type_Enum {
  Email = 'EMAIL',
  Mobile = 'MOBILE',
  PasswordReset = 'PASSWORD_RESET'
}

export type Misc_Verification_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Misc_Verification_Type_Enum>;
  _in?: Maybe<Array<Misc_Verification_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Misc_Verification_Type_Enum>;
  _nin?: Maybe<Array<Misc_Verification_Type_Enum>>;
};

export type Misc_Verification_Type_Insert_Input = {
  value?: Maybe<Scalars['String']>;
  verifications?: Maybe<Misc_Verification_Arr_Rel_Insert_Input>;
};

export type Misc_Verification_Type_Max_Fields = {
  __typename?: 'misc_verification_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Misc_Verification_Type_Min_Fields = {
  __typename?: 'misc_verification_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Misc_Verification_Type_Mutation_Response = {
  __typename?: 'misc_verification_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Misc_Verification_Type>;
};

export type Misc_Verification_Type_Obj_Rel_Insert_Input = {
  data: Misc_Verification_Type_Insert_Input;
  on_conflict?: Maybe<Misc_Verification_Type_On_Conflict>;
};

export type Misc_Verification_Type_On_Conflict = {
  constraint: Misc_Verification_Type_Constraint;
  update_columns?: Array<Misc_Verification_Type_Update_Column>;
  where?: Maybe<Misc_Verification_Type_Bool_Exp>;
};

export type Misc_Verification_Type_Order_By = {
  value?: Maybe<Order_By>;
  verifications_aggregate?: Maybe<Misc_Verification_Aggregate_Order_By>;
};

export type Misc_Verification_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Misc_Verification_Type_Select_Column {
  Value = 'value'
}

export type Misc_Verification_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Misc_Verification_Type_Update_Column {
  Value = 'value'
}

export enum Misc_Verification_Update_Column {
  CreatedAt = 'created_at',
  ExpiresAt = 'expires_at',
  Id = 'id',
  Key = 'key',
  Payload = 'payload',
  SentAt = 'sent_at',
  SentCount = 'sent_count',
  Token = 'token',
  Type = 'type',
  UserId = 'user_id'
}

export type Misc_Verification_Var_Pop_Fields = {
  __typename?: 'misc_verification_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sent_count?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Misc_Verification_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Var_Samp_Fields = {
  __typename?: 'misc_verification_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sent_count?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Misc_Verification_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Misc_Verification_Variance_Fields = {
  __typename?: 'misc_verification_variance_fields';
  id?: Maybe<Scalars['Float']>;
  sent_count?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Misc_Verification_Variance_Order_By = {
  id?: Maybe<Order_By>;
  sent_count?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Mutation_Root = {
  __typename?: 'mutation_root';
  auth_blacklist_token?: Maybe<Action_Resp_Bool>;
  auth_create_token?: Maybe<Auth_Token>;
  auth_login: Auth_Login_Resp;
  auth_login_google: Auth_Login_Resp;
  auth_logout?: Maybe<Action_Resp_Bool>;
  change_email?: Maybe<Verification_Resp>;
  change_mobile?: Maybe<Verification_Resp>;
  change_password?: Maybe<Action_Resp_Bool>;
  change_reset_password?: Maybe<Verification_Resp>;
  create_account?: Maybe<Action_Resp_Bool>;
  delete_access_control_action?: Maybe<Access_Control_Action_Mutation_Response>;
  delete_access_control_action_by_pk?: Maybe<Access_Control_Action>;
  delete_access_control_content?: Maybe<Access_Control_Content_Mutation_Response>;
  delete_access_control_content_by_pk?: Maybe<Access_Control_Content>;
  delete_access_control_entity?: Maybe<Access_Control_Entity_Mutation_Response>;
  delete_access_control_entity_by_pk?: Maybe<Access_Control_Entity>;
  delete_access_control_log?: Maybe<Access_Control_Log_Mutation_Response>;
  delete_access_control_role?: Maybe<Access_Control_Role_Mutation_Response>;
  delete_access_control_role_by_pk?: Maybe<Access_Control_Role>;
  delete_access_control_role_permission?: Maybe<Access_Control_Role_Permission_Mutation_Response>;
  delete_access_control_role_permission_by_pk?: Maybe<Access_Control_Role_Permission>;
  delete_access_control_role_user?: Maybe<Access_Control_Role_User_Mutation_Response>;
  delete_access_control_role_user_by_pk?: Maybe<Access_Control_Role_User>;
  delete_access_control_user_permission?: Maybe<Access_Control_User_Permission_Mutation_Response>;
  delete_access_control_user_permission_by_pk?: Maybe<Access_Control_User_Permission>;
  delete_account: Action_Resp_Bool;
  delete_auth_access_token?: Maybe<Auth_Access_Token_Mutation_Response>;
  delete_auth_access_token_by_pk?: Maybe<Auth_Access_Token>;
  delete_auth_blacklist?: Maybe<Auth_Blacklist_Mutation_Response>;
  delete_auth_blacklist_by_pk?: Maybe<Auth_Blacklist>;
  delete_auth_third_party?: Maybe<Auth_Third_Party_Mutation_Response>;
  delete_auth_third_party_by_pk?: Maybe<Auth_Third_Party>;
  delete_auth_third_party_user_id?: Maybe<Auth_Third_Party_User_Id_Mutation_Response>;
  delete_auth_third_party_user_id_by_pk?: Maybe<Auth_Third_Party_User_Id>;
  delete_chat_message?: Maybe<Chat_Message_Mutation_Response>;
  delete_chat_message_by_pk?: Maybe<Chat_Message>;
  delete_chat_message_file?: Maybe<Chat_Message_File_Mutation_Response>;
  delete_chat_message_file_by_pk?: Maybe<Chat_Message_File>;
  delete_geo_country?: Maybe<Geo_Country_Mutation_Response>;
  delete_geo_country_by_pk?: Maybe<Geo_Country>;
  delete_geo_country_i18n?: Maybe<Geo_Country_I18n_Mutation_Response>;
  delete_geo_country_i18n_by_pk?: Maybe<Geo_Country_I18n>;
  delete_geo_district?: Maybe<Geo_District_Mutation_Response>;
  delete_geo_district_by_pk?: Maybe<Geo_District>;
  delete_geo_district_i18n?: Maybe<Geo_District_I18n_Mutation_Response>;
  delete_geo_district_i18n_by_pk?: Maybe<Geo_District_I18n>;
  delete_geo_division?: Maybe<Geo_Division_Mutation_Response>;
  delete_geo_division_by_pk?: Maybe<Geo_Division>;
  delete_geo_division_i18n?: Maybe<Geo_Division_I18n_Mutation_Response>;
  delete_geo_division_i18n_by_pk?: Maybe<Geo_Division_I18n>;
  delete_geo_state?: Maybe<Geo_State_Mutation_Response>;
  delete_geo_state_by_pk?: Maybe<Geo_State>;
  delete_geo_state_i18n?: Maybe<Geo_State_I18n_Mutation_Response>;
  delete_geo_state_i18n_by_pk?: Maybe<Geo_State_I18n>;
  delete_geo_sub_district?: Maybe<Geo_Sub_District_Mutation_Response>;
  delete_geo_sub_district_by_pk?: Maybe<Geo_Sub_District>;
  delete_geo_sub_district_i18n?: Maybe<Geo_Sub_District_I18n_Mutation_Response>;
  delete_geo_sub_district_i18n_by_pk?: Maybe<Geo_Sub_District_I18n>;
  delete_misc_language?: Maybe<Misc_Language_Mutation_Response>;
  delete_misc_language_by_pk?: Maybe<Misc_Language>;
  delete_misc_verification?: Maybe<Misc_Verification_Mutation_Response>;
  delete_misc_verification_by_pk?: Maybe<Misc_Verification>;
  delete_misc_verification_type?: Maybe<Misc_Verification_Type_Mutation_Response>;
  delete_misc_verification_type_by_pk?: Maybe<Misc_Verification_Type>;
  delete_notification_base?: Maybe<Notification_Base_Mutation_Response>;
  delete_notification_base_by_pk?: Maybe<Notification_Base>;
  delete_notification_base_i18n?: Maybe<Notification_Base_I18n_Mutation_Response>;
  delete_notification_base_i18n_by_pk?: Maybe<Notification_Base_I18n>;
  delete_notification_link_type?: Maybe<Notification_Link_Type_Mutation_Response>;
  delete_notification_link_type_by_pk?: Maybe<Notification_Link_Type>;
  delete_notification_notification?: Maybe<Notification_Notification_Mutation_Response>;
  delete_notification_notification_by_pk?: Maybe<Notification_Notification>;
  delete_profile_address?: Maybe<Profile_Address_Mutation_Response>;
  delete_profile_address_by_pk?: Maybe<Profile_Address>;
  delete_profile_address_type?: Maybe<Profile_Address_Type_Mutation_Response>;
  delete_profile_address_type_by_pk?: Maybe<Profile_Address_Type>;
  delete_profile_gender?: Maybe<Profile_Gender_Mutation_Response>;
  delete_profile_gender_by_pk?: Maybe<Profile_Gender>;
  delete_profile_profile?: Maybe<Profile_Profile_Mutation_Response>;
  delete_profile_profile_by_pk?: Maybe<Profile_Profile>;
  delete_sms_message?: Maybe<Sms_Message_Mutation_Response>;
  delete_sms_message_by_pk?: Maybe<Sms_Message>;
  delete_sms_message_status?: Maybe<Sms_Message_Status_Mutation_Response>;
  delete_sms_message_status_by_pk?: Maybe<Sms_Message_Status>;
  delete_sms_template?: Maybe<Sms_Template_Mutation_Response>;
  delete_sms_template_by_pk?: Maybe<Sms_Template>;
  delete_suspension_category?: Maybe<Suspension_Category_Mutation_Response>;
  delete_suspension_category_by_pk?: Maybe<Suspension_Category>;
  delete_suspension_category_reason?: Maybe<Suspension_Category_Reason_Mutation_Response>;
  delete_suspension_category_reason_by_pk?: Maybe<Suspension_Category_Reason>;
  delete_suspension_reason?: Maybe<Suspension_Reason_Mutation_Response>;
  delete_suspension_reason_by_pk?: Maybe<Suspension_Reason>;
  delete_suspension_reason_i18n?: Maybe<Suspension_Reason_I18n_Mutation_Response>;
  delete_suspension_reason_i18n_by_pk?: Maybe<Suspension_Reason_I18n>;
  delete_suspension_state?: Maybe<Suspension_State_Mutation_Response>;
  delete_suspension_state_by_pk?: Maybe<Suspension_State>;
  delete_suspension_state_reason?: Maybe<Suspension_State_Reason_Mutation_Response>;
  delete_suspension_state_reason_by_pk?: Maybe<Suspension_State_Reason>;
  delete_suspension_type?: Maybe<Suspension_Type_Mutation_Response>;
  delete_suspension_type_by_pk?: Maybe<Suspension_Type>;
  delete_user?: Maybe<User_Mutation_Response>;
  delete_user_by_pk?: Maybe<User>;
  delete_user_type?: Maybe<User_Type_Mutation_Response>;
  delete_user_type_by_pk?: Maybe<User_Type>;
  insert_access_control_action?: Maybe<Access_Control_Action_Mutation_Response>;
  insert_access_control_action_one?: Maybe<Access_Control_Action>;
  insert_access_control_content?: Maybe<Access_Control_Content_Mutation_Response>;
  insert_access_control_content_one?: Maybe<Access_Control_Content>;
  insert_access_control_entity?: Maybe<Access_Control_Entity_Mutation_Response>;
  insert_access_control_entity_one?: Maybe<Access_Control_Entity>;
  insert_access_control_log?: Maybe<Access_Control_Log_Mutation_Response>;
  insert_access_control_log_one?: Maybe<Access_Control_Log>;
  insert_access_control_role?: Maybe<Access_Control_Role_Mutation_Response>;
  insert_access_control_role_one?: Maybe<Access_Control_Role>;
  insert_access_control_role_permission?: Maybe<Access_Control_Role_Permission_Mutation_Response>;
  insert_access_control_role_permission_one?: Maybe<Access_Control_Role_Permission>;
  insert_access_control_role_user?: Maybe<Access_Control_Role_User_Mutation_Response>;
  insert_access_control_role_user_one?: Maybe<Access_Control_Role_User>;
  insert_access_control_user_permission?: Maybe<Access_Control_User_Permission_Mutation_Response>;
  insert_access_control_user_permission_one?: Maybe<Access_Control_User_Permission>;
  insert_auth_access_token?: Maybe<Auth_Access_Token_Mutation_Response>;
  insert_auth_access_token_one?: Maybe<Auth_Access_Token>;
  insert_auth_blacklist?: Maybe<Auth_Blacklist_Mutation_Response>;
  insert_auth_blacklist_one?: Maybe<Auth_Blacklist>;
  insert_auth_third_party?: Maybe<Auth_Third_Party_Mutation_Response>;
  insert_auth_third_party_one?: Maybe<Auth_Third_Party>;
  insert_auth_third_party_user_id?: Maybe<Auth_Third_Party_User_Id_Mutation_Response>;
  insert_auth_third_party_user_id_one?: Maybe<Auth_Third_Party_User_Id>;
  insert_chat_message?: Maybe<Chat_Message_Mutation_Response>;
  insert_chat_message_file?: Maybe<Chat_Message_File_Mutation_Response>;
  insert_chat_message_file_one?: Maybe<Chat_Message_File>;
  insert_chat_message_one?: Maybe<Chat_Message>;
  insert_geo_country?: Maybe<Geo_Country_Mutation_Response>;
  insert_geo_country_i18n?: Maybe<Geo_Country_I18n_Mutation_Response>;
  insert_geo_country_i18n_one?: Maybe<Geo_Country_I18n>;
  insert_geo_country_one?: Maybe<Geo_Country>;
  insert_geo_district?: Maybe<Geo_District_Mutation_Response>;
  insert_geo_district_i18n?: Maybe<Geo_District_I18n_Mutation_Response>;
  insert_geo_district_i18n_one?: Maybe<Geo_District_I18n>;
  insert_geo_district_one?: Maybe<Geo_District>;
  insert_geo_division?: Maybe<Geo_Division_Mutation_Response>;
  insert_geo_division_i18n?: Maybe<Geo_Division_I18n_Mutation_Response>;
  insert_geo_division_i18n_one?: Maybe<Geo_Division_I18n>;
  insert_geo_division_one?: Maybe<Geo_Division>;
  insert_geo_state?: Maybe<Geo_State_Mutation_Response>;
  insert_geo_state_i18n?: Maybe<Geo_State_I18n_Mutation_Response>;
  insert_geo_state_i18n_one?: Maybe<Geo_State_I18n>;
  insert_geo_state_one?: Maybe<Geo_State>;
  insert_geo_sub_district?: Maybe<Geo_Sub_District_Mutation_Response>;
  insert_geo_sub_district_i18n?: Maybe<Geo_Sub_District_I18n_Mutation_Response>;
  insert_geo_sub_district_i18n_one?: Maybe<Geo_Sub_District_I18n>;
  insert_geo_sub_district_one?: Maybe<Geo_Sub_District>;
  insert_misc_language?: Maybe<Misc_Language_Mutation_Response>;
  insert_misc_language_one?: Maybe<Misc_Language>;
  insert_misc_verification?: Maybe<Misc_Verification_Mutation_Response>;
  insert_misc_verification_one?: Maybe<Misc_Verification>;
  insert_misc_verification_type?: Maybe<Misc_Verification_Type_Mutation_Response>;
  insert_misc_verification_type_one?: Maybe<Misc_Verification_Type>;
  insert_notification_base?: Maybe<Notification_Base_Mutation_Response>;
  insert_notification_base_i18n?: Maybe<Notification_Base_I18n_Mutation_Response>;
  insert_notification_base_i18n_one?: Maybe<Notification_Base_I18n>;
  insert_notification_base_one?: Maybe<Notification_Base>;
  insert_notification_link_type?: Maybe<Notification_Link_Type_Mutation_Response>;
  insert_notification_link_type_one?: Maybe<Notification_Link_Type>;
  insert_notification_notification?: Maybe<Notification_Notification_Mutation_Response>;
  insert_notification_notification_one?: Maybe<Notification_Notification>;
  insert_profile_address?: Maybe<Profile_Address_Mutation_Response>;
  insert_profile_address_one?: Maybe<Profile_Address>;
  insert_profile_address_type?: Maybe<Profile_Address_Type_Mutation_Response>;
  insert_profile_address_type_one?: Maybe<Profile_Address_Type>;
  insert_profile_gender?: Maybe<Profile_Gender_Mutation_Response>;
  insert_profile_gender_one?: Maybe<Profile_Gender>;
  insert_profile_profile?: Maybe<Profile_Profile_Mutation_Response>;
  insert_profile_profile_one?: Maybe<Profile_Profile>;
  insert_sms_message?: Maybe<Sms_Message_Mutation_Response>;
  insert_sms_message_one?: Maybe<Sms_Message>;
  insert_sms_message_status?: Maybe<Sms_Message_Status_Mutation_Response>;
  insert_sms_message_status_one?: Maybe<Sms_Message_Status>;
  insert_sms_template?: Maybe<Sms_Template_Mutation_Response>;
  insert_sms_template_one?: Maybe<Sms_Template>;
  insert_suspension_category?: Maybe<Suspension_Category_Mutation_Response>;
  insert_suspension_category_one?: Maybe<Suspension_Category>;
  insert_suspension_category_reason?: Maybe<Suspension_Category_Reason_Mutation_Response>;
  insert_suspension_category_reason_one?: Maybe<Suspension_Category_Reason>;
  insert_suspension_reason?: Maybe<Suspension_Reason_Mutation_Response>;
  insert_suspension_reason_i18n?: Maybe<Suspension_Reason_I18n_Mutation_Response>;
  insert_suspension_reason_i18n_one?: Maybe<Suspension_Reason_I18n>;
  insert_suspension_reason_one?: Maybe<Suspension_Reason>;
  insert_suspension_state?: Maybe<Suspension_State_Mutation_Response>;
  insert_suspension_state_one?: Maybe<Suspension_State>;
  insert_suspension_state_reason?: Maybe<Suspension_State_Reason_Mutation_Response>;
  insert_suspension_state_reason_one?: Maybe<Suspension_State_Reason>;
  insert_suspension_type?: Maybe<Suspension_Type_Mutation_Response>;
  insert_suspension_type_one?: Maybe<Suspension_Type>;
  insert_user?: Maybe<User_Mutation_Response>;
  insert_user_one?: Maybe<User>;
  insert_user_type?: Maybe<User_Type_Mutation_Response>;
  insert_user_type_one?: Maybe<User_Type>;
  sms_send?: Maybe<Action_Resp_Bool>;
  update_access_control_action?: Maybe<Access_Control_Action_Mutation_Response>;
  update_access_control_action_by_pk?: Maybe<Access_Control_Action>;
  update_access_control_content?: Maybe<Access_Control_Content_Mutation_Response>;
  update_access_control_content_by_pk?: Maybe<Access_Control_Content>;
  update_access_control_entity?: Maybe<Access_Control_Entity_Mutation_Response>;
  update_access_control_entity_by_pk?: Maybe<Access_Control_Entity>;
  update_access_control_log?: Maybe<Access_Control_Log_Mutation_Response>;
  update_access_control_role?: Maybe<Access_Control_Role_Mutation_Response>;
  update_access_control_role_by_pk?: Maybe<Access_Control_Role>;
  update_access_control_role_permission?: Maybe<Access_Control_Role_Permission_Mutation_Response>;
  update_access_control_role_permission_by_pk?: Maybe<Access_Control_Role_Permission>;
  update_access_control_role_user?: Maybe<Access_Control_Role_User_Mutation_Response>;
  update_access_control_role_user_by_pk?: Maybe<Access_Control_Role_User>;
  update_access_control_user_permission?: Maybe<Access_Control_User_Permission_Mutation_Response>;
  update_access_control_user_permission_by_pk?: Maybe<Access_Control_User_Permission>;
  update_auth_access_token?: Maybe<Auth_Access_Token_Mutation_Response>;
  update_auth_access_token_by_pk?: Maybe<Auth_Access_Token>;
  update_auth_blacklist?: Maybe<Auth_Blacklist_Mutation_Response>;
  update_auth_blacklist_by_pk?: Maybe<Auth_Blacklist>;
  update_auth_third_party?: Maybe<Auth_Third_Party_Mutation_Response>;
  update_auth_third_party_by_pk?: Maybe<Auth_Third_Party>;
  update_auth_third_party_user_id?: Maybe<Auth_Third_Party_User_Id_Mutation_Response>;
  update_auth_third_party_user_id_by_pk?: Maybe<Auth_Third_Party_User_Id>;
  update_chat_message?: Maybe<Chat_Message_Mutation_Response>;
  update_chat_message_by_pk?: Maybe<Chat_Message>;
  update_chat_message_file?: Maybe<Chat_Message_File_Mutation_Response>;
  update_chat_message_file_by_pk?: Maybe<Chat_Message_File>;
  update_geo_country?: Maybe<Geo_Country_Mutation_Response>;
  update_geo_country_by_pk?: Maybe<Geo_Country>;
  update_geo_country_i18n?: Maybe<Geo_Country_I18n_Mutation_Response>;
  update_geo_country_i18n_by_pk?: Maybe<Geo_Country_I18n>;
  update_geo_district?: Maybe<Geo_District_Mutation_Response>;
  update_geo_district_by_pk?: Maybe<Geo_District>;
  update_geo_district_i18n?: Maybe<Geo_District_I18n_Mutation_Response>;
  update_geo_district_i18n_by_pk?: Maybe<Geo_District_I18n>;
  update_geo_division?: Maybe<Geo_Division_Mutation_Response>;
  update_geo_division_by_pk?: Maybe<Geo_Division>;
  update_geo_division_i18n?: Maybe<Geo_Division_I18n_Mutation_Response>;
  update_geo_division_i18n_by_pk?: Maybe<Geo_Division_I18n>;
  update_geo_state?: Maybe<Geo_State_Mutation_Response>;
  update_geo_state_by_pk?: Maybe<Geo_State>;
  update_geo_state_i18n?: Maybe<Geo_State_I18n_Mutation_Response>;
  update_geo_state_i18n_by_pk?: Maybe<Geo_State_I18n>;
  update_geo_sub_district?: Maybe<Geo_Sub_District_Mutation_Response>;
  update_geo_sub_district_by_pk?: Maybe<Geo_Sub_District>;
  update_geo_sub_district_i18n?: Maybe<Geo_Sub_District_I18n_Mutation_Response>;
  update_geo_sub_district_i18n_by_pk?: Maybe<Geo_Sub_District_I18n>;
  update_misc_language?: Maybe<Misc_Language_Mutation_Response>;
  update_misc_language_by_pk?: Maybe<Misc_Language>;
  update_misc_verification?: Maybe<Misc_Verification_Mutation_Response>;
  update_misc_verification_by_pk?: Maybe<Misc_Verification>;
  update_misc_verification_type?: Maybe<Misc_Verification_Type_Mutation_Response>;
  update_misc_verification_type_by_pk?: Maybe<Misc_Verification_Type>;
  update_notification_base?: Maybe<Notification_Base_Mutation_Response>;
  update_notification_base_by_pk?: Maybe<Notification_Base>;
  update_notification_base_i18n?: Maybe<Notification_Base_I18n_Mutation_Response>;
  update_notification_base_i18n_by_pk?: Maybe<Notification_Base_I18n>;
  update_notification_link_type?: Maybe<Notification_Link_Type_Mutation_Response>;
  update_notification_link_type_by_pk?: Maybe<Notification_Link_Type>;
  update_notification_notification?: Maybe<Notification_Notification_Mutation_Response>;
  update_notification_notification_by_pk?: Maybe<Notification_Notification>;
  update_profile_address?: Maybe<Profile_Address_Mutation_Response>;
  update_profile_address_by_pk?: Maybe<Profile_Address>;
  update_profile_address_type?: Maybe<Profile_Address_Type_Mutation_Response>;
  update_profile_address_type_by_pk?: Maybe<Profile_Address_Type>;
  update_profile_gender?: Maybe<Profile_Gender_Mutation_Response>;
  update_profile_gender_by_pk?: Maybe<Profile_Gender>;
  update_profile_profile?: Maybe<Profile_Profile_Mutation_Response>;
  update_profile_profile_by_pk?: Maybe<Profile_Profile>;
  update_sms_message?: Maybe<Sms_Message_Mutation_Response>;
  update_sms_message_by_pk?: Maybe<Sms_Message>;
  update_sms_message_status?: Maybe<Sms_Message_Status_Mutation_Response>;
  update_sms_message_status_by_pk?: Maybe<Sms_Message_Status>;
  update_sms_template?: Maybe<Sms_Template_Mutation_Response>;
  update_sms_template_by_pk?: Maybe<Sms_Template>;
  update_suspension_category?: Maybe<Suspension_Category_Mutation_Response>;
  update_suspension_category_by_pk?: Maybe<Suspension_Category>;
  update_suspension_category_reason?: Maybe<Suspension_Category_Reason_Mutation_Response>;
  update_suspension_category_reason_by_pk?: Maybe<Suspension_Category_Reason>;
  update_suspension_reason?: Maybe<Suspension_Reason_Mutation_Response>;
  update_suspension_reason_by_pk?: Maybe<Suspension_Reason>;
  update_suspension_reason_i18n?: Maybe<Suspension_Reason_I18n_Mutation_Response>;
  update_suspension_reason_i18n_by_pk?: Maybe<Suspension_Reason_I18n>;
  update_suspension_state?: Maybe<Suspension_State_Mutation_Response>;
  update_suspension_state_by_pk?: Maybe<Suspension_State>;
  update_suspension_state_reason?: Maybe<Suspension_State_Reason_Mutation_Response>;
  update_suspension_state_reason_by_pk?: Maybe<Suspension_State_Reason>;
  update_suspension_type?: Maybe<Suspension_Type_Mutation_Response>;
  update_suspension_type_by_pk?: Maybe<Suspension_Type>;
  update_user?: Maybe<User_Mutation_Response>;
  update_user_by_pk?: Maybe<User>;
  update_user_type?: Maybe<User_Type_Mutation_Response>;
  update_user_type_by_pk?: Maybe<User_Type>;
  verification?: Maybe<Action_Resp_Bool>;
  verification_edit?: Maybe<Action_Resp_Bool>;
  verification_resend?: Maybe<Action_Resp_Bool>;
};


export type Mutation_RootAuth_Blacklist_TokenArgs = {
  jti: Scalars['Int'];
};


export type Mutation_RootAuth_Create_TokenArgs = {
  expiresAt?: Maybe<Scalars['date']>;
};


export type Mutation_RootAuth_LoginArgs = {
  payload: Auth_Login_Input;
};


export type Mutation_RootAuth_Login_GoogleArgs = {
  token: Scalars['String'];
};


export type Mutation_RootChange_EmailArgs = {
  email: Scalars['String'];
};


export type Mutation_RootChange_MobileArgs = {
  mobile: Scalars['String'];
};


export type Mutation_RootChange_PasswordArgs = {
  payload: Change_Password_Input;
};


export type Mutation_RootChange_Reset_PasswordArgs = {
  payload: Change_Reset_Password_Input;
};


export type Mutation_RootCreate_AccountArgs = {
  payload?: Maybe<Register_Input>;
};


export type Mutation_RootDelete_Access_Control_ActionArgs = {
  where: Access_Control_Action_Bool_Exp;
};


export type Mutation_RootDelete_Access_Control_Action_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Access_Control_ContentArgs = {
  where: Access_Control_Content_Bool_Exp;
};


export type Mutation_RootDelete_Access_Control_Content_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Access_Control_EntityArgs = {
  where: Access_Control_Entity_Bool_Exp;
};


export type Mutation_RootDelete_Access_Control_Entity_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Access_Control_LogArgs = {
  where: Access_Control_Log_Bool_Exp;
};


export type Mutation_RootDelete_Access_Control_RoleArgs = {
  where: Access_Control_Role_Bool_Exp;
};


export type Mutation_RootDelete_Access_Control_Role_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Access_Control_Role_PermissionArgs = {
  where: Access_Control_Role_Permission_Bool_Exp;
};


export type Mutation_RootDelete_Access_Control_Role_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Access_Control_Role_UserArgs = {
  where: Access_Control_Role_User_Bool_Exp;
};


export type Mutation_RootDelete_Access_Control_Role_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Access_Control_User_PermissionArgs = {
  where: Access_Control_User_Permission_Bool_Exp;
};


export type Mutation_RootDelete_Access_Control_User_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_AccountArgs = {
  payload: User_Delete_Account_Input;
};


export type Mutation_RootDelete_Auth_Access_TokenArgs = {
  where: Auth_Access_Token_Bool_Exp;
};


export type Mutation_RootDelete_Auth_Access_Token_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Auth_BlacklistArgs = {
  where: Auth_Blacklist_Bool_Exp;
};


export type Mutation_RootDelete_Auth_Blacklist_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Auth_Third_PartyArgs = {
  where: Auth_Third_Party_Bool_Exp;
};


export type Mutation_RootDelete_Auth_Third_Party_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Auth_Third_Party_User_IdArgs = {
  where: Auth_Third_Party_User_Id_Bool_Exp;
};


export type Mutation_RootDelete_Auth_Third_Party_User_Id_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Chat_MessageArgs = {
  where: Chat_Message_Bool_Exp;
};


export type Mutation_RootDelete_Chat_Message_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Chat_Message_FileArgs = {
  where: Chat_Message_File_Bool_Exp;
};


export type Mutation_RootDelete_Chat_Message_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Geo_CountryArgs = {
  where: Geo_Country_Bool_Exp;
};


export type Mutation_RootDelete_Geo_Country_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_Country_I18nArgs = {
  where: Geo_Country_I18n_Bool_Exp;
};


export type Mutation_RootDelete_Geo_Country_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_DistrictArgs = {
  where: Geo_District_Bool_Exp;
};


export type Mutation_RootDelete_Geo_District_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_District_I18nArgs = {
  where: Geo_District_I18n_Bool_Exp;
};


export type Mutation_RootDelete_Geo_District_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_DivisionArgs = {
  where: Geo_Division_Bool_Exp;
};


export type Mutation_RootDelete_Geo_Division_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_Division_I18nArgs = {
  where: Geo_Division_I18n_Bool_Exp;
};


export type Mutation_RootDelete_Geo_Division_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_StateArgs = {
  where: Geo_State_Bool_Exp;
};


export type Mutation_RootDelete_Geo_State_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_State_I18nArgs = {
  where: Geo_State_I18n_Bool_Exp;
};


export type Mutation_RootDelete_Geo_State_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_Sub_DistrictArgs = {
  where: Geo_Sub_District_Bool_Exp;
};


export type Mutation_RootDelete_Geo_Sub_District_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Geo_Sub_District_I18nArgs = {
  where: Geo_Sub_District_I18n_Bool_Exp;
};


export type Mutation_RootDelete_Geo_Sub_District_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Misc_LanguageArgs = {
  where: Misc_Language_Bool_Exp;
};


export type Mutation_RootDelete_Misc_Language_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Misc_VerificationArgs = {
  where: Misc_Verification_Bool_Exp;
};


export type Mutation_RootDelete_Misc_Verification_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Misc_Verification_TypeArgs = {
  where: Misc_Verification_Type_Bool_Exp;
};


export type Mutation_RootDelete_Misc_Verification_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Notification_BaseArgs = {
  where: Notification_Base_Bool_Exp;
};


export type Mutation_RootDelete_Notification_Base_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Notification_Base_I18nArgs = {
  where: Notification_Base_I18n_Bool_Exp;
};


export type Mutation_RootDelete_Notification_Base_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Notification_Link_TypeArgs = {
  where: Notification_Link_Type_Bool_Exp;
};


export type Mutation_RootDelete_Notification_Link_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Notification_NotificationArgs = {
  where: Notification_Notification_Bool_Exp;
};


export type Mutation_RootDelete_Notification_Notification_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Profile_AddressArgs = {
  where: Profile_Address_Bool_Exp;
};


export type Mutation_RootDelete_Profile_Address_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Profile_Address_TypeArgs = {
  where: Profile_Address_Type_Bool_Exp;
};


export type Mutation_RootDelete_Profile_Address_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Profile_GenderArgs = {
  where: Profile_Gender_Bool_Exp;
};


export type Mutation_RootDelete_Profile_Gender_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Profile_ProfileArgs = {
  where: Profile_Profile_Bool_Exp;
};


export type Mutation_RootDelete_Profile_Profile_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Sms_MessageArgs = {
  where: Sms_Message_Bool_Exp;
};


export type Mutation_RootDelete_Sms_Message_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Sms_Message_StatusArgs = {
  where: Sms_Message_Status_Bool_Exp;
};


export type Mutation_RootDelete_Sms_Message_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_Sms_TemplateArgs = {
  where: Sms_Template_Bool_Exp;
};


export type Mutation_RootDelete_Sms_Template_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Suspension_CategoryArgs = {
  where: Suspension_Category_Bool_Exp;
};


export type Mutation_RootDelete_Suspension_Category_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Suspension_Category_ReasonArgs = {
  where: Suspension_Category_Reason_Bool_Exp;
};


export type Mutation_RootDelete_Suspension_Category_Reason_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Suspension_ReasonArgs = {
  where: Suspension_Reason_Bool_Exp;
};


export type Mutation_RootDelete_Suspension_Reason_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Suspension_Reason_I18nArgs = {
  where: Suspension_Reason_I18n_Bool_Exp;
};


export type Mutation_RootDelete_Suspension_Reason_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Mutation_RootDelete_Suspension_StateArgs = {
  where: Suspension_State_Bool_Exp;
};


export type Mutation_RootDelete_Suspension_State_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Suspension_State_ReasonArgs = {
  where: Suspension_State_Reason_Bool_Exp;
};


export type Mutation_RootDelete_Suspension_State_Reason_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_Suspension_TypeArgs = {
  where: Suspension_Type_Bool_Exp;
};


export type Mutation_RootDelete_Suspension_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_User_TypeArgs = {
  where: User_Type_Bool_Exp;
};


export type Mutation_RootDelete_User_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Mutation_RootInsert_Access_Control_ActionArgs = {
  objects: Array<Access_Control_Action_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Action_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_Action_OneArgs = {
  object: Access_Control_Action_Insert_Input;
  on_conflict?: Maybe<Access_Control_Action_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_ContentArgs = {
  objects: Array<Access_Control_Content_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Content_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_Content_OneArgs = {
  object: Access_Control_Content_Insert_Input;
  on_conflict?: Maybe<Access_Control_Content_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_EntityArgs = {
  objects: Array<Access_Control_Entity_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Entity_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_Entity_OneArgs = {
  object: Access_Control_Entity_Insert_Input;
  on_conflict?: Maybe<Access_Control_Entity_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_LogArgs = {
  objects: Array<Access_Control_Log_Insert_Input>;
};


export type Mutation_RootInsert_Access_Control_Log_OneArgs = {
  object: Access_Control_Log_Insert_Input;
};


export type Mutation_RootInsert_Access_Control_RoleArgs = {
  objects: Array<Access_Control_Role_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Role_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_Role_OneArgs = {
  object: Access_Control_Role_Insert_Input;
  on_conflict?: Maybe<Access_Control_Role_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_Role_PermissionArgs = {
  objects: Array<Access_Control_Role_Permission_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Role_Permission_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_Role_Permission_OneArgs = {
  object: Access_Control_Role_Permission_Insert_Input;
  on_conflict?: Maybe<Access_Control_Role_Permission_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_Role_UserArgs = {
  objects: Array<Access_Control_Role_User_Insert_Input>;
  on_conflict?: Maybe<Access_Control_Role_User_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_Role_User_OneArgs = {
  object: Access_Control_Role_User_Insert_Input;
  on_conflict?: Maybe<Access_Control_Role_User_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_User_PermissionArgs = {
  objects: Array<Access_Control_User_Permission_Insert_Input>;
  on_conflict?: Maybe<Access_Control_User_Permission_On_Conflict>;
};


export type Mutation_RootInsert_Access_Control_User_Permission_OneArgs = {
  object: Access_Control_User_Permission_Insert_Input;
  on_conflict?: Maybe<Access_Control_User_Permission_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Access_TokenArgs = {
  objects: Array<Auth_Access_Token_Insert_Input>;
  on_conflict?: Maybe<Auth_Access_Token_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Access_Token_OneArgs = {
  object: Auth_Access_Token_Insert_Input;
  on_conflict?: Maybe<Auth_Access_Token_On_Conflict>;
};


export type Mutation_RootInsert_Auth_BlacklistArgs = {
  objects: Array<Auth_Blacklist_Insert_Input>;
  on_conflict?: Maybe<Auth_Blacklist_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Blacklist_OneArgs = {
  object: Auth_Blacklist_Insert_Input;
  on_conflict?: Maybe<Auth_Blacklist_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Third_PartyArgs = {
  objects: Array<Auth_Third_Party_Insert_Input>;
  on_conflict?: Maybe<Auth_Third_Party_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Third_Party_OneArgs = {
  object: Auth_Third_Party_Insert_Input;
  on_conflict?: Maybe<Auth_Third_Party_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Third_Party_User_IdArgs = {
  objects: Array<Auth_Third_Party_User_Id_Insert_Input>;
  on_conflict?: Maybe<Auth_Third_Party_User_Id_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Third_Party_User_Id_OneArgs = {
  object: Auth_Third_Party_User_Id_Insert_Input;
  on_conflict?: Maybe<Auth_Third_Party_User_Id_On_Conflict>;
};


export type Mutation_RootInsert_Chat_MessageArgs = {
  objects: Array<Chat_Message_Insert_Input>;
  on_conflict?: Maybe<Chat_Message_On_Conflict>;
};


export type Mutation_RootInsert_Chat_Message_FileArgs = {
  objects: Array<Chat_Message_File_Insert_Input>;
  on_conflict?: Maybe<Chat_Message_File_On_Conflict>;
};


export type Mutation_RootInsert_Chat_Message_File_OneArgs = {
  object: Chat_Message_File_Insert_Input;
  on_conflict?: Maybe<Chat_Message_File_On_Conflict>;
};


export type Mutation_RootInsert_Chat_Message_OneArgs = {
  object: Chat_Message_Insert_Input;
  on_conflict?: Maybe<Chat_Message_On_Conflict>;
};


export type Mutation_RootInsert_Geo_CountryArgs = {
  objects: Array<Geo_Country_Insert_Input>;
  on_conflict?: Maybe<Geo_Country_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Country_I18nArgs = {
  objects: Array<Geo_Country_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_Country_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Country_I18n_OneArgs = {
  object: Geo_Country_I18n_Insert_Input;
  on_conflict?: Maybe<Geo_Country_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Country_OneArgs = {
  object: Geo_Country_Insert_Input;
  on_conflict?: Maybe<Geo_Country_On_Conflict>;
};


export type Mutation_RootInsert_Geo_DistrictArgs = {
  objects: Array<Geo_District_Insert_Input>;
  on_conflict?: Maybe<Geo_District_On_Conflict>;
};


export type Mutation_RootInsert_Geo_District_I18nArgs = {
  objects: Array<Geo_District_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_District_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_District_I18n_OneArgs = {
  object: Geo_District_I18n_Insert_Input;
  on_conflict?: Maybe<Geo_District_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_District_OneArgs = {
  object: Geo_District_Insert_Input;
  on_conflict?: Maybe<Geo_District_On_Conflict>;
};


export type Mutation_RootInsert_Geo_DivisionArgs = {
  objects: Array<Geo_Division_Insert_Input>;
  on_conflict?: Maybe<Geo_Division_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Division_I18nArgs = {
  objects: Array<Geo_Division_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_Division_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Division_I18n_OneArgs = {
  object: Geo_Division_I18n_Insert_Input;
  on_conflict?: Maybe<Geo_Division_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Division_OneArgs = {
  object: Geo_Division_Insert_Input;
  on_conflict?: Maybe<Geo_Division_On_Conflict>;
};


export type Mutation_RootInsert_Geo_StateArgs = {
  objects: Array<Geo_State_Insert_Input>;
  on_conflict?: Maybe<Geo_State_On_Conflict>;
};


export type Mutation_RootInsert_Geo_State_I18nArgs = {
  objects: Array<Geo_State_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_State_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_State_I18n_OneArgs = {
  object: Geo_State_I18n_Insert_Input;
  on_conflict?: Maybe<Geo_State_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_State_OneArgs = {
  object: Geo_State_Insert_Input;
  on_conflict?: Maybe<Geo_State_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Sub_DistrictArgs = {
  objects: Array<Geo_Sub_District_Insert_Input>;
  on_conflict?: Maybe<Geo_Sub_District_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Sub_District_I18nArgs = {
  objects: Array<Geo_Sub_District_I18n_Insert_Input>;
  on_conflict?: Maybe<Geo_Sub_District_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Sub_District_I18n_OneArgs = {
  object: Geo_Sub_District_I18n_Insert_Input;
  on_conflict?: Maybe<Geo_Sub_District_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Geo_Sub_District_OneArgs = {
  object: Geo_Sub_District_Insert_Input;
  on_conflict?: Maybe<Geo_Sub_District_On_Conflict>;
};


export type Mutation_RootInsert_Misc_LanguageArgs = {
  objects: Array<Misc_Language_Insert_Input>;
  on_conflict?: Maybe<Misc_Language_On_Conflict>;
};


export type Mutation_RootInsert_Misc_Language_OneArgs = {
  object: Misc_Language_Insert_Input;
  on_conflict?: Maybe<Misc_Language_On_Conflict>;
};


export type Mutation_RootInsert_Misc_VerificationArgs = {
  objects: Array<Misc_Verification_Insert_Input>;
  on_conflict?: Maybe<Misc_Verification_On_Conflict>;
};


export type Mutation_RootInsert_Misc_Verification_OneArgs = {
  object: Misc_Verification_Insert_Input;
  on_conflict?: Maybe<Misc_Verification_On_Conflict>;
};


export type Mutation_RootInsert_Misc_Verification_TypeArgs = {
  objects: Array<Misc_Verification_Type_Insert_Input>;
  on_conflict?: Maybe<Misc_Verification_Type_On_Conflict>;
};


export type Mutation_RootInsert_Misc_Verification_Type_OneArgs = {
  object: Misc_Verification_Type_Insert_Input;
  on_conflict?: Maybe<Misc_Verification_Type_On_Conflict>;
};


export type Mutation_RootInsert_Notification_BaseArgs = {
  objects: Array<Notification_Base_Insert_Input>;
  on_conflict?: Maybe<Notification_Base_On_Conflict>;
};


export type Mutation_RootInsert_Notification_Base_I18nArgs = {
  objects: Array<Notification_Base_I18n_Insert_Input>;
  on_conflict?: Maybe<Notification_Base_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Notification_Base_I18n_OneArgs = {
  object: Notification_Base_I18n_Insert_Input;
  on_conflict?: Maybe<Notification_Base_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Notification_Base_OneArgs = {
  object: Notification_Base_Insert_Input;
  on_conflict?: Maybe<Notification_Base_On_Conflict>;
};


export type Mutation_RootInsert_Notification_Link_TypeArgs = {
  objects: Array<Notification_Link_Type_Insert_Input>;
  on_conflict?: Maybe<Notification_Link_Type_On_Conflict>;
};


export type Mutation_RootInsert_Notification_Link_Type_OneArgs = {
  object: Notification_Link_Type_Insert_Input;
  on_conflict?: Maybe<Notification_Link_Type_On_Conflict>;
};


export type Mutation_RootInsert_Notification_NotificationArgs = {
  objects: Array<Notification_Notification_Insert_Input>;
  on_conflict?: Maybe<Notification_Notification_On_Conflict>;
};


export type Mutation_RootInsert_Notification_Notification_OneArgs = {
  object: Notification_Notification_Insert_Input;
  on_conflict?: Maybe<Notification_Notification_On_Conflict>;
};


export type Mutation_RootInsert_Profile_AddressArgs = {
  objects: Array<Profile_Address_Insert_Input>;
  on_conflict?: Maybe<Profile_Address_On_Conflict>;
};


export type Mutation_RootInsert_Profile_Address_OneArgs = {
  object: Profile_Address_Insert_Input;
  on_conflict?: Maybe<Profile_Address_On_Conflict>;
};


export type Mutation_RootInsert_Profile_Address_TypeArgs = {
  objects: Array<Profile_Address_Type_Insert_Input>;
  on_conflict?: Maybe<Profile_Address_Type_On_Conflict>;
};


export type Mutation_RootInsert_Profile_Address_Type_OneArgs = {
  object: Profile_Address_Type_Insert_Input;
  on_conflict?: Maybe<Profile_Address_Type_On_Conflict>;
};


export type Mutation_RootInsert_Profile_GenderArgs = {
  objects: Array<Profile_Gender_Insert_Input>;
  on_conflict?: Maybe<Profile_Gender_On_Conflict>;
};


export type Mutation_RootInsert_Profile_Gender_OneArgs = {
  object: Profile_Gender_Insert_Input;
  on_conflict?: Maybe<Profile_Gender_On_Conflict>;
};


export type Mutation_RootInsert_Profile_ProfileArgs = {
  objects: Array<Profile_Profile_Insert_Input>;
  on_conflict?: Maybe<Profile_Profile_On_Conflict>;
};


export type Mutation_RootInsert_Profile_Profile_OneArgs = {
  object: Profile_Profile_Insert_Input;
  on_conflict?: Maybe<Profile_Profile_On_Conflict>;
};


export type Mutation_RootInsert_Sms_MessageArgs = {
  objects: Array<Sms_Message_Insert_Input>;
  on_conflict?: Maybe<Sms_Message_On_Conflict>;
};


export type Mutation_RootInsert_Sms_Message_OneArgs = {
  object: Sms_Message_Insert_Input;
  on_conflict?: Maybe<Sms_Message_On_Conflict>;
};


export type Mutation_RootInsert_Sms_Message_StatusArgs = {
  objects: Array<Sms_Message_Status_Insert_Input>;
  on_conflict?: Maybe<Sms_Message_Status_On_Conflict>;
};


export type Mutation_RootInsert_Sms_Message_Status_OneArgs = {
  object: Sms_Message_Status_Insert_Input;
  on_conflict?: Maybe<Sms_Message_Status_On_Conflict>;
};


export type Mutation_RootInsert_Sms_TemplateArgs = {
  objects: Array<Sms_Template_Insert_Input>;
  on_conflict?: Maybe<Sms_Template_On_Conflict>;
};


export type Mutation_RootInsert_Sms_Template_OneArgs = {
  object: Sms_Template_Insert_Input;
  on_conflict?: Maybe<Sms_Template_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_CategoryArgs = {
  objects: Array<Suspension_Category_Insert_Input>;
  on_conflict?: Maybe<Suspension_Category_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_Category_OneArgs = {
  object: Suspension_Category_Insert_Input;
  on_conflict?: Maybe<Suspension_Category_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_Category_ReasonArgs = {
  objects: Array<Suspension_Category_Reason_Insert_Input>;
  on_conflict?: Maybe<Suspension_Category_Reason_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_Category_Reason_OneArgs = {
  object: Suspension_Category_Reason_Insert_Input;
  on_conflict?: Maybe<Suspension_Category_Reason_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_ReasonArgs = {
  objects: Array<Suspension_Reason_Insert_Input>;
  on_conflict?: Maybe<Suspension_Reason_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_Reason_I18nArgs = {
  objects: Array<Suspension_Reason_I18n_Insert_Input>;
  on_conflict?: Maybe<Suspension_Reason_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_Reason_I18n_OneArgs = {
  object: Suspension_Reason_I18n_Insert_Input;
  on_conflict?: Maybe<Suspension_Reason_I18n_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_Reason_OneArgs = {
  object: Suspension_Reason_Insert_Input;
  on_conflict?: Maybe<Suspension_Reason_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_StateArgs = {
  objects: Array<Suspension_State_Insert_Input>;
  on_conflict?: Maybe<Suspension_State_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_State_OneArgs = {
  object: Suspension_State_Insert_Input;
  on_conflict?: Maybe<Suspension_State_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_State_ReasonArgs = {
  objects: Array<Suspension_State_Reason_Insert_Input>;
  on_conflict?: Maybe<Suspension_State_Reason_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_State_Reason_OneArgs = {
  object: Suspension_State_Reason_Insert_Input;
  on_conflict?: Maybe<Suspension_State_Reason_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_TypeArgs = {
  objects: Array<Suspension_Type_Insert_Input>;
  on_conflict?: Maybe<Suspension_Type_On_Conflict>;
};


export type Mutation_RootInsert_Suspension_Type_OneArgs = {
  object: Suspension_Type_Insert_Input;
  on_conflict?: Maybe<Suspension_Type_On_Conflict>;
};


export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootInsert_User_TypeArgs = {
  objects: Array<User_Type_Insert_Input>;
  on_conflict?: Maybe<User_Type_On_Conflict>;
};


export type Mutation_RootInsert_User_Type_OneArgs = {
  object: User_Type_Insert_Input;
  on_conflict?: Maybe<User_Type_On_Conflict>;
};


export type Mutation_RootSms_SendArgs = {
  payload?: Maybe<Sms_Send_Input>;
};


export type Mutation_RootUpdate_Access_Control_ActionArgs = {
  _set?: Maybe<Access_Control_Action_Set_Input>;
  where: Access_Control_Action_Bool_Exp;
};


export type Mutation_RootUpdate_Access_Control_Action_By_PkArgs = {
  _set?: Maybe<Access_Control_Action_Set_Input>;
  pk_columns: Access_Control_Action_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Access_Control_ContentArgs = {
  _inc?: Maybe<Access_Control_Content_Inc_Input>;
  _set?: Maybe<Access_Control_Content_Set_Input>;
  where: Access_Control_Content_Bool_Exp;
};


export type Mutation_RootUpdate_Access_Control_Content_By_PkArgs = {
  _inc?: Maybe<Access_Control_Content_Inc_Input>;
  _set?: Maybe<Access_Control_Content_Set_Input>;
  pk_columns: Access_Control_Content_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Access_Control_EntityArgs = {
  _set?: Maybe<Access_Control_Entity_Set_Input>;
  where: Access_Control_Entity_Bool_Exp;
};


export type Mutation_RootUpdate_Access_Control_Entity_By_PkArgs = {
  _set?: Maybe<Access_Control_Entity_Set_Input>;
  pk_columns: Access_Control_Entity_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Access_Control_LogArgs = {
  _inc?: Maybe<Access_Control_Log_Inc_Input>;
  _set?: Maybe<Access_Control_Log_Set_Input>;
  where: Access_Control_Log_Bool_Exp;
};


export type Mutation_RootUpdate_Access_Control_RoleArgs = {
  _inc?: Maybe<Access_Control_Role_Inc_Input>;
  _set?: Maybe<Access_Control_Role_Set_Input>;
  where: Access_Control_Role_Bool_Exp;
};


export type Mutation_RootUpdate_Access_Control_Role_By_PkArgs = {
  _inc?: Maybe<Access_Control_Role_Inc_Input>;
  _set?: Maybe<Access_Control_Role_Set_Input>;
  pk_columns: Access_Control_Role_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Access_Control_Role_PermissionArgs = {
  _inc?: Maybe<Access_Control_Role_Permission_Inc_Input>;
  _set?: Maybe<Access_Control_Role_Permission_Set_Input>;
  where: Access_Control_Role_Permission_Bool_Exp;
};


export type Mutation_RootUpdate_Access_Control_Role_Permission_By_PkArgs = {
  _inc?: Maybe<Access_Control_Role_Permission_Inc_Input>;
  _set?: Maybe<Access_Control_Role_Permission_Set_Input>;
  pk_columns: Access_Control_Role_Permission_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Access_Control_Role_UserArgs = {
  _inc?: Maybe<Access_Control_Role_User_Inc_Input>;
  _set?: Maybe<Access_Control_Role_User_Set_Input>;
  where: Access_Control_Role_User_Bool_Exp;
};


export type Mutation_RootUpdate_Access_Control_Role_User_By_PkArgs = {
  _inc?: Maybe<Access_Control_Role_User_Inc_Input>;
  _set?: Maybe<Access_Control_Role_User_Set_Input>;
  pk_columns: Access_Control_Role_User_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Access_Control_User_PermissionArgs = {
  _inc?: Maybe<Access_Control_User_Permission_Inc_Input>;
  _set?: Maybe<Access_Control_User_Permission_Set_Input>;
  where: Access_Control_User_Permission_Bool_Exp;
};


export type Mutation_RootUpdate_Access_Control_User_Permission_By_PkArgs = {
  _inc?: Maybe<Access_Control_User_Permission_Inc_Input>;
  _set?: Maybe<Access_Control_User_Permission_Set_Input>;
  pk_columns: Access_Control_User_Permission_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Auth_Access_TokenArgs = {
  _inc?: Maybe<Auth_Access_Token_Inc_Input>;
  _set?: Maybe<Auth_Access_Token_Set_Input>;
  where: Auth_Access_Token_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_Access_Token_By_PkArgs = {
  _inc?: Maybe<Auth_Access_Token_Inc_Input>;
  _set?: Maybe<Auth_Access_Token_Set_Input>;
  pk_columns: Auth_Access_Token_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Auth_BlacklistArgs = {
  _inc?: Maybe<Auth_Blacklist_Inc_Input>;
  _set?: Maybe<Auth_Blacklist_Set_Input>;
  where: Auth_Blacklist_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_Blacklist_By_PkArgs = {
  _inc?: Maybe<Auth_Blacklist_Inc_Input>;
  _set?: Maybe<Auth_Blacklist_Set_Input>;
  pk_columns: Auth_Blacklist_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Auth_Third_PartyArgs = {
  _inc?: Maybe<Auth_Third_Party_Inc_Input>;
  _set?: Maybe<Auth_Third_Party_Set_Input>;
  where: Auth_Third_Party_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_Third_Party_By_PkArgs = {
  _inc?: Maybe<Auth_Third_Party_Inc_Input>;
  _set?: Maybe<Auth_Third_Party_Set_Input>;
  pk_columns: Auth_Third_Party_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Auth_Third_Party_User_IdArgs = {
  _inc?: Maybe<Auth_Third_Party_User_Id_Inc_Input>;
  _set?: Maybe<Auth_Third_Party_User_Id_Set_Input>;
  where: Auth_Third_Party_User_Id_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_Third_Party_User_Id_By_PkArgs = {
  _inc?: Maybe<Auth_Third_Party_User_Id_Inc_Input>;
  _set?: Maybe<Auth_Third_Party_User_Id_Set_Input>;
  pk_columns: Auth_Third_Party_User_Id_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Chat_MessageArgs = {
  _inc?: Maybe<Chat_Message_Inc_Input>;
  _set?: Maybe<Chat_Message_Set_Input>;
  where: Chat_Message_Bool_Exp;
};


export type Mutation_RootUpdate_Chat_Message_By_PkArgs = {
  _inc?: Maybe<Chat_Message_Inc_Input>;
  _set?: Maybe<Chat_Message_Set_Input>;
  pk_columns: Chat_Message_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Chat_Message_FileArgs = {
  _inc?: Maybe<Chat_Message_File_Inc_Input>;
  _set?: Maybe<Chat_Message_File_Set_Input>;
  where: Chat_Message_File_Bool_Exp;
};


export type Mutation_RootUpdate_Chat_Message_File_By_PkArgs = {
  _inc?: Maybe<Chat_Message_File_Inc_Input>;
  _set?: Maybe<Chat_Message_File_Set_Input>;
  pk_columns: Chat_Message_File_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_CountryArgs = {
  _inc?: Maybe<Geo_Country_Inc_Input>;
  _set?: Maybe<Geo_Country_Set_Input>;
  where: Geo_Country_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_Country_By_PkArgs = {
  _inc?: Maybe<Geo_Country_Inc_Input>;
  _set?: Maybe<Geo_Country_Set_Input>;
  pk_columns: Geo_Country_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_Country_I18nArgs = {
  _inc?: Maybe<Geo_Country_I18n_Inc_Input>;
  _set?: Maybe<Geo_Country_I18n_Set_Input>;
  where: Geo_Country_I18n_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_Country_I18n_By_PkArgs = {
  _inc?: Maybe<Geo_Country_I18n_Inc_Input>;
  _set?: Maybe<Geo_Country_I18n_Set_Input>;
  pk_columns: Geo_Country_I18n_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_DistrictArgs = {
  _inc?: Maybe<Geo_District_Inc_Input>;
  _set?: Maybe<Geo_District_Set_Input>;
  where: Geo_District_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_District_By_PkArgs = {
  _inc?: Maybe<Geo_District_Inc_Input>;
  _set?: Maybe<Geo_District_Set_Input>;
  pk_columns: Geo_District_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_District_I18nArgs = {
  _inc?: Maybe<Geo_District_I18n_Inc_Input>;
  _set?: Maybe<Geo_District_I18n_Set_Input>;
  where: Geo_District_I18n_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_District_I18n_By_PkArgs = {
  _inc?: Maybe<Geo_District_I18n_Inc_Input>;
  _set?: Maybe<Geo_District_I18n_Set_Input>;
  pk_columns: Geo_District_I18n_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_DivisionArgs = {
  _inc?: Maybe<Geo_Division_Inc_Input>;
  _set?: Maybe<Geo_Division_Set_Input>;
  where: Geo_Division_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_Division_By_PkArgs = {
  _inc?: Maybe<Geo_Division_Inc_Input>;
  _set?: Maybe<Geo_Division_Set_Input>;
  pk_columns: Geo_Division_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_Division_I18nArgs = {
  _inc?: Maybe<Geo_Division_I18n_Inc_Input>;
  _set?: Maybe<Geo_Division_I18n_Set_Input>;
  where: Geo_Division_I18n_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_Division_I18n_By_PkArgs = {
  _inc?: Maybe<Geo_Division_I18n_Inc_Input>;
  _set?: Maybe<Geo_Division_I18n_Set_Input>;
  pk_columns: Geo_Division_I18n_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_StateArgs = {
  _inc?: Maybe<Geo_State_Inc_Input>;
  _set?: Maybe<Geo_State_Set_Input>;
  where: Geo_State_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_State_By_PkArgs = {
  _inc?: Maybe<Geo_State_Inc_Input>;
  _set?: Maybe<Geo_State_Set_Input>;
  pk_columns: Geo_State_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_State_I18nArgs = {
  _inc?: Maybe<Geo_State_I18n_Inc_Input>;
  _set?: Maybe<Geo_State_I18n_Set_Input>;
  where: Geo_State_I18n_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_State_I18n_By_PkArgs = {
  _inc?: Maybe<Geo_State_I18n_Inc_Input>;
  _set?: Maybe<Geo_State_I18n_Set_Input>;
  pk_columns: Geo_State_I18n_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_Sub_DistrictArgs = {
  _inc?: Maybe<Geo_Sub_District_Inc_Input>;
  _set?: Maybe<Geo_Sub_District_Set_Input>;
  where: Geo_Sub_District_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_Sub_District_By_PkArgs = {
  _inc?: Maybe<Geo_Sub_District_Inc_Input>;
  _set?: Maybe<Geo_Sub_District_Set_Input>;
  pk_columns: Geo_Sub_District_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Geo_Sub_District_I18nArgs = {
  _inc?: Maybe<Geo_Sub_District_I18n_Inc_Input>;
  _set?: Maybe<Geo_Sub_District_I18n_Set_Input>;
  where: Geo_Sub_District_I18n_Bool_Exp;
};


export type Mutation_RootUpdate_Geo_Sub_District_I18n_By_PkArgs = {
  _inc?: Maybe<Geo_Sub_District_I18n_Inc_Input>;
  _set?: Maybe<Geo_Sub_District_I18n_Set_Input>;
  pk_columns: Geo_Sub_District_I18n_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Misc_LanguageArgs = {
  _inc?: Maybe<Misc_Language_Inc_Input>;
  _set?: Maybe<Misc_Language_Set_Input>;
  where: Misc_Language_Bool_Exp;
};


export type Mutation_RootUpdate_Misc_Language_By_PkArgs = {
  _inc?: Maybe<Misc_Language_Inc_Input>;
  _set?: Maybe<Misc_Language_Set_Input>;
  pk_columns: Misc_Language_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Misc_VerificationArgs = {
  _inc?: Maybe<Misc_Verification_Inc_Input>;
  _set?: Maybe<Misc_Verification_Set_Input>;
  where: Misc_Verification_Bool_Exp;
};


export type Mutation_RootUpdate_Misc_Verification_By_PkArgs = {
  _inc?: Maybe<Misc_Verification_Inc_Input>;
  _set?: Maybe<Misc_Verification_Set_Input>;
  pk_columns: Misc_Verification_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Misc_Verification_TypeArgs = {
  _set?: Maybe<Misc_Verification_Type_Set_Input>;
  where: Misc_Verification_Type_Bool_Exp;
};


export type Mutation_RootUpdate_Misc_Verification_Type_By_PkArgs = {
  _set?: Maybe<Misc_Verification_Type_Set_Input>;
  pk_columns: Misc_Verification_Type_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Notification_BaseArgs = {
  _inc?: Maybe<Notification_Base_Inc_Input>;
  _set?: Maybe<Notification_Base_Set_Input>;
  where: Notification_Base_Bool_Exp;
};


export type Mutation_RootUpdate_Notification_Base_By_PkArgs = {
  _inc?: Maybe<Notification_Base_Inc_Input>;
  _set?: Maybe<Notification_Base_Set_Input>;
  pk_columns: Notification_Base_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Notification_Base_I18nArgs = {
  _inc?: Maybe<Notification_Base_I18n_Inc_Input>;
  _set?: Maybe<Notification_Base_I18n_Set_Input>;
  where: Notification_Base_I18n_Bool_Exp;
};


export type Mutation_RootUpdate_Notification_Base_I18n_By_PkArgs = {
  _inc?: Maybe<Notification_Base_I18n_Inc_Input>;
  _set?: Maybe<Notification_Base_I18n_Set_Input>;
  pk_columns: Notification_Base_I18n_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Notification_Link_TypeArgs = {
  _set?: Maybe<Notification_Link_Type_Set_Input>;
  where: Notification_Link_Type_Bool_Exp;
};


export type Mutation_RootUpdate_Notification_Link_Type_By_PkArgs = {
  _set?: Maybe<Notification_Link_Type_Set_Input>;
  pk_columns: Notification_Link_Type_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Notification_NotificationArgs = {
  _append?: Maybe<Notification_Notification_Append_Input>;
  _delete_at_path?: Maybe<Notification_Notification_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Notification_Notification_Delete_Elem_Input>;
  _delete_key?: Maybe<Notification_Notification_Delete_Key_Input>;
  _inc?: Maybe<Notification_Notification_Inc_Input>;
  _prepend?: Maybe<Notification_Notification_Prepend_Input>;
  _set?: Maybe<Notification_Notification_Set_Input>;
  where: Notification_Notification_Bool_Exp;
};


export type Mutation_RootUpdate_Notification_Notification_By_PkArgs = {
  _append?: Maybe<Notification_Notification_Append_Input>;
  _delete_at_path?: Maybe<Notification_Notification_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Notification_Notification_Delete_Elem_Input>;
  _delete_key?: Maybe<Notification_Notification_Delete_Key_Input>;
  _inc?: Maybe<Notification_Notification_Inc_Input>;
  _prepend?: Maybe<Notification_Notification_Prepend_Input>;
  _set?: Maybe<Notification_Notification_Set_Input>;
  pk_columns: Notification_Notification_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Profile_AddressArgs = {
  _inc?: Maybe<Profile_Address_Inc_Input>;
  _set?: Maybe<Profile_Address_Set_Input>;
  where: Profile_Address_Bool_Exp;
};


export type Mutation_RootUpdate_Profile_Address_By_PkArgs = {
  _inc?: Maybe<Profile_Address_Inc_Input>;
  _set?: Maybe<Profile_Address_Set_Input>;
  pk_columns: Profile_Address_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Profile_Address_TypeArgs = {
  _set?: Maybe<Profile_Address_Type_Set_Input>;
  where: Profile_Address_Type_Bool_Exp;
};


export type Mutation_RootUpdate_Profile_Address_Type_By_PkArgs = {
  _set?: Maybe<Profile_Address_Type_Set_Input>;
  pk_columns: Profile_Address_Type_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Profile_GenderArgs = {
  _set?: Maybe<Profile_Gender_Set_Input>;
  where: Profile_Gender_Bool_Exp;
};


export type Mutation_RootUpdate_Profile_Gender_By_PkArgs = {
  _set?: Maybe<Profile_Gender_Set_Input>;
  pk_columns: Profile_Gender_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Profile_ProfileArgs = {
  _inc?: Maybe<Profile_Profile_Inc_Input>;
  _set?: Maybe<Profile_Profile_Set_Input>;
  where: Profile_Profile_Bool_Exp;
};


export type Mutation_RootUpdate_Profile_Profile_By_PkArgs = {
  _inc?: Maybe<Profile_Profile_Inc_Input>;
  _set?: Maybe<Profile_Profile_Set_Input>;
  pk_columns: Profile_Profile_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Sms_MessageArgs = {
  _inc?: Maybe<Sms_Message_Inc_Input>;
  _set?: Maybe<Sms_Message_Set_Input>;
  where: Sms_Message_Bool_Exp;
};


export type Mutation_RootUpdate_Sms_Message_By_PkArgs = {
  _inc?: Maybe<Sms_Message_Inc_Input>;
  _set?: Maybe<Sms_Message_Set_Input>;
  pk_columns: Sms_Message_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Sms_Message_StatusArgs = {
  _set?: Maybe<Sms_Message_Status_Set_Input>;
  where: Sms_Message_Status_Bool_Exp;
};


export type Mutation_RootUpdate_Sms_Message_Status_By_PkArgs = {
  _set?: Maybe<Sms_Message_Status_Set_Input>;
  pk_columns: Sms_Message_Status_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Sms_TemplateArgs = {
  _inc?: Maybe<Sms_Template_Inc_Input>;
  _set?: Maybe<Sms_Template_Set_Input>;
  where: Sms_Template_Bool_Exp;
};


export type Mutation_RootUpdate_Sms_Template_By_PkArgs = {
  _inc?: Maybe<Sms_Template_Inc_Input>;
  _set?: Maybe<Sms_Template_Set_Input>;
  pk_columns: Sms_Template_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Suspension_CategoryArgs = {
  _inc?: Maybe<Suspension_Category_Inc_Input>;
  _set?: Maybe<Suspension_Category_Set_Input>;
  where: Suspension_Category_Bool_Exp;
};


export type Mutation_RootUpdate_Suspension_Category_By_PkArgs = {
  _inc?: Maybe<Suspension_Category_Inc_Input>;
  _set?: Maybe<Suspension_Category_Set_Input>;
  pk_columns: Suspension_Category_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Suspension_Category_ReasonArgs = {
  _inc?: Maybe<Suspension_Category_Reason_Inc_Input>;
  _set?: Maybe<Suspension_Category_Reason_Set_Input>;
  where: Suspension_Category_Reason_Bool_Exp;
};


export type Mutation_RootUpdate_Suspension_Category_Reason_By_PkArgs = {
  _inc?: Maybe<Suspension_Category_Reason_Inc_Input>;
  _set?: Maybe<Suspension_Category_Reason_Set_Input>;
  pk_columns: Suspension_Category_Reason_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Suspension_ReasonArgs = {
  _inc?: Maybe<Suspension_Reason_Inc_Input>;
  _set?: Maybe<Suspension_Reason_Set_Input>;
  where: Suspension_Reason_Bool_Exp;
};


export type Mutation_RootUpdate_Suspension_Reason_By_PkArgs = {
  _inc?: Maybe<Suspension_Reason_Inc_Input>;
  _set?: Maybe<Suspension_Reason_Set_Input>;
  pk_columns: Suspension_Reason_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Suspension_Reason_I18nArgs = {
  _inc?: Maybe<Suspension_Reason_I18n_Inc_Input>;
  _set?: Maybe<Suspension_Reason_I18n_Set_Input>;
  where: Suspension_Reason_I18n_Bool_Exp;
};


export type Mutation_RootUpdate_Suspension_Reason_I18n_By_PkArgs = {
  _inc?: Maybe<Suspension_Reason_I18n_Inc_Input>;
  _set?: Maybe<Suspension_Reason_I18n_Set_Input>;
  pk_columns: Suspension_Reason_I18n_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Suspension_StateArgs = {
  _inc?: Maybe<Suspension_State_Inc_Input>;
  _set?: Maybe<Suspension_State_Set_Input>;
  where: Suspension_State_Bool_Exp;
};


export type Mutation_RootUpdate_Suspension_State_By_PkArgs = {
  _inc?: Maybe<Suspension_State_Inc_Input>;
  _set?: Maybe<Suspension_State_Set_Input>;
  pk_columns: Suspension_State_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Suspension_State_ReasonArgs = {
  _inc?: Maybe<Suspension_State_Reason_Inc_Input>;
  _set?: Maybe<Suspension_State_Reason_Set_Input>;
  where: Suspension_State_Reason_Bool_Exp;
};


export type Mutation_RootUpdate_Suspension_State_Reason_By_PkArgs = {
  _inc?: Maybe<Suspension_State_Reason_Inc_Input>;
  _set?: Maybe<Suspension_State_Reason_Set_Input>;
  pk_columns: Suspension_State_Reason_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Suspension_TypeArgs = {
  _set?: Maybe<Suspension_Type_Set_Input>;
  where: Suspension_Type_Bool_Exp;
};


export type Mutation_RootUpdate_Suspension_Type_By_PkArgs = {
  _set?: Maybe<Suspension_Type_Set_Input>;
  pk_columns: Suspension_Type_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


export type Mutation_RootUpdate_User_TypeArgs = {
  _set?: Maybe<User_Type_Set_Input>;
  where: User_Type_Bool_Exp;
};


export type Mutation_RootUpdate_User_Type_By_PkArgs = {
  _set?: Maybe<User_Type_Set_Input>;
  pk_columns: User_Type_Pk_Columns_Input;
};


export type Mutation_RootVerificationArgs = {
  payload: Verification_Input;
};


export type Mutation_RootVerification_EditArgs = {
  payload?: Maybe<Verification_Edit_Input>;
};


export type Mutation_RootVerification_ResendArgs = {
  id: Scalars['Int'];
};


export type Name_Comparison_Exp = {
  _eq?: Maybe<Scalars['name']>;
  _gt?: Maybe<Scalars['name']>;
  _gte?: Maybe<Scalars['name']>;
  _in?: Maybe<Array<Scalars['name']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['name']>;
  _lte?: Maybe<Scalars['name']>;
  _neq?: Maybe<Scalars['name']>;
  _nin?: Maybe<Array<Scalars['name']>>;
};

export type Notification_Base = {
  __typename?: 'notification_base';
  contents: Array<Notification_Base_I18n>;
  contents_aggregate: Notification_Base_I18n_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['smallint'];
  link?: Maybe<Scalars['String']>;
  linkTypeByLinkType?: Maybe<Notification_Link_Type>;
  link_type?: Maybe<Notification_Link_Type_Enum>;
  notifications: Array<Notification_Notification>;
  notifications_aggregate: Notification_Notification_Aggregate;
  picture?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


export type Notification_BaseContentsArgs = {
  distinct_on?: Maybe<Array<Notification_Base_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_I18n_Order_By>>;
  where?: Maybe<Notification_Base_I18n_Bool_Exp>;
};


export type Notification_BaseContents_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Base_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_I18n_Order_By>>;
  where?: Maybe<Notification_Base_I18n_Bool_Exp>;
};


export type Notification_BaseNotificationsArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type Notification_BaseNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};

export type Notification_Base_Aggregate = {
  __typename?: 'notification_base_aggregate';
  aggregate?: Maybe<Notification_Base_Aggregate_Fields>;
  nodes: Array<Notification_Base>;
};

export type Notification_Base_Aggregate_Fields = {
  __typename?: 'notification_base_aggregate_fields';
  avg?: Maybe<Notification_Base_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notification_Base_Max_Fields>;
  min?: Maybe<Notification_Base_Min_Fields>;
  stddev?: Maybe<Notification_Base_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Base_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Base_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Base_Sum_Fields>;
  var_pop?: Maybe<Notification_Base_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Base_Var_Samp_Fields>;
  variance?: Maybe<Notification_Base_Variance_Fields>;
};


export type Notification_Base_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notification_Base_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Notification_Base_Aggregate_Order_By = {
  avg?: Maybe<Notification_Base_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Notification_Base_Max_Order_By>;
  min?: Maybe<Notification_Base_Min_Order_By>;
  stddev?: Maybe<Notification_Base_Stddev_Order_By>;
  stddev_pop?: Maybe<Notification_Base_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Notification_Base_Stddev_Samp_Order_By>;
  sum?: Maybe<Notification_Base_Sum_Order_By>;
  var_pop?: Maybe<Notification_Base_Var_Pop_Order_By>;
  var_samp?: Maybe<Notification_Base_Var_Samp_Order_By>;
  variance?: Maybe<Notification_Base_Variance_Order_By>;
};

export type Notification_Base_Arr_Rel_Insert_Input = {
  data: Array<Notification_Base_Insert_Input>;
  on_conflict?: Maybe<Notification_Base_On_Conflict>;
};

export type Notification_Base_Avg_Fields = {
  __typename?: 'notification_base_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Notification_Base_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Notification_Base_Bool_Exp = {
  _and?: Maybe<Array<Notification_Base_Bool_Exp>>;
  _not?: Maybe<Notification_Base_Bool_Exp>;
  _or?: Maybe<Array<Notification_Base_Bool_Exp>>;
  contents?: Maybe<Notification_Base_I18n_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  link?: Maybe<String_Comparison_Exp>;
  linkTypeByLinkType?: Maybe<Notification_Link_Type_Bool_Exp>;
  link_type?: Maybe<Notification_Link_Type_Enum_Comparison_Exp>;
  notifications?: Maybe<Notification_Notification_Bool_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Notification_Base_Constraint {
  BasePkey = 'base_pkey'
}

export type Notification_Base_I18n = {
  __typename?: 'notification_base_i18n';
  base: Notification_Base;
  base_id: Scalars['smallint'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['smallint'];
  lang: Scalars['smallint'];
  language: Misc_Language;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

export type Notification_Base_I18n_Aggregate = {
  __typename?: 'notification_base_i18n_aggregate';
  aggregate?: Maybe<Notification_Base_I18n_Aggregate_Fields>;
  nodes: Array<Notification_Base_I18n>;
};

export type Notification_Base_I18n_Aggregate_Fields = {
  __typename?: 'notification_base_i18n_aggregate_fields';
  avg?: Maybe<Notification_Base_I18n_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notification_Base_I18n_Max_Fields>;
  min?: Maybe<Notification_Base_I18n_Min_Fields>;
  stddev?: Maybe<Notification_Base_I18n_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Base_I18n_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Base_I18n_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Base_I18n_Sum_Fields>;
  var_pop?: Maybe<Notification_Base_I18n_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Base_I18n_Var_Samp_Fields>;
  variance?: Maybe<Notification_Base_I18n_Variance_Fields>;
};


export type Notification_Base_I18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notification_Base_I18n_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Notification_Base_I18n_Aggregate_Order_By = {
  avg?: Maybe<Notification_Base_I18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Notification_Base_I18n_Max_Order_By>;
  min?: Maybe<Notification_Base_I18n_Min_Order_By>;
  stddev?: Maybe<Notification_Base_I18n_Stddev_Order_By>;
  stddev_pop?: Maybe<Notification_Base_I18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Notification_Base_I18n_Stddev_Samp_Order_By>;
  sum?: Maybe<Notification_Base_I18n_Sum_Order_By>;
  var_pop?: Maybe<Notification_Base_I18n_Var_Pop_Order_By>;
  var_samp?: Maybe<Notification_Base_I18n_Var_Samp_Order_By>;
  variance?: Maybe<Notification_Base_I18n_Variance_Order_By>;
};

export type Notification_Base_I18n_Arr_Rel_Insert_Input = {
  data: Array<Notification_Base_I18n_Insert_Input>;
  on_conflict?: Maybe<Notification_Base_I18n_On_Conflict>;
};

export type Notification_Base_I18n_Avg_Fields = {
  __typename?: 'notification_base_i18n_avg_fields';
  base_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Notification_Base_I18n_Avg_Order_By = {
  base_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Bool_Exp = {
  _and?: Maybe<Array<Notification_Base_I18n_Bool_Exp>>;
  _not?: Maybe<Notification_Base_I18n_Bool_Exp>;
  _or?: Maybe<Array<Notification_Base_I18n_Bool_Exp>>;
  base?: Maybe<Notification_Base_Bool_Exp>;
  base_id?: Maybe<Smallint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  lang?: Maybe<Smallint_Comparison_Exp>;
  language?: Maybe<Misc_Language_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Notification_Base_I18n_Constraint {
  BaseI18nBaseIdLangKey = 'base_i18n_base_id_lang_key',
  BaseI18nPkey = 'base_i18n_pkey'
}

export type Notification_Base_I18n_Inc_Input = {
  base_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Notification_Base_I18n_Insert_Input = {
  base?: Maybe<Notification_Base_Obj_Rel_Insert_Input>;
  base_id?: Maybe<Scalars['smallint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  language?: Maybe<Misc_Language_Obj_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Notification_Base_I18n_Max_Fields = {
  __typename?: 'notification_base_i18n_max_fields';
  base_id?: Maybe<Scalars['smallint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Notification_Base_I18n_Max_Order_By = {
  base_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Min_Fields = {
  __typename?: 'notification_base_i18n_min_fields';
  base_id?: Maybe<Scalars['smallint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Notification_Base_I18n_Min_Order_By = {
  base_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Mutation_Response = {
  __typename?: 'notification_base_i18n_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Notification_Base_I18n>;
};

export type Notification_Base_I18n_On_Conflict = {
  constraint: Notification_Base_I18n_Constraint;
  update_columns?: Array<Notification_Base_I18n_Update_Column>;
  where?: Maybe<Notification_Base_I18n_Bool_Exp>;
};

export type Notification_Base_I18n_Order_By = {
  base?: Maybe<Notification_Base_Order_By>;
  base_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  language?: Maybe<Misc_Language_Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Notification_Base_I18n_Select_Column {
  BaseId = 'base_id',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Lang = 'lang',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type Notification_Base_I18n_Set_Input = {
  base_id?: Maybe<Scalars['smallint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Notification_Base_I18n_Stddev_Fields = {
  __typename?: 'notification_base_i18n_stddev_fields';
  base_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Notification_Base_I18n_Stddev_Order_By = {
  base_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Stddev_Pop_Fields = {
  __typename?: 'notification_base_i18n_stddev_pop_fields';
  base_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Notification_Base_I18n_Stddev_Pop_Order_By = {
  base_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Stddev_Samp_Fields = {
  __typename?: 'notification_base_i18n_stddev_samp_fields';
  base_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Notification_Base_I18n_Stddev_Samp_Order_By = {
  base_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Sum_Fields = {
  __typename?: 'notification_base_i18n_sum_fields';
  base_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
};

export type Notification_Base_I18n_Sum_Order_By = {
  base_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export enum Notification_Base_I18n_Update_Column {
  BaseId = 'base_id',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Lang = 'lang',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type Notification_Base_I18n_Var_Pop_Fields = {
  __typename?: 'notification_base_i18n_var_pop_fields';
  base_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Notification_Base_I18n_Var_Pop_Order_By = {
  base_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Var_Samp_Fields = {
  __typename?: 'notification_base_i18n_var_samp_fields';
  base_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Notification_Base_I18n_Var_Samp_Order_By = {
  base_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Notification_Base_I18n_Variance_Fields = {
  __typename?: 'notification_base_i18n_variance_fields';
  base_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
};

export type Notification_Base_I18n_Variance_Order_By = {
  base_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
};

export type Notification_Base_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
};

export type Notification_Base_Insert_Input = {
  contents?: Maybe<Notification_Base_I18n_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  link?: Maybe<Scalars['String']>;
  linkTypeByLinkType?: Maybe<Notification_Link_Type_Obj_Rel_Insert_Input>;
  link_type?: Maybe<Notification_Link_Type_Enum>;
  notifications?: Maybe<Notification_Notification_Arr_Rel_Insert_Input>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Notification_Base_Max_Fields = {
  __typename?: 'notification_base_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  link?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Notification_Base_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Notification_Base_Min_Fields = {
  __typename?: 'notification_base_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  link?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Notification_Base_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Notification_Base_Mutation_Response = {
  __typename?: 'notification_base_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Notification_Base>;
};

export type Notification_Base_Obj_Rel_Insert_Input = {
  data: Notification_Base_Insert_Input;
  on_conflict?: Maybe<Notification_Base_On_Conflict>;
};

export type Notification_Base_On_Conflict = {
  constraint: Notification_Base_Constraint;
  update_columns?: Array<Notification_Base_Update_Column>;
  where?: Maybe<Notification_Base_Bool_Exp>;
};

export type Notification_Base_Order_By = {
  contents_aggregate?: Maybe<Notification_Base_I18n_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  linkTypeByLinkType?: Maybe<Notification_Link_Type_Order_By>;
  link_type?: Maybe<Order_By>;
  notifications_aggregate?: Maybe<Notification_Notification_Aggregate_Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Notification_Base_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Notification_Base_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Link = 'link',
  LinkType = 'link_type',
  Picture = 'picture',
  UpdatedAt = 'updated_at'
}

export type Notification_Base_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  link?: Maybe<Scalars['String']>;
  link_type?: Maybe<Notification_Link_Type_Enum>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Notification_Base_Stddev_Fields = {
  __typename?: 'notification_base_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Notification_Base_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Notification_Base_Stddev_Pop_Fields = {
  __typename?: 'notification_base_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Notification_Base_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Notification_Base_Stddev_Samp_Fields = {
  __typename?: 'notification_base_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Notification_Base_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Notification_Base_Sum_Fields = {
  __typename?: 'notification_base_sum_fields';
  id?: Maybe<Scalars['smallint']>;
};

export type Notification_Base_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Notification_Base_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Link = 'link',
  LinkType = 'link_type',
  Picture = 'picture',
  UpdatedAt = 'updated_at'
}

export type Notification_Base_Var_Pop_Fields = {
  __typename?: 'notification_base_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Notification_Base_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Notification_Base_Var_Samp_Fields = {
  __typename?: 'notification_base_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Notification_Base_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Notification_Base_Variance_Fields = {
  __typename?: 'notification_base_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Notification_Base_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Notification_Link_Type = {
  __typename?: 'notification_link_type';
  bases: Array<Notification_Base>;
  bases_aggregate: Notification_Base_Aggregate;
  value: Scalars['String'];
};


export type Notification_Link_TypeBasesArgs = {
  distinct_on?: Maybe<Array<Notification_Base_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_Order_By>>;
  where?: Maybe<Notification_Base_Bool_Exp>;
};


export type Notification_Link_TypeBases_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Base_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_Order_By>>;
  where?: Maybe<Notification_Base_Bool_Exp>;
};

export type Notification_Link_Type_Aggregate = {
  __typename?: 'notification_link_type_aggregate';
  aggregate?: Maybe<Notification_Link_Type_Aggregate_Fields>;
  nodes: Array<Notification_Link_Type>;
};

export type Notification_Link_Type_Aggregate_Fields = {
  __typename?: 'notification_link_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Notification_Link_Type_Max_Fields>;
  min?: Maybe<Notification_Link_Type_Min_Fields>;
};


export type Notification_Link_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notification_Link_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Notification_Link_Type_Bool_Exp = {
  _and?: Maybe<Array<Notification_Link_Type_Bool_Exp>>;
  _not?: Maybe<Notification_Link_Type_Bool_Exp>;
  _or?: Maybe<Array<Notification_Link_Type_Bool_Exp>>;
  bases?: Maybe<Notification_Base_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Notification_Link_Type_Constraint {
  LinkTypePkey = 'link_type_pkey'
}

export enum Notification_Link_Type_Enum {
  Ext = 'EXT',
  Int = 'INT'
}

export type Notification_Link_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Notification_Link_Type_Enum>;
  _in?: Maybe<Array<Notification_Link_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Notification_Link_Type_Enum>;
  _nin?: Maybe<Array<Notification_Link_Type_Enum>>;
};

export type Notification_Link_Type_Insert_Input = {
  bases?: Maybe<Notification_Base_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Notification_Link_Type_Max_Fields = {
  __typename?: 'notification_link_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Notification_Link_Type_Min_Fields = {
  __typename?: 'notification_link_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Notification_Link_Type_Mutation_Response = {
  __typename?: 'notification_link_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Notification_Link_Type>;
};

export type Notification_Link_Type_Obj_Rel_Insert_Input = {
  data: Notification_Link_Type_Insert_Input;
  on_conflict?: Maybe<Notification_Link_Type_On_Conflict>;
};

export type Notification_Link_Type_On_Conflict = {
  constraint: Notification_Link_Type_Constraint;
  update_columns?: Array<Notification_Link_Type_Update_Column>;
  where?: Maybe<Notification_Link_Type_Bool_Exp>;
};

export type Notification_Link_Type_Order_By = {
  bases_aggregate?: Maybe<Notification_Base_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Notification_Link_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Notification_Link_Type_Select_Column {
  Value = 'value'
}

export type Notification_Link_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Notification_Link_Type_Update_Column {
  Value = 'value'
}

export type Notification_Notification = {
  __typename?: 'notification_notification';
  base: Notification_Base;
  base_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  from?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  picture?: Maybe<Scalars['String']>;
  read: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
  user: User;
  userByFrom?: Maybe<User>;
  user_id: Scalars['Int'];
  vars?: Maybe<Scalars['jsonb']>;
};


export type Notification_NotificationVarsArgs = {
  path?: Maybe<Scalars['String']>;
};

export type Notification_Notification_Aggregate = {
  __typename?: 'notification_notification_aggregate';
  aggregate?: Maybe<Notification_Notification_Aggregate_Fields>;
  nodes: Array<Notification_Notification>;
};

export type Notification_Notification_Aggregate_Fields = {
  __typename?: 'notification_notification_aggregate_fields';
  avg?: Maybe<Notification_Notification_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notification_Notification_Max_Fields>;
  min?: Maybe<Notification_Notification_Min_Fields>;
  stddev?: Maybe<Notification_Notification_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Notification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Notification_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Notification_Sum_Fields>;
  var_pop?: Maybe<Notification_Notification_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Notification_Var_Samp_Fields>;
  variance?: Maybe<Notification_Notification_Variance_Fields>;
};


export type Notification_Notification_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notification_Notification_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Notification_Notification_Aggregate_Order_By = {
  avg?: Maybe<Notification_Notification_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Notification_Notification_Max_Order_By>;
  min?: Maybe<Notification_Notification_Min_Order_By>;
  stddev?: Maybe<Notification_Notification_Stddev_Order_By>;
  stddev_pop?: Maybe<Notification_Notification_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Notification_Notification_Stddev_Samp_Order_By>;
  sum?: Maybe<Notification_Notification_Sum_Order_By>;
  var_pop?: Maybe<Notification_Notification_Var_Pop_Order_By>;
  var_samp?: Maybe<Notification_Notification_Var_Samp_Order_By>;
  variance?: Maybe<Notification_Notification_Variance_Order_By>;
};

export type Notification_Notification_Append_Input = {
  vars?: Maybe<Scalars['jsonb']>;
};

export type Notification_Notification_Arr_Rel_Insert_Input = {
  data: Array<Notification_Notification_Insert_Input>;
  on_conflict?: Maybe<Notification_Notification_On_Conflict>;
};

export type Notification_Notification_Avg_Fields = {
  __typename?: 'notification_notification_avg_fields';
  base_id?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Notification_Notification_Avg_Order_By = {
  base_id?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Notification_Notification_Bool_Exp = {
  _and?: Maybe<Array<Notification_Notification_Bool_Exp>>;
  _not?: Maybe<Notification_Notification_Bool_Exp>;
  _or?: Maybe<Array<Notification_Notification_Bool_Exp>>;
  base?: Maybe<Notification_Base_Bool_Exp>;
  base_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  from?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  read?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userByFrom?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
  vars?: Maybe<Jsonb_Comparison_Exp>;
};

export enum Notification_Notification_Constraint {
  NotificationPkey = 'notification_pkey'
}

export type Notification_Notification_Delete_At_Path_Input = {
  vars?: Maybe<Array<Scalars['String']>>;
};

export type Notification_Notification_Delete_Elem_Input = {
  vars?: Maybe<Scalars['Int']>;
};

export type Notification_Notification_Delete_Key_Input = {
  vars?: Maybe<Scalars['String']>;
};

export type Notification_Notification_Inc_Input = {
  base_id?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Notification_Notification_Insert_Input = {
  base?: Maybe<Notification_Base_Obj_Rel_Insert_Input>;
  base_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userByFrom?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
  vars?: Maybe<Scalars['jsonb']>;
};

export type Notification_Notification_Max_Fields = {
  __typename?: 'notification_notification_max_fields';
  base_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Notification_Notification_Max_Order_By = {
  base_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Notification_Notification_Min_Fields = {
  __typename?: 'notification_notification_min_fields';
  base_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Notification_Notification_Min_Order_By = {
  base_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Notification_Notification_Mutation_Response = {
  __typename?: 'notification_notification_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Notification_Notification>;
};

export type Notification_Notification_On_Conflict = {
  constraint: Notification_Notification_Constraint;
  update_columns?: Array<Notification_Notification_Update_Column>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};

export type Notification_Notification_Order_By = {
  base?: Maybe<Notification_Base_Order_By>;
  base_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userByFrom?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
  vars?: Maybe<Order_By>;
};

export type Notification_Notification_Pk_Columns_Input = {
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
};

export type Notification_Notification_Prepend_Input = {
  vars?: Maybe<Scalars['jsonb']>;
};

export enum Notification_Notification_Select_Column {
  BaseId = 'base_id',
  CreatedAt = 'created_at',
  From = 'from',
  Id = 'id',
  Picture = 'picture',
  Read = 'read',
  UpdatedAt = 'updated_at',
  UserId = 'user_id',
  Vars = 'vars'
}

export type Notification_Notification_Set_Input = {
  base_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  picture?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  vars?: Maybe<Scalars['jsonb']>;
};

export type Notification_Notification_Stddev_Fields = {
  __typename?: 'notification_notification_stddev_fields';
  base_id?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Notification_Notification_Stddev_Order_By = {
  base_id?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Notification_Notification_Stddev_Pop_Fields = {
  __typename?: 'notification_notification_stddev_pop_fields';
  base_id?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Notification_Notification_Stddev_Pop_Order_By = {
  base_id?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Notification_Notification_Stddev_Samp_Fields = {
  __typename?: 'notification_notification_stddev_samp_fields';
  base_id?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Notification_Notification_Stddev_Samp_Order_By = {
  base_id?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Notification_Notification_Sum_Fields = {
  __typename?: 'notification_notification_sum_fields';
  base_id?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Notification_Notification_Sum_Order_By = {
  base_id?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Notification_Notification_Update_Column {
  BaseId = 'base_id',
  CreatedAt = 'created_at',
  From = 'from',
  Id = 'id',
  Picture = 'picture',
  Read = 'read',
  UpdatedAt = 'updated_at',
  UserId = 'user_id',
  Vars = 'vars'
}

export type Notification_Notification_Var_Pop_Fields = {
  __typename?: 'notification_notification_var_pop_fields';
  base_id?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Notification_Notification_Var_Pop_Order_By = {
  base_id?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Notification_Notification_Var_Samp_Fields = {
  __typename?: 'notification_notification_var_samp_fields';
  base_id?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Notification_Notification_Var_Samp_Order_By = {
  base_id?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Notification_Notification_Variance_Fields = {
  __typename?: 'notification_notification_variance_fields';
  base_id?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Notification_Notification_Variance_Order_By = {
  base_id?: Maybe<Order_By>;
  from?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Profile_Address = {
  __typename?: 'profile_address';
  addressTypeByAddressType: Profile_Address_Type;
  address_line?: Maybe<Scalars['String']>;
  address_type: Profile_Address_Type_Enum;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  sub_district: Geo_Sub_District;
  sub_district_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  user: User;
  user_id: Scalars['Int'];
};

export type Profile_Address_Aggregate = {
  __typename?: 'profile_address_aggregate';
  aggregate?: Maybe<Profile_Address_Aggregate_Fields>;
  nodes: Array<Profile_Address>;
};

export type Profile_Address_Aggregate_Fields = {
  __typename?: 'profile_address_aggregate_fields';
  avg?: Maybe<Profile_Address_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profile_Address_Max_Fields>;
  min?: Maybe<Profile_Address_Min_Fields>;
  stddev?: Maybe<Profile_Address_Stddev_Fields>;
  stddev_pop?: Maybe<Profile_Address_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profile_Address_Stddev_Samp_Fields>;
  sum?: Maybe<Profile_Address_Sum_Fields>;
  var_pop?: Maybe<Profile_Address_Var_Pop_Fields>;
  var_samp?: Maybe<Profile_Address_Var_Samp_Fields>;
  variance?: Maybe<Profile_Address_Variance_Fields>;
};


export type Profile_Address_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Address_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Profile_Address_Aggregate_Order_By = {
  avg?: Maybe<Profile_Address_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Profile_Address_Max_Order_By>;
  min?: Maybe<Profile_Address_Min_Order_By>;
  stddev?: Maybe<Profile_Address_Stddev_Order_By>;
  stddev_pop?: Maybe<Profile_Address_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Profile_Address_Stddev_Samp_Order_By>;
  sum?: Maybe<Profile_Address_Sum_Order_By>;
  var_pop?: Maybe<Profile_Address_Var_Pop_Order_By>;
  var_samp?: Maybe<Profile_Address_Var_Samp_Order_By>;
  variance?: Maybe<Profile_Address_Variance_Order_By>;
};

export type Profile_Address_Arr_Rel_Insert_Input = {
  data: Array<Profile_Address_Insert_Input>;
  on_conflict?: Maybe<Profile_Address_On_Conflict>;
};

export type Profile_Address_Avg_Fields = {
  __typename?: 'profile_address_avg_fields';
  id?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Profile_Address_Avg_Order_By = {
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Bool_Exp = {
  _and?: Maybe<Array<Profile_Address_Bool_Exp>>;
  _not?: Maybe<Profile_Address_Bool_Exp>;
  _or?: Maybe<Array<Profile_Address_Bool_Exp>>;
  addressTypeByAddressType?: Maybe<Profile_Address_Type_Bool_Exp>;
  address_line?: Maybe<String_Comparison_Exp>;
  address_type?: Maybe<Profile_Address_Type_Enum_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sub_district?: Maybe<Geo_Sub_District_Bool_Exp>;
  sub_district_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

export enum Profile_Address_Constraint {
  AddressPkey = 'address_pkey',
  AddressUserIdAddressTypeKey = 'address_user_id_address_type_key'
}

export type Profile_Address_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  sub_district_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Profile_Address_Insert_Input = {
  addressTypeByAddressType?: Maybe<Profile_Address_Type_Obj_Rel_Insert_Input>;
  address_line?: Maybe<Scalars['String']>;
  address_type?: Maybe<Profile_Address_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sub_district?: Maybe<Geo_Sub_District_Obj_Rel_Insert_Input>;
  sub_district_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Profile_Address_Max_Fields = {
  __typename?: 'profile_address_max_fields';
  address_line?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sub_district_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Profile_Address_Max_Order_By = {
  address_line?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Min_Fields = {
  __typename?: 'profile_address_min_fields';
  address_line?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sub_district_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Profile_Address_Min_Order_By = {
  address_line?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Mutation_Response = {
  __typename?: 'profile_address_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Profile_Address>;
};

export type Profile_Address_On_Conflict = {
  constraint: Profile_Address_Constraint;
  update_columns?: Array<Profile_Address_Update_Column>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};

export type Profile_Address_Order_By = {
  addressTypeByAddressType?: Maybe<Profile_Address_Type_Order_By>;
  address_line?: Maybe<Order_By>;
  address_type?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sub_district?: Maybe<Geo_Sub_District_Order_By>;
  sub_district_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Profile_Address_Select_Column {
  AddressLine = 'address_line',
  AddressType = 'address_type',
  CreatedAt = 'created_at',
  Id = 'id',
  SubDistrictId = 'sub_district_id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Profile_Address_Set_Input = {
  address_line?: Maybe<Scalars['String']>;
  address_type?: Maybe<Profile_Address_Type_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  sub_district_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Profile_Address_Stddev_Fields = {
  __typename?: 'profile_address_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Profile_Address_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Stddev_Pop_Fields = {
  __typename?: 'profile_address_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Profile_Address_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Stddev_Samp_Fields = {
  __typename?: 'profile_address_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Profile_Address_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Sum_Fields = {
  __typename?: 'profile_address_sum_fields';
  id?: Maybe<Scalars['Int']>;
  sub_district_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Profile_Address_Sum_Order_By = {
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Type = {
  __typename?: 'profile_address_type';
  addresses: Array<Profile_Address>;
  addresses_aggregate: Profile_Address_Aggregate;
  value: Scalars['String'];
};


export type Profile_Address_TypeAddressesArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type Profile_Address_TypeAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};

export type Profile_Address_Type_Aggregate = {
  __typename?: 'profile_address_type_aggregate';
  aggregate?: Maybe<Profile_Address_Type_Aggregate_Fields>;
  nodes: Array<Profile_Address_Type>;
};

export type Profile_Address_Type_Aggregate_Fields = {
  __typename?: 'profile_address_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Profile_Address_Type_Max_Fields>;
  min?: Maybe<Profile_Address_Type_Min_Fields>;
};


export type Profile_Address_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Address_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Profile_Address_Type_Bool_Exp = {
  _and?: Maybe<Array<Profile_Address_Type_Bool_Exp>>;
  _not?: Maybe<Profile_Address_Type_Bool_Exp>;
  _or?: Maybe<Array<Profile_Address_Type_Bool_Exp>>;
  addresses?: Maybe<Profile_Address_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Profile_Address_Type_Constraint {
  AddressTypePkey = 'address_type_pkey'
}

export enum Profile_Address_Type_Enum {
  Permanent = 'PERMANENT',
  Present = 'PRESENT'
}

export type Profile_Address_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Profile_Address_Type_Enum>;
  _in?: Maybe<Array<Profile_Address_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Profile_Address_Type_Enum>;
  _nin?: Maybe<Array<Profile_Address_Type_Enum>>;
};

export type Profile_Address_Type_Insert_Input = {
  addresses?: Maybe<Profile_Address_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Profile_Address_Type_Max_Fields = {
  __typename?: 'profile_address_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Profile_Address_Type_Min_Fields = {
  __typename?: 'profile_address_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Profile_Address_Type_Mutation_Response = {
  __typename?: 'profile_address_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Profile_Address_Type>;
};

export type Profile_Address_Type_Obj_Rel_Insert_Input = {
  data: Profile_Address_Type_Insert_Input;
  on_conflict?: Maybe<Profile_Address_Type_On_Conflict>;
};

export type Profile_Address_Type_On_Conflict = {
  constraint: Profile_Address_Type_Constraint;
  update_columns?: Array<Profile_Address_Type_Update_Column>;
  where?: Maybe<Profile_Address_Type_Bool_Exp>;
};

export type Profile_Address_Type_Order_By = {
  addresses_aggregate?: Maybe<Profile_Address_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Profile_Address_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Profile_Address_Type_Select_Column {
  Value = 'value'
}

export type Profile_Address_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Profile_Address_Type_Update_Column {
  Value = 'value'
}

export enum Profile_Address_Update_Column {
  AddressLine = 'address_line',
  AddressType = 'address_type',
  CreatedAt = 'created_at',
  Id = 'id',
  SubDistrictId = 'sub_district_id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Profile_Address_Var_Pop_Fields = {
  __typename?: 'profile_address_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Profile_Address_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Var_Samp_Fields = {
  __typename?: 'profile_address_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Profile_Address_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Address_Variance_Fields = {
  __typename?: 'profile_address_variance_fields';
  id?: Maybe<Scalars['Float']>;
  sub_district_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Profile_Address_Variance_Order_By = {
  id?: Maybe<Order_By>;
  sub_district_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Profile_Gender = {
  __typename?: 'profile_gender';
  profiles: Array<Profile_Profile>;
  profiles_aggregate: Profile_Profile_Aggregate;
  value: Scalars['String'];
};


export type Profile_GenderProfilesArgs = {
  distinct_on?: Maybe<Array<Profile_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Profile_Order_By>>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};


export type Profile_GenderProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Profile_Order_By>>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};

export type Profile_Gender_Aggregate = {
  __typename?: 'profile_gender_aggregate';
  aggregate?: Maybe<Profile_Gender_Aggregate_Fields>;
  nodes: Array<Profile_Gender>;
};

export type Profile_Gender_Aggregate_Fields = {
  __typename?: 'profile_gender_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Profile_Gender_Max_Fields>;
  min?: Maybe<Profile_Gender_Min_Fields>;
};


export type Profile_Gender_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Gender_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Profile_Gender_Bool_Exp = {
  _and?: Maybe<Array<Profile_Gender_Bool_Exp>>;
  _not?: Maybe<Profile_Gender_Bool_Exp>;
  _or?: Maybe<Array<Profile_Gender_Bool_Exp>>;
  profiles?: Maybe<Profile_Profile_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Profile_Gender_Constraint {
  GenderPkey = 'gender_pkey'
}

export enum Profile_Gender_Enum {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Profile_Gender_Enum_Comparison_Exp = {
  _eq?: Maybe<Profile_Gender_Enum>;
  _in?: Maybe<Array<Profile_Gender_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Profile_Gender_Enum>;
  _nin?: Maybe<Array<Profile_Gender_Enum>>;
};

export type Profile_Gender_Insert_Input = {
  profiles?: Maybe<Profile_Profile_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Profile_Gender_Max_Fields = {
  __typename?: 'profile_gender_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Profile_Gender_Min_Fields = {
  __typename?: 'profile_gender_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Profile_Gender_Mutation_Response = {
  __typename?: 'profile_gender_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Profile_Gender>;
};

export type Profile_Gender_Obj_Rel_Insert_Input = {
  data: Profile_Gender_Insert_Input;
  on_conflict?: Maybe<Profile_Gender_On_Conflict>;
};

export type Profile_Gender_On_Conflict = {
  constraint: Profile_Gender_Constraint;
  update_columns?: Array<Profile_Gender_Update_Column>;
  where?: Maybe<Profile_Gender_Bool_Exp>;
};

export type Profile_Gender_Order_By = {
  profiles_aggregate?: Maybe<Profile_Profile_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Profile_Gender_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Profile_Gender_Select_Column {
  Value = 'value'
}

export type Profile_Gender_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Profile_Gender_Update_Column {
  Value = 'value'
}

export type Profile_Profile = {
  __typename?: 'profile_profile';
  created_at: Scalars['timestamptz'];
  date_of_birth?: Maybe<Scalars['date']>;
  gender: Profile_Gender_Enum;
  genderByGender: Profile_Gender;
  id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  user: User;
};

export type Profile_Profile_Aggregate = {
  __typename?: 'profile_profile_aggregate';
  aggregate?: Maybe<Profile_Profile_Aggregate_Fields>;
  nodes: Array<Profile_Profile>;
};

export type Profile_Profile_Aggregate_Fields = {
  __typename?: 'profile_profile_aggregate_fields';
  avg?: Maybe<Profile_Profile_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profile_Profile_Max_Fields>;
  min?: Maybe<Profile_Profile_Min_Fields>;
  stddev?: Maybe<Profile_Profile_Stddev_Fields>;
  stddev_pop?: Maybe<Profile_Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profile_Profile_Stddev_Samp_Fields>;
  sum?: Maybe<Profile_Profile_Sum_Fields>;
  var_pop?: Maybe<Profile_Profile_Var_Pop_Fields>;
  var_samp?: Maybe<Profile_Profile_Var_Samp_Fields>;
  variance?: Maybe<Profile_Profile_Variance_Fields>;
};


export type Profile_Profile_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Profile_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Profile_Profile_Aggregate_Order_By = {
  avg?: Maybe<Profile_Profile_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Profile_Profile_Max_Order_By>;
  min?: Maybe<Profile_Profile_Min_Order_By>;
  stddev?: Maybe<Profile_Profile_Stddev_Order_By>;
  stddev_pop?: Maybe<Profile_Profile_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Profile_Profile_Stddev_Samp_Order_By>;
  sum?: Maybe<Profile_Profile_Sum_Order_By>;
  var_pop?: Maybe<Profile_Profile_Var_Pop_Order_By>;
  var_samp?: Maybe<Profile_Profile_Var_Samp_Order_By>;
  variance?: Maybe<Profile_Profile_Variance_Order_By>;
};

export type Profile_Profile_Arr_Rel_Insert_Input = {
  data: Array<Profile_Profile_Insert_Input>;
  on_conflict?: Maybe<Profile_Profile_On_Conflict>;
};

export type Profile_Profile_Avg_Fields = {
  __typename?: 'profile_profile_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Profile_Profile_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Profile_Profile_Bool_Exp = {
  _and?: Maybe<Array<Profile_Profile_Bool_Exp>>;
  _not?: Maybe<Profile_Profile_Bool_Exp>;
  _or?: Maybe<Array<Profile_Profile_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  date_of_birth?: Maybe<Date_Comparison_Exp>;
  gender?: Maybe<Profile_Gender_Enum_Comparison_Exp>;
  genderByGender?: Maybe<Profile_Gender_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

export enum Profile_Profile_Constraint {
  ProfilePkey = 'profile_pkey'
}

export type Profile_Profile_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Profile_Profile_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  date_of_birth?: Maybe<Scalars['date']>;
  gender?: Maybe<Profile_Gender_Enum>;
  genderByGender?: Maybe<Profile_Gender_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

export type Profile_Profile_Max_Fields = {
  __typename?: 'profile_profile_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date_of_birth?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Profile_Profile_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  date_of_birth?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Profile_Profile_Min_Fields = {
  __typename?: 'profile_profile_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date_of_birth?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Profile_Profile_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  date_of_birth?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Profile_Profile_Mutation_Response = {
  __typename?: 'profile_profile_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Profile_Profile>;
};

export type Profile_Profile_On_Conflict = {
  constraint: Profile_Profile_Constraint;
  update_columns?: Array<Profile_Profile_Update_Column>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};

export type Profile_Profile_Order_By = {
  created_at?: Maybe<Order_By>;
  date_of_birth?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  genderByGender?: Maybe<Profile_Gender_Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

export type Profile_Profile_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Profile_Profile_Select_Column {
  CreatedAt = 'created_at',
  DateOfBirth = 'date_of_birth',
  Gender = 'gender',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Profile_Profile_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  date_of_birth?: Maybe<Scalars['date']>;
  gender?: Maybe<Profile_Gender_Enum>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Profile_Profile_Stddev_Fields = {
  __typename?: 'profile_profile_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Profile_Profile_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Profile_Profile_Stddev_Pop_Fields = {
  __typename?: 'profile_profile_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Profile_Profile_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Profile_Profile_Stddev_Samp_Fields = {
  __typename?: 'profile_profile_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Profile_Profile_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Profile_Profile_Sum_Fields = {
  __typename?: 'profile_profile_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Profile_Profile_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Profile_Profile_Update_Column {
  CreatedAt = 'created_at',
  DateOfBirth = 'date_of_birth',
  Gender = 'gender',
  Id = 'id',
  UpdatedAt = 'updated_at'
}

export type Profile_Profile_Var_Pop_Fields = {
  __typename?: 'profile_profile_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Profile_Profile_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Profile_Profile_Var_Samp_Fields = {
  __typename?: 'profile_profile_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Profile_Profile_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Profile_Profile_Variance_Fields = {
  __typename?: 'profile_profile_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Profile_Profile_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  access_control_action: Array<Access_Control_Action>;
  access_control_action_aggregate: Access_Control_Action_Aggregate;
  access_control_action_by_pk?: Maybe<Access_Control_Action>;
  access_control_content: Array<Access_Control_Content>;
  access_control_content_aggregate: Access_Control_Content_Aggregate;
  access_control_content_by_pk?: Maybe<Access_Control_Content>;
  access_control_entity: Array<Access_Control_Entity>;
  access_control_entity_aggregate: Access_Control_Entity_Aggregate;
  access_control_entity_by_pk?: Maybe<Access_Control_Entity>;
  access_control_log: Array<Access_Control_Log>;
  access_control_log_aggregate: Access_Control_Log_Aggregate;
  access_control_role: Array<Access_Control_Role>;
  access_control_role_aggregate: Access_Control_Role_Aggregate;
  access_control_role_by_pk?: Maybe<Access_Control_Role>;
  access_control_role_permission: Array<Access_Control_Role_Permission>;
  access_control_role_permission_aggregate: Access_Control_Role_Permission_Aggregate;
  access_control_role_permission_by_pk?: Maybe<Access_Control_Role_Permission>;
  access_control_role_user: Array<Access_Control_Role_User>;
  access_control_role_user_aggregate: Access_Control_Role_User_Aggregate;
  access_control_role_user_by_pk?: Maybe<Access_Control_Role_User>;
  access_control_user_permission: Array<Access_Control_User_Permission>;
  access_control_user_permission_aggregate: Access_Control_User_Permission_Aggregate;
  access_control_user_permission_by_pk?: Maybe<Access_Control_User_Permission>;
  auth_access_token: Array<Auth_Access_Token>;
  auth_access_token_aggregate: Auth_Access_Token_Aggregate;
  auth_access_token_by_pk?: Maybe<Auth_Access_Token>;
  auth_blacklist: Array<Auth_Blacklist>;
  auth_blacklist_aggregate: Auth_Blacklist_Aggregate;
  auth_blacklist_by_pk?: Maybe<Auth_Blacklist>;
  auth_third_party: Array<Auth_Third_Party>;
  auth_third_party_aggregate: Auth_Third_Party_Aggregate;
  auth_third_party_by_pk?: Maybe<Auth_Third_Party>;
  auth_third_party_user_id: Array<Auth_Third_Party_User_Id>;
  auth_third_party_user_id_aggregate: Auth_Third_Party_User_Id_Aggregate;
  auth_third_party_user_id_by_pk?: Maybe<Auth_Third_Party_User_Id>;
  chat_message: Array<Chat_Message>;
  chat_message_aggregate: Chat_Message_Aggregate;
  chat_message_by_pk?: Maybe<Chat_Message>;
  chat_message_file: Array<Chat_Message_File>;
  chat_message_file_aggregate: Chat_Message_File_Aggregate;
  chat_message_file_by_pk?: Maybe<Chat_Message_File>;
  geo_country: Array<Geo_Country>;
  geo_country_aggregate: Geo_Country_Aggregate;
  geo_country_by_pk?: Maybe<Geo_Country>;
  geo_country_i18n: Array<Geo_Country_I18n>;
  geo_country_i18n_aggregate: Geo_Country_I18n_Aggregate;
  geo_country_i18n_by_pk?: Maybe<Geo_Country_I18n>;
  geo_district: Array<Geo_District>;
  geo_district_aggregate: Geo_District_Aggregate;
  geo_district_by_pk?: Maybe<Geo_District>;
  geo_district_i18n: Array<Geo_District_I18n>;
  geo_district_i18n_aggregate: Geo_District_I18n_Aggregate;
  geo_district_i18n_by_pk?: Maybe<Geo_District_I18n>;
  geo_division: Array<Geo_Division>;
  geo_division_aggregate: Geo_Division_Aggregate;
  geo_division_by_pk?: Maybe<Geo_Division>;
  geo_division_i18n: Array<Geo_Division_I18n>;
  geo_division_i18n_aggregate: Geo_Division_I18n_Aggregate;
  geo_division_i18n_by_pk?: Maybe<Geo_Division_I18n>;
  geo_state: Array<Geo_State>;
  geo_state_aggregate: Geo_State_Aggregate;
  geo_state_by_pk?: Maybe<Geo_State>;
  geo_state_i18n: Array<Geo_State_I18n>;
  geo_state_i18n_aggregate: Geo_State_I18n_Aggregate;
  geo_state_i18n_by_pk?: Maybe<Geo_State_I18n>;
  geo_sub_district: Array<Geo_Sub_District>;
  geo_sub_district_aggregate: Geo_Sub_District_Aggregate;
  geo_sub_district_by_pk?: Maybe<Geo_Sub_District>;
  geo_sub_district_i18n: Array<Geo_Sub_District_I18n>;
  geo_sub_district_i18n_aggregate: Geo_Sub_District_I18n_Aggregate;
  geo_sub_district_i18n_by_pk?: Maybe<Geo_Sub_District_I18n>;
  misc_language: Array<Misc_Language>;
  misc_language_aggregate: Misc_Language_Aggregate;
  misc_language_by_pk?: Maybe<Misc_Language>;
  misc_verification: Array<Misc_Verification>;
  misc_verification_aggregate: Misc_Verification_Aggregate;
  misc_verification_by_pk?: Maybe<Misc_Verification>;
  misc_verification_type: Array<Misc_Verification_Type>;
  misc_verification_type_aggregate: Misc_Verification_Type_Aggregate;
  misc_verification_type_by_pk?: Maybe<Misc_Verification_Type>;
  notification_base: Array<Notification_Base>;
  notification_base_aggregate: Notification_Base_Aggregate;
  notification_base_by_pk?: Maybe<Notification_Base>;
  notification_base_i18n: Array<Notification_Base_I18n>;
  notification_base_i18n_aggregate: Notification_Base_I18n_Aggregate;
  notification_base_i18n_by_pk?: Maybe<Notification_Base_I18n>;
  notification_link_type: Array<Notification_Link_Type>;
  notification_link_type_aggregate: Notification_Link_Type_Aggregate;
  notification_link_type_by_pk?: Maybe<Notification_Link_Type>;
  notification_notification: Array<Notification_Notification>;
  notification_notification_aggregate: Notification_Notification_Aggregate;
  notification_notification_by_pk?: Maybe<Notification_Notification>;
  profile_address: Array<Profile_Address>;
  profile_address_aggregate: Profile_Address_Aggregate;
  profile_address_by_pk?: Maybe<Profile_Address>;
  profile_address_type: Array<Profile_Address_Type>;
  profile_address_type_aggregate: Profile_Address_Type_Aggregate;
  profile_address_type_by_pk?: Maybe<Profile_Address_Type>;
  profile_gender: Array<Profile_Gender>;
  profile_gender_aggregate: Profile_Gender_Aggregate;
  profile_gender_by_pk?: Maybe<Profile_Gender>;
  profile_profile: Array<Profile_Profile>;
  profile_profile_aggregate: Profile_Profile_Aggregate;
  profile_profile_by_pk?: Maybe<Profile_Profile>;
  search_geo_country: Array<Geo_Country>;
  search_geo_country_aggregate: Geo_Country_Aggregate;
  search_geo_division: Array<Geo_Division>;
  search_geo_division_aggregate: Geo_Division_Aggregate;
  search_geo_state: Array<Geo_State>;
  search_geo_state_aggregate: Geo_State_Aggregate;
  search_geo_sub_district: Array<Geo_Sub_District>;
  search_geo_sub_district_aggregate: Geo_Sub_District_Aggregate;
  sms_message: Array<Sms_Message>;
  sms_message_aggregate: Sms_Message_Aggregate;
  sms_message_by_pk?: Maybe<Sms_Message>;
  sms_message_status: Array<Sms_Message_Status>;
  sms_message_status_aggregate: Sms_Message_Status_Aggregate;
  sms_message_status_by_pk?: Maybe<Sms_Message_Status>;
  sms_template: Array<Sms_Template>;
  sms_template_aggregate: Sms_Template_Aggregate;
  sms_template_by_pk?: Maybe<Sms_Template>;
  suspension_category: Array<Suspension_Category>;
  suspension_category_aggregate: Suspension_Category_Aggregate;
  suspension_category_by_pk?: Maybe<Suspension_Category>;
  suspension_category_reason: Array<Suspension_Category_Reason>;
  suspension_category_reason_aggregate: Suspension_Category_Reason_Aggregate;
  suspension_category_reason_by_pk?: Maybe<Suspension_Category_Reason>;
  suspension_reason: Array<Suspension_Reason>;
  suspension_reason_aggregate: Suspension_Reason_Aggregate;
  suspension_reason_by_pk?: Maybe<Suspension_Reason>;
  suspension_reason_i18n: Array<Suspension_Reason_I18n>;
  suspension_reason_i18n_aggregate: Suspension_Reason_I18n_Aggregate;
  suspension_reason_i18n_by_pk?: Maybe<Suspension_Reason_I18n>;
  suspension_state: Array<Suspension_State>;
  suspension_state_aggregate: Suspension_State_Aggregate;
  suspension_state_by_pk?: Maybe<Suspension_State>;
  suspension_state_reason: Array<Suspension_State_Reason>;
  suspension_state_reason_aggregate: Suspension_State_Reason_Aggregate;
  suspension_state_reason_by_pk?: Maybe<Suspension_State_Reason>;
  suspension_type: Array<Suspension_Type>;
  suspension_type_aggregate: Suspension_Type_Aggregate;
  suspension_type_by_pk?: Maybe<Suspension_Type>;
  timescaledb_information_chunks: Array<Timescaledb_Information_Chunks>;
  timescaledb_information_chunks_aggregate: Timescaledb_Information_Chunks_Aggregate;
  timescaledb_information_compression_settings: Array<Timescaledb_Information_Compression_Settings>;
  timescaledb_information_compression_settings_aggregate: Timescaledb_Information_Compression_Settings_Aggregate;
  timescaledb_information_continuous_aggregates: Array<Timescaledb_Information_Continuous_Aggregates>;
  timescaledb_information_continuous_aggregates_aggregate: Timescaledb_Information_Continuous_Aggregates_Aggregate;
  timescaledb_information_data_nodes: Array<Timescaledb_Information_Data_Nodes>;
  timescaledb_information_data_nodes_aggregate: Timescaledb_Information_Data_Nodes_Aggregate;
  timescaledb_information_dimensions: Array<Timescaledb_Information_Dimensions>;
  timescaledb_information_dimensions_aggregate: Timescaledb_Information_Dimensions_Aggregate;
  timescaledb_information_hypertables: Array<Timescaledb_Information_Hypertables>;
  timescaledb_information_hypertables_aggregate: Timescaledb_Information_Hypertables_Aggregate;
  timescaledb_information_job_stats: Array<Timescaledb_Information_Job_Stats>;
  timescaledb_information_job_stats_aggregate: Timescaledb_Information_Job_Stats_Aggregate;
  timescaledb_information_jobs: Array<Timescaledb_Information_Jobs>;
  timescaledb_information_jobs_aggregate: Timescaledb_Information_Jobs_Aggregate;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
  user_type: Array<User_Type>;
  user_type_aggregate: User_Type_Aggregate;
  user_type_by_pk?: Maybe<User_Type>;
};


export type Query_RootAccess_Control_ActionArgs = {
  distinct_on?: Maybe<Array<Access_Control_Action_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Action_Order_By>>;
  where?: Maybe<Access_Control_Action_Bool_Exp>;
};


export type Query_RootAccess_Control_Action_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Action_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Action_Order_By>>;
  where?: Maybe<Access_Control_Action_Bool_Exp>;
};


export type Query_RootAccess_Control_Action_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccess_Control_ContentArgs = {
  distinct_on?: Maybe<Array<Access_Control_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Content_Order_By>>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};


export type Query_RootAccess_Control_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Content_Order_By>>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};


export type Query_RootAccess_Control_Content_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootAccess_Control_EntityArgs = {
  distinct_on?: Maybe<Array<Access_Control_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Entity_Order_By>>;
  where?: Maybe<Access_Control_Entity_Bool_Exp>;
};


export type Query_RootAccess_Control_Entity_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Entity_Order_By>>;
  where?: Maybe<Access_Control_Entity_Bool_Exp>;
};


export type Query_RootAccess_Control_Entity_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootAccess_Control_LogArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type Query_RootAccess_Control_Log_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type Query_RootAccess_Control_RoleArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Order_By>>;
  where?: Maybe<Access_Control_Role_Bool_Exp>;
};


export type Query_RootAccess_Control_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Order_By>>;
  where?: Maybe<Access_Control_Role_Bool_Exp>;
};


export type Query_RootAccess_Control_Role_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAccess_Control_Role_PermissionArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Query_RootAccess_Control_Role_Permission_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Query_RootAccess_Control_Role_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAccess_Control_Role_UserArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_User_Order_By>>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};


export type Query_RootAccess_Control_Role_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_User_Order_By>>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};


export type Query_RootAccess_Control_Role_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAccess_Control_User_PermissionArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};


export type Query_RootAccess_Control_User_Permission_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};


export type Query_RootAccess_Control_User_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAuth_Access_TokenArgs = {
  distinct_on?: Maybe<Array<Auth_Access_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Access_Token_Order_By>>;
  where?: Maybe<Auth_Access_Token_Bool_Exp>;
};


export type Query_RootAuth_Access_Token_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Access_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Access_Token_Order_By>>;
  where?: Maybe<Auth_Access_Token_Bool_Exp>;
};


export type Query_RootAuth_Access_Token_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAuth_BlacklistArgs = {
  distinct_on?: Maybe<Array<Auth_Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Blacklist_Order_By>>;
  where?: Maybe<Auth_Blacklist_Bool_Exp>;
};


export type Query_RootAuth_Blacklist_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Blacklist_Order_By>>;
  where?: Maybe<Auth_Blacklist_Bool_Exp>;
};


export type Query_RootAuth_Blacklist_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAuth_Third_PartyArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_Order_By>>;
  where?: Maybe<Auth_Third_Party_Bool_Exp>;
};


export type Query_RootAuth_Third_Party_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_Order_By>>;
  where?: Maybe<Auth_Third_Party_Bool_Exp>;
};


export type Query_RootAuth_Third_Party_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootAuth_Third_Party_User_IdArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_User_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_User_Id_Order_By>>;
  where?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
};


export type Query_RootAuth_Third_Party_User_Id_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_User_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_User_Id_Order_By>>;
  where?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
};


export type Query_RootAuth_Third_Party_User_Id_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootChat_MessageArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


export type Query_RootChat_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


export type Query_RootChat_Message_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootChat_Message_FileArgs = {
  distinct_on?: Maybe<Array<Chat_Message_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_File_Order_By>>;
  where?: Maybe<Chat_Message_File_Bool_Exp>;
};


export type Query_RootChat_Message_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_File_Order_By>>;
  where?: Maybe<Chat_Message_File_Bool_Exp>;
};


export type Query_RootChat_Message_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGeo_CountryArgs = {
  distinct_on?: Maybe<Array<Geo_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_Order_By>>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};


export type Query_RootGeo_Country_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_Order_By>>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};


export type Query_RootGeo_Country_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_Country_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_I18n_Order_By>>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};


export type Query_RootGeo_Country_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_I18n_Order_By>>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};


export type Query_RootGeo_Country_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_DistrictArgs = {
  distinct_on?: Maybe<Array<Geo_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_Order_By>>;
  where?: Maybe<Geo_District_Bool_Exp>;
};


export type Query_RootGeo_District_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_Order_By>>;
  where?: Maybe<Geo_District_Bool_Exp>;
};


export type Query_RootGeo_District_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_District_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_I18n_Order_By>>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};


export type Query_RootGeo_District_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_I18n_Order_By>>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};


export type Query_RootGeo_District_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_DivisionArgs = {
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Query_RootGeo_Division_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Query_RootGeo_Division_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_Division_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_I18n_Order_By>>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};


export type Query_RootGeo_Division_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_I18n_Order_By>>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};


export type Query_RootGeo_Division_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_StateArgs = {
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Query_RootGeo_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Query_RootGeo_State_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_State_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_I18n_Order_By>>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};


export type Query_RootGeo_State_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_I18n_Order_By>>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};


export type Query_RootGeo_State_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_Sub_DistrictArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Query_RootGeo_Sub_District_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Query_RootGeo_Sub_District_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootGeo_Sub_District_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_I18n_Order_By>>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};


export type Query_RootGeo_Sub_District_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_I18n_Order_By>>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};


export type Query_RootGeo_Sub_District_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootMisc_LanguageArgs = {
  distinct_on?: Maybe<Array<Misc_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Language_Order_By>>;
  where?: Maybe<Misc_Language_Bool_Exp>;
};


export type Query_RootMisc_Language_AggregateArgs = {
  distinct_on?: Maybe<Array<Misc_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Language_Order_By>>;
  where?: Maybe<Misc_Language_Bool_Exp>;
};


export type Query_RootMisc_Language_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootMisc_VerificationArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Order_By>>;
  where?: Maybe<Misc_Verification_Bool_Exp>;
};


export type Query_RootMisc_Verification_AggregateArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Order_By>>;
  where?: Maybe<Misc_Verification_Bool_Exp>;
};


export type Query_RootMisc_Verification_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMisc_Verification_TypeArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Type_Order_By>>;
  where?: Maybe<Misc_Verification_Type_Bool_Exp>;
};


export type Query_RootMisc_Verification_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Type_Order_By>>;
  where?: Maybe<Misc_Verification_Type_Bool_Exp>;
};


export type Query_RootMisc_Verification_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootNotification_BaseArgs = {
  distinct_on?: Maybe<Array<Notification_Base_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_Order_By>>;
  where?: Maybe<Notification_Base_Bool_Exp>;
};


export type Query_RootNotification_Base_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Base_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_Order_By>>;
  where?: Maybe<Notification_Base_Bool_Exp>;
};


export type Query_RootNotification_Base_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootNotification_Base_I18nArgs = {
  distinct_on?: Maybe<Array<Notification_Base_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_I18n_Order_By>>;
  where?: Maybe<Notification_Base_I18n_Bool_Exp>;
};


export type Query_RootNotification_Base_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Base_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_I18n_Order_By>>;
  where?: Maybe<Notification_Base_I18n_Bool_Exp>;
};


export type Query_RootNotification_Base_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootNotification_Link_TypeArgs = {
  distinct_on?: Maybe<Array<Notification_Link_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Link_Type_Order_By>>;
  where?: Maybe<Notification_Link_Type_Bool_Exp>;
};


export type Query_RootNotification_Link_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Link_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Link_Type_Order_By>>;
  where?: Maybe<Notification_Link_Type_Bool_Exp>;
};


export type Query_RootNotification_Link_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootNotification_NotificationArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type Query_RootNotification_Notification_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type Query_RootNotification_Notification_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
};


export type Query_RootProfile_AddressArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type Query_RootProfile_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type Query_RootProfile_Address_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProfile_Address_TypeArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Type_Order_By>>;
  where?: Maybe<Profile_Address_Type_Bool_Exp>;
};


export type Query_RootProfile_Address_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Type_Order_By>>;
  where?: Maybe<Profile_Address_Type_Bool_Exp>;
};


export type Query_RootProfile_Address_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootProfile_GenderArgs = {
  distinct_on?: Maybe<Array<Profile_Gender_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Gender_Order_By>>;
  where?: Maybe<Profile_Gender_Bool_Exp>;
};


export type Query_RootProfile_Gender_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Gender_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Gender_Order_By>>;
  where?: Maybe<Profile_Gender_Bool_Exp>;
};


export type Query_RootProfile_Gender_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootProfile_ProfileArgs = {
  distinct_on?: Maybe<Array<Profile_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Profile_Order_By>>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};


export type Query_RootProfile_Profile_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Profile_Order_By>>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};


export type Query_RootProfile_Profile_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSearch_Geo_CountryArgs = {
  args: Search_Geo_Country_Args;
  distinct_on?: Maybe<Array<Geo_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_Order_By>>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};


export type Query_RootSearch_Geo_Country_AggregateArgs = {
  args: Search_Geo_Country_Args;
  distinct_on?: Maybe<Array<Geo_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_Order_By>>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};


export type Query_RootSearch_Geo_DivisionArgs = {
  args: Search_Geo_Division_Args;
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Query_RootSearch_Geo_Division_AggregateArgs = {
  args: Search_Geo_Division_Args;
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Query_RootSearch_Geo_StateArgs = {
  args: Search_Geo_State_Args;
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Query_RootSearch_Geo_State_AggregateArgs = {
  args: Search_Geo_State_Args;
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Query_RootSearch_Geo_Sub_DistrictArgs = {
  args: Search_Geo_Sub_District_Args;
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Query_RootSearch_Geo_Sub_District_AggregateArgs = {
  args: Search_Geo_Sub_District_Args;
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Query_RootSms_MessageArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Order_By>>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};


export type Query_RootSms_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Order_By>>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};


export type Query_RootSms_Message_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSms_Message_StatusArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Status_Order_By>>;
  where?: Maybe<Sms_Message_Status_Bool_Exp>;
};


export type Query_RootSms_Message_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Status_Order_By>>;
  where?: Maybe<Sms_Message_Status_Bool_Exp>;
};


export type Query_RootSms_Message_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootSms_TemplateArgs = {
  distinct_on?: Maybe<Array<Sms_Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Template_Order_By>>;
  where?: Maybe<Sms_Template_Bool_Exp>;
};


export type Query_RootSms_Template_AggregateArgs = {
  distinct_on?: Maybe<Array<Sms_Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Template_Order_By>>;
  where?: Maybe<Sms_Template_Bool_Exp>;
};


export type Query_RootSms_Template_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootSuspension_CategoryArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Order_By>>;
  where?: Maybe<Suspension_Category_Bool_Exp>;
};


export type Query_RootSuspension_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Order_By>>;
  where?: Maybe<Suspension_Category_Bool_Exp>;
};


export type Query_RootSuspension_Category_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootSuspension_Category_ReasonArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Reason_Order_By>>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};


export type Query_RootSuspension_Category_Reason_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Reason_Order_By>>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};


export type Query_RootSuspension_Category_Reason_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootSuspension_ReasonArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_Order_By>>;
  where?: Maybe<Suspension_Reason_Bool_Exp>;
};


export type Query_RootSuspension_Reason_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_Order_By>>;
  where?: Maybe<Suspension_Reason_Bool_Exp>;
};


export type Query_RootSuspension_Reason_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootSuspension_Reason_I18nArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_I18n_Order_By>>;
  where?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
};


export type Query_RootSuspension_Reason_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_I18n_Order_By>>;
  where?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
};


export type Query_RootSuspension_Reason_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Query_RootSuspension_StateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Order_By>>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};


export type Query_RootSuspension_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Order_By>>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};


export type Query_RootSuspension_State_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSuspension_State_ReasonArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Reason_Order_By>>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};


export type Query_RootSuspension_State_Reason_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Reason_Order_By>>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};


export type Query_RootSuspension_State_Reason_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSuspension_TypeArgs = {
  distinct_on?: Maybe<Array<Suspension_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Type_Order_By>>;
  where?: Maybe<Suspension_Type_Bool_Exp>;
};


export type Query_RootSuspension_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Type_Order_By>>;
  where?: Maybe<Suspension_Type_Bool_Exp>;
};


export type Query_RootSuspension_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTimescaledb_Information_ChunksArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Chunks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Chunks_Order_By>>;
  where?: Maybe<Timescaledb_Information_Chunks_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Chunks_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Chunks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Chunks_Order_By>>;
  where?: Maybe<Timescaledb_Information_Chunks_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Compression_SettingsArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Compression_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Compression_Settings_Order_By>>;
  where?: Maybe<Timescaledb_Information_Compression_Settings_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Compression_Settings_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Compression_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Compression_Settings_Order_By>>;
  where?: Maybe<Timescaledb_Information_Compression_Settings_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Continuous_AggregatesArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Order_By>>;
  where?: Maybe<Timescaledb_Information_Continuous_Aggregates_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Continuous_Aggregates_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Order_By>>;
  where?: Maybe<Timescaledb_Information_Continuous_Aggregates_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Data_NodesArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Data_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Data_Nodes_Order_By>>;
  where?: Maybe<Timescaledb_Information_Data_Nodes_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Data_Nodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Data_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Data_Nodes_Order_By>>;
  where?: Maybe<Timescaledb_Information_Data_Nodes_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_DimensionsArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Dimensions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Dimensions_Order_By>>;
  where?: Maybe<Timescaledb_Information_Dimensions_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Dimensions_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Dimensions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Dimensions_Order_By>>;
  where?: Maybe<Timescaledb_Information_Dimensions_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_HypertablesArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Hypertables_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Hypertables_Order_By>>;
  where?: Maybe<Timescaledb_Information_Hypertables_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Hypertables_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Hypertables_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Hypertables_Order_By>>;
  where?: Maybe<Timescaledb_Information_Hypertables_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Job_StatsArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Job_Stats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Job_Stats_Order_By>>;
  where?: Maybe<Timescaledb_Information_Job_Stats_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Job_Stats_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Job_Stats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Job_Stats_Order_By>>;
  where?: Maybe<Timescaledb_Information_Job_Stats_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_JobsArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Jobs_Order_By>>;
  where?: Maybe<Timescaledb_Information_Jobs_Bool_Exp>;
};


export type Query_RootTimescaledb_Information_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Jobs_Order_By>>;
  where?: Maybe<Timescaledb_Information_Jobs_Bool_Exp>;
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_TypeArgs = {
  distinct_on?: Maybe<Array<User_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Type_Order_By>>;
  where?: Maybe<User_Type_Bool_Exp>;
};


export type Query_RootUser_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Type_Order_By>>;
  where?: Maybe<User_Type_Bool_Exp>;
};


export type Query_RootUser_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Register_Input = {
  email?: Maybe<Scalars['String']>;
  mobile: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  tokenV2?: Maybe<Scalars['String']>;
  tokenV3: Scalars['String'];
  type: Register_User_Type;
  username?: Maybe<Scalars['String']>;
};

export enum Register_User_Type {
  Employer = 'EMPLOYER',
  Seeker = 'SEEKER'
}


export type Regtype_Comparison_Exp = {
  _eq?: Maybe<Scalars['regtype']>;
  _gt?: Maybe<Scalars['regtype']>;
  _gte?: Maybe<Scalars['regtype']>;
  _in?: Maybe<Array<Scalars['regtype']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['regtype']>;
  _lte?: Maybe<Scalars['regtype']>;
  _neq?: Maybe<Scalars['regtype']>;
  _nin?: Maybe<Array<Scalars['regtype']>>;
};

export enum Reset_Password_Medium_Enum {
  Email = 'EMAIL',
  Mobile = 'MOBILE'
}

export type Search_Geo_Country_Args = {
  lang?: Maybe<Scalars['Int']>;
  pointer?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Search_Geo_Division_Args = {
  lang?: Maybe<Scalars['Int']>;
  pointer?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Search_Geo_State_Args = {
  lang?: Maybe<Scalars['Int']>;
  pointer?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type Search_Geo_Sub_District_Args = {
  lang?: Maybe<Scalars['Int']>;
  pointer?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

export type Sms_Message = {
  __typename?: 'sms_message';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  message_status: Sms_Message_Status;
  status: Sms_Message_Status_Enum;
  text: Scalars['String'];
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Sms_Message_Aggregate = {
  __typename?: 'sms_message_aggregate';
  aggregate?: Maybe<Sms_Message_Aggregate_Fields>;
  nodes: Array<Sms_Message>;
};

export type Sms_Message_Aggregate_Fields = {
  __typename?: 'sms_message_aggregate_fields';
  avg?: Maybe<Sms_Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sms_Message_Max_Fields>;
  min?: Maybe<Sms_Message_Min_Fields>;
  stddev?: Maybe<Sms_Message_Stddev_Fields>;
  stddev_pop?: Maybe<Sms_Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sms_Message_Stddev_Samp_Fields>;
  sum?: Maybe<Sms_Message_Sum_Fields>;
  var_pop?: Maybe<Sms_Message_Var_Pop_Fields>;
  var_samp?: Maybe<Sms_Message_Var_Samp_Fields>;
  variance?: Maybe<Sms_Message_Variance_Fields>;
};


export type Sms_Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sms_Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Sms_Message_Aggregate_Order_By = {
  avg?: Maybe<Sms_Message_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Sms_Message_Max_Order_By>;
  min?: Maybe<Sms_Message_Min_Order_By>;
  stddev?: Maybe<Sms_Message_Stddev_Order_By>;
  stddev_pop?: Maybe<Sms_Message_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Sms_Message_Stddev_Samp_Order_By>;
  sum?: Maybe<Sms_Message_Sum_Order_By>;
  var_pop?: Maybe<Sms_Message_Var_Pop_Order_By>;
  var_samp?: Maybe<Sms_Message_Var_Samp_Order_By>;
  variance?: Maybe<Sms_Message_Variance_Order_By>;
};

export type Sms_Message_Arr_Rel_Insert_Input = {
  data: Array<Sms_Message_Insert_Input>;
  on_conflict?: Maybe<Sms_Message_On_Conflict>;
};

export type Sms_Message_Avg_Fields = {
  __typename?: 'sms_message_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Sms_Message_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Bool_Exp = {
  _and?: Maybe<Array<Sms_Message_Bool_Exp>>;
  _not?: Maybe<Sms_Message_Bool_Exp>;
  _or?: Maybe<Array<Sms_Message_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  message_status?: Maybe<Sms_Message_Status_Bool_Exp>;
  status?: Maybe<Sms_Message_Status_Enum_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

export enum Sms_Message_Constraint {
  MessagePkey = 'message_pkey'
}

export type Sms_Message_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Sms_Message_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  message_status?: Maybe<Sms_Message_Status_Obj_Rel_Insert_Input>;
  status?: Maybe<Sms_Message_Status_Enum>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Sms_Message_Max_Fields = {
  __typename?: 'sms_message_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Sms_Message_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Min_Fields = {
  __typename?: 'sms_message_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Sms_Message_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Mutation_Response = {
  __typename?: 'sms_message_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Sms_Message>;
};

export type Sms_Message_On_Conflict = {
  constraint: Sms_Message_Constraint;
  update_columns?: Array<Sms_Message_Update_Column>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};

export type Sms_Message_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message_status?: Maybe<Sms_Message_Status_Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Sms_Message_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Status = 'status',
  Text = 'text',
  UserId = 'user_id'
}

export type Sms_Message_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Sms_Message_Status_Enum>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Sms_Message_Status = {
  __typename?: 'sms_message_status';
  messages: Array<Sms_Message>;
  messages_aggregate: Sms_Message_Aggregate;
  value: Scalars['String'];
};


export type Sms_Message_StatusMessagesArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Order_By>>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};


export type Sms_Message_StatusMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Order_By>>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};

export type Sms_Message_Status_Aggregate = {
  __typename?: 'sms_message_status_aggregate';
  aggregate?: Maybe<Sms_Message_Status_Aggregate_Fields>;
  nodes: Array<Sms_Message_Status>;
};

export type Sms_Message_Status_Aggregate_Fields = {
  __typename?: 'sms_message_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sms_Message_Status_Max_Fields>;
  min?: Maybe<Sms_Message_Status_Min_Fields>;
};


export type Sms_Message_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sms_Message_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Sms_Message_Status_Bool_Exp = {
  _and?: Maybe<Array<Sms_Message_Status_Bool_Exp>>;
  _not?: Maybe<Sms_Message_Status_Bool_Exp>;
  _or?: Maybe<Array<Sms_Message_Status_Bool_Exp>>;
  messages?: Maybe<Sms_Message_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Sms_Message_Status_Constraint {
  MessageStatusPkey = 'message_status_pkey'
}

export enum Sms_Message_Status_Enum {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type Sms_Message_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Sms_Message_Status_Enum>;
  _in?: Maybe<Array<Sms_Message_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Sms_Message_Status_Enum>;
  _nin?: Maybe<Array<Sms_Message_Status_Enum>>;
};

export type Sms_Message_Status_Insert_Input = {
  messages?: Maybe<Sms_Message_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Sms_Message_Status_Max_Fields = {
  __typename?: 'sms_message_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Sms_Message_Status_Min_Fields = {
  __typename?: 'sms_message_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Sms_Message_Status_Mutation_Response = {
  __typename?: 'sms_message_status_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Sms_Message_Status>;
};

export type Sms_Message_Status_Obj_Rel_Insert_Input = {
  data: Sms_Message_Status_Insert_Input;
  on_conflict?: Maybe<Sms_Message_Status_On_Conflict>;
};

export type Sms_Message_Status_On_Conflict = {
  constraint: Sms_Message_Status_Constraint;
  update_columns?: Array<Sms_Message_Status_Update_Column>;
  where?: Maybe<Sms_Message_Status_Bool_Exp>;
};

export type Sms_Message_Status_Order_By = {
  messages_aggregate?: Maybe<Sms_Message_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Sms_Message_Status_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Sms_Message_Status_Select_Column {
  Value = 'value'
}

export type Sms_Message_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Sms_Message_Status_Update_Column {
  Value = 'value'
}

export type Sms_Message_Stddev_Fields = {
  __typename?: 'sms_message_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Sms_Message_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Stddev_Pop_Fields = {
  __typename?: 'sms_message_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Sms_Message_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Stddev_Samp_Fields = {
  __typename?: 'sms_message_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Sms_Message_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Sum_Fields = {
  __typename?: 'sms_message_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Sms_Message_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Sms_Message_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Status = 'status',
  Text = 'text',
  UserId = 'user_id'
}

export type Sms_Message_Var_Pop_Fields = {
  __typename?: 'sms_message_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Sms_Message_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Var_Samp_Fields = {
  __typename?: 'sms_message_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Sms_Message_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Message_Variance_Fields = {
  __typename?: 'sms_message_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Sms_Message_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Sms_Send_Input = {
  ids: Array<Scalars['Int']>;
  text: Scalars['String'];
};

export type Sms_Template = {
  __typename?: 'sms_template';
  created_at: Scalars['timestamptz'];
  id: Scalars['smallint'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

export type Sms_Template_Aggregate = {
  __typename?: 'sms_template_aggregate';
  aggregate?: Maybe<Sms_Template_Aggregate_Fields>;
  nodes: Array<Sms_Template>;
};

export type Sms_Template_Aggregate_Fields = {
  __typename?: 'sms_template_aggregate_fields';
  avg?: Maybe<Sms_Template_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sms_Template_Max_Fields>;
  min?: Maybe<Sms_Template_Min_Fields>;
  stddev?: Maybe<Sms_Template_Stddev_Fields>;
  stddev_pop?: Maybe<Sms_Template_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sms_Template_Stddev_Samp_Fields>;
  sum?: Maybe<Sms_Template_Sum_Fields>;
  var_pop?: Maybe<Sms_Template_Var_Pop_Fields>;
  var_samp?: Maybe<Sms_Template_Var_Samp_Fields>;
  variance?: Maybe<Sms_Template_Variance_Fields>;
};


export type Sms_Template_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sms_Template_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Sms_Template_Avg_Fields = {
  __typename?: 'sms_template_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Sms_Template_Bool_Exp = {
  _and?: Maybe<Array<Sms_Template_Bool_Exp>>;
  _not?: Maybe<Sms_Template_Bool_Exp>;
  _or?: Maybe<Array<Sms_Template_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Sms_Template_Constraint {
  TemplatePkey = 'template_pkey'
}

export type Sms_Template_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
};

export type Sms_Template_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Sms_Template_Max_Fields = {
  __typename?: 'sms_template_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Sms_Template_Min_Fields = {
  __typename?: 'sms_template_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Sms_Template_Mutation_Response = {
  __typename?: 'sms_template_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Sms_Template>;
};

export type Sms_Template_On_Conflict = {
  constraint: Sms_Template_Constraint;
  update_columns?: Array<Sms_Template_Update_Column>;
  where?: Maybe<Sms_Template_Bool_Exp>;
};

export type Sms_Template_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Sms_Template_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Sms_Template_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Sms_Template_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Sms_Template_Stddev_Fields = {
  __typename?: 'sms_template_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Sms_Template_Stddev_Pop_Fields = {
  __typename?: 'sms_template_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Sms_Template_Stddev_Samp_Fields = {
  __typename?: 'sms_template_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Sms_Template_Sum_Fields = {
  __typename?: 'sms_template_sum_fields';
  id?: Maybe<Scalars['smallint']>;
};

export enum Sms_Template_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Sms_Template_Var_Pop_Fields = {
  __typename?: 'sms_template_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Sms_Template_Var_Samp_Fields = {
  __typename?: 'sms_template_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Sms_Template_Variance_Fields = {
  __typename?: 'sms_template_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  access_control_action: Array<Access_Control_Action>;
  access_control_action_aggregate: Access_Control_Action_Aggregate;
  access_control_action_by_pk?: Maybe<Access_Control_Action>;
  access_control_content: Array<Access_Control_Content>;
  access_control_content_aggregate: Access_Control_Content_Aggregate;
  access_control_content_by_pk?: Maybe<Access_Control_Content>;
  access_control_entity: Array<Access_Control_Entity>;
  access_control_entity_aggregate: Access_Control_Entity_Aggregate;
  access_control_entity_by_pk?: Maybe<Access_Control_Entity>;
  access_control_log: Array<Access_Control_Log>;
  access_control_log_aggregate: Access_Control_Log_Aggregate;
  access_control_role: Array<Access_Control_Role>;
  access_control_role_aggregate: Access_Control_Role_Aggregate;
  access_control_role_by_pk?: Maybe<Access_Control_Role>;
  access_control_role_permission: Array<Access_Control_Role_Permission>;
  access_control_role_permission_aggregate: Access_Control_Role_Permission_Aggregate;
  access_control_role_permission_by_pk?: Maybe<Access_Control_Role_Permission>;
  access_control_role_user: Array<Access_Control_Role_User>;
  access_control_role_user_aggregate: Access_Control_Role_User_Aggregate;
  access_control_role_user_by_pk?: Maybe<Access_Control_Role_User>;
  access_control_user_permission: Array<Access_Control_User_Permission>;
  access_control_user_permission_aggregate: Access_Control_User_Permission_Aggregate;
  access_control_user_permission_by_pk?: Maybe<Access_Control_User_Permission>;
  auth_access_token: Array<Auth_Access_Token>;
  auth_access_token_aggregate: Auth_Access_Token_Aggregate;
  auth_access_token_by_pk?: Maybe<Auth_Access_Token>;
  auth_blacklist: Array<Auth_Blacklist>;
  auth_blacklist_aggregate: Auth_Blacklist_Aggregate;
  auth_blacklist_by_pk?: Maybe<Auth_Blacklist>;
  auth_third_party: Array<Auth_Third_Party>;
  auth_third_party_aggregate: Auth_Third_Party_Aggregate;
  auth_third_party_by_pk?: Maybe<Auth_Third_Party>;
  auth_third_party_user_id: Array<Auth_Third_Party_User_Id>;
  auth_third_party_user_id_aggregate: Auth_Third_Party_User_Id_Aggregate;
  auth_third_party_user_id_by_pk?: Maybe<Auth_Third_Party_User_Id>;
  chat_message: Array<Chat_Message>;
  chat_message_aggregate: Chat_Message_Aggregate;
  chat_message_by_pk?: Maybe<Chat_Message>;
  chat_message_file: Array<Chat_Message_File>;
  chat_message_file_aggregate: Chat_Message_File_Aggregate;
  chat_message_file_by_pk?: Maybe<Chat_Message_File>;
  geo_country: Array<Geo_Country>;
  geo_country_aggregate: Geo_Country_Aggregate;
  geo_country_by_pk?: Maybe<Geo_Country>;
  geo_country_i18n: Array<Geo_Country_I18n>;
  geo_country_i18n_aggregate: Geo_Country_I18n_Aggregate;
  geo_country_i18n_by_pk?: Maybe<Geo_Country_I18n>;
  geo_district: Array<Geo_District>;
  geo_district_aggregate: Geo_District_Aggregate;
  geo_district_by_pk?: Maybe<Geo_District>;
  geo_district_i18n: Array<Geo_District_I18n>;
  geo_district_i18n_aggregate: Geo_District_I18n_Aggregate;
  geo_district_i18n_by_pk?: Maybe<Geo_District_I18n>;
  geo_division: Array<Geo_Division>;
  geo_division_aggregate: Geo_Division_Aggregate;
  geo_division_by_pk?: Maybe<Geo_Division>;
  geo_division_i18n: Array<Geo_Division_I18n>;
  geo_division_i18n_aggregate: Geo_Division_I18n_Aggregate;
  geo_division_i18n_by_pk?: Maybe<Geo_Division_I18n>;
  geo_state: Array<Geo_State>;
  geo_state_aggregate: Geo_State_Aggregate;
  geo_state_by_pk?: Maybe<Geo_State>;
  geo_state_i18n: Array<Geo_State_I18n>;
  geo_state_i18n_aggregate: Geo_State_I18n_Aggregate;
  geo_state_i18n_by_pk?: Maybe<Geo_State_I18n>;
  geo_sub_district: Array<Geo_Sub_District>;
  geo_sub_district_aggregate: Geo_Sub_District_Aggregate;
  geo_sub_district_by_pk?: Maybe<Geo_Sub_District>;
  geo_sub_district_i18n: Array<Geo_Sub_District_I18n>;
  geo_sub_district_i18n_aggregate: Geo_Sub_District_I18n_Aggregate;
  geo_sub_district_i18n_by_pk?: Maybe<Geo_Sub_District_I18n>;
  misc_language: Array<Misc_Language>;
  misc_language_aggregate: Misc_Language_Aggregate;
  misc_language_by_pk?: Maybe<Misc_Language>;
  misc_verification: Array<Misc_Verification>;
  misc_verification_aggregate: Misc_Verification_Aggregate;
  misc_verification_by_pk?: Maybe<Misc_Verification>;
  misc_verification_type: Array<Misc_Verification_Type>;
  misc_verification_type_aggregate: Misc_Verification_Type_Aggregate;
  misc_verification_type_by_pk?: Maybe<Misc_Verification_Type>;
  notification_base: Array<Notification_Base>;
  notification_base_aggregate: Notification_Base_Aggregate;
  notification_base_by_pk?: Maybe<Notification_Base>;
  notification_base_i18n: Array<Notification_Base_I18n>;
  notification_base_i18n_aggregate: Notification_Base_I18n_Aggregate;
  notification_base_i18n_by_pk?: Maybe<Notification_Base_I18n>;
  notification_link_type: Array<Notification_Link_Type>;
  notification_link_type_aggregate: Notification_Link_Type_Aggregate;
  notification_link_type_by_pk?: Maybe<Notification_Link_Type>;
  notification_notification: Array<Notification_Notification>;
  notification_notification_aggregate: Notification_Notification_Aggregate;
  notification_notification_by_pk?: Maybe<Notification_Notification>;
  profile_address: Array<Profile_Address>;
  profile_address_aggregate: Profile_Address_Aggregate;
  profile_address_by_pk?: Maybe<Profile_Address>;
  profile_address_type: Array<Profile_Address_Type>;
  profile_address_type_aggregate: Profile_Address_Type_Aggregate;
  profile_address_type_by_pk?: Maybe<Profile_Address_Type>;
  profile_gender: Array<Profile_Gender>;
  profile_gender_aggregate: Profile_Gender_Aggregate;
  profile_gender_by_pk?: Maybe<Profile_Gender>;
  profile_profile: Array<Profile_Profile>;
  profile_profile_aggregate: Profile_Profile_Aggregate;
  profile_profile_by_pk?: Maybe<Profile_Profile>;
  search_geo_country: Array<Geo_Country>;
  search_geo_country_aggregate: Geo_Country_Aggregate;
  search_geo_division: Array<Geo_Division>;
  search_geo_division_aggregate: Geo_Division_Aggregate;
  search_geo_state: Array<Geo_State>;
  search_geo_state_aggregate: Geo_State_Aggregate;
  search_geo_sub_district: Array<Geo_Sub_District>;
  search_geo_sub_district_aggregate: Geo_Sub_District_Aggregate;
  sms_message: Array<Sms_Message>;
  sms_message_aggregate: Sms_Message_Aggregate;
  sms_message_by_pk?: Maybe<Sms_Message>;
  sms_message_status: Array<Sms_Message_Status>;
  sms_message_status_aggregate: Sms_Message_Status_Aggregate;
  sms_message_status_by_pk?: Maybe<Sms_Message_Status>;
  sms_template: Array<Sms_Template>;
  sms_template_aggregate: Sms_Template_Aggregate;
  sms_template_by_pk?: Maybe<Sms_Template>;
  suspension_category: Array<Suspension_Category>;
  suspension_category_aggregate: Suspension_Category_Aggregate;
  suspension_category_by_pk?: Maybe<Suspension_Category>;
  suspension_category_reason: Array<Suspension_Category_Reason>;
  suspension_category_reason_aggregate: Suspension_Category_Reason_Aggregate;
  suspension_category_reason_by_pk?: Maybe<Suspension_Category_Reason>;
  suspension_reason: Array<Suspension_Reason>;
  suspension_reason_aggregate: Suspension_Reason_Aggregate;
  suspension_reason_by_pk?: Maybe<Suspension_Reason>;
  suspension_reason_i18n: Array<Suspension_Reason_I18n>;
  suspension_reason_i18n_aggregate: Suspension_Reason_I18n_Aggregate;
  suspension_reason_i18n_by_pk?: Maybe<Suspension_Reason_I18n>;
  suspension_state: Array<Suspension_State>;
  suspension_state_aggregate: Suspension_State_Aggregate;
  suspension_state_by_pk?: Maybe<Suspension_State>;
  suspension_state_reason: Array<Suspension_State_Reason>;
  suspension_state_reason_aggregate: Suspension_State_Reason_Aggregate;
  suspension_state_reason_by_pk?: Maybe<Suspension_State_Reason>;
  suspension_type: Array<Suspension_Type>;
  suspension_type_aggregate: Suspension_Type_Aggregate;
  suspension_type_by_pk?: Maybe<Suspension_Type>;
  timescaledb_information_chunks: Array<Timescaledb_Information_Chunks>;
  timescaledb_information_chunks_aggregate: Timescaledb_Information_Chunks_Aggregate;
  timescaledb_information_compression_settings: Array<Timescaledb_Information_Compression_Settings>;
  timescaledb_information_compression_settings_aggregate: Timescaledb_Information_Compression_Settings_Aggregate;
  timescaledb_information_continuous_aggregates: Array<Timescaledb_Information_Continuous_Aggregates>;
  timescaledb_information_continuous_aggregates_aggregate: Timescaledb_Information_Continuous_Aggregates_Aggregate;
  timescaledb_information_data_nodes: Array<Timescaledb_Information_Data_Nodes>;
  timescaledb_information_data_nodes_aggregate: Timescaledb_Information_Data_Nodes_Aggregate;
  timescaledb_information_dimensions: Array<Timescaledb_Information_Dimensions>;
  timescaledb_information_dimensions_aggregate: Timescaledb_Information_Dimensions_Aggregate;
  timescaledb_information_hypertables: Array<Timescaledb_Information_Hypertables>;
  timescaledb_information_hypertables_aggregate: Timescaledb_Information_Hypertables_Aggregate;
  timescaledb_information_job_stats: Array<Timescaledb_Information_Job_Stats>;
  timescaledb_information_job_stats_aggregate: Timescaledb_Information_Job_Stats_Aggregate;
  timescaledb_information_jobs: Array<Timescaledb_Information_Jobs>;
  timescaledb_information_jobs_aggregate: Timescaledb_Information_Jobs_Aggregate;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
  user_type: Array<User_Type>;
  user_type_aggregate: User_Type_Aggregate;
  user_type_by_pk?: Maybe<User_Type>;
};


export type Subscription_RootAccess_Control_ActionArgs = {
  distinct_on?: Maybe<Array<Access_Control_Action_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Action_Order_By>>;
  where?: Maybe<Access_Control_Action_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Action_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Action_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Action_Order_By>>;
  where?: Maybe<Access_Control_Action_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Action_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccess_Control_ContentArgs = {
  distinct_on?: Maybe<Array<Access_Control_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Content_Order_By>>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Content_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Content_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Content_Order_By>>;
  where?: Maybe<Access_Control_Content_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Content_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootAccess_Control_EntityArgs = {
  distinct_on?: Maybe<Array<Access_Control_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Entity_Order_By>>;
  where?: Maybe<Access_Control_Entity_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Entity_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Entity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Entity_Order_By>>;
  where?: Maybe<Access_Control_Entity_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Entity_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAccess_Control_LogArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Log_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type Subscription_RootAccess_Control_RoleArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Order_By>>;
  where?: Maybe<Access_Control_Role_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Order_By>>;
  where?: Maybe<Access_Control_Role_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Role_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAccess_Control_Role_PermissionArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Role_Permission_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_Permission_Order_By>>;
  where?: Maybe<Access_Control_Role_Permission_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Role_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAccess_Control_Role_UserArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_User_Order_By>>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Role_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_User_Order_By>>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};


export type Subscription_RootAccess_Control_Role_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAccess_Control_User_PermissionArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};


export type Subscription_RootAccess_Control_User_Permission_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};


export type Subscription_RootAccess_Control_User_Permission_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuth_Access_TokenArgs = {
  distinct_on?: Maybe<Array<Auth_Access_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Access_Token_Order_By>>;
  where?: Maybe<Auth_Access_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Access_Token_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Access_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Access_Token_Order_By>>;
  where?: Maybe<Auth_Access_Token_Bool_Exp>;
};


export type Subscription_RootAuth_Access_Token_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuth_BlacklistArgs = {
  distinct_on?: Maybe<Array<Auth_Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Blacklist_Order_By>>;
  where?: Maybe<Auth_Blacklist_Bool_Exp>;
};


export type Subscription_RootAuth_Blacklist_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Blacklist_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Blacklist_Order_By>>;
  where?: Maybe<Auth_Blacklist_Bool_Exp>;
};


export type Subscription_RootAuth_Blacklist_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuth_Third_PartyArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_Order_By>>;
  where?: Maybe<Auth_Third_Party_Bool_Exp>;
};


export type Subscription_RootAuth_Third_Party_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_Order_By>>;
  where?: Maybe<Auth_Third_Party_Bool_Exp>;
};


export type Subscription_RootAuth_Third_Party_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootAuth_Third_Party_User_IdArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_User_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_User_Id_Order_By>>;
  where?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
};


export type Subscription_RootAuth_Third_Party_User_Id_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Third_Party_User_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Third_Party_User_Id_Order_By>>;
  where?: Maybe<Auth_Third_Party_User_Id_Bool_Exp>;
};


export type Subscription_RootAuth_Third_Party_User_Id_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootChat_MessageArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


export type Subscription_RootChat_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


export type Subscription_RootChat_Message_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootChat_Message_FileArgs = {
  distinct_on?: Maybe<Array<Chat_Message_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_File_Order_By>>;
  where?: Maybe<Chat_Message_File_Bool_Exp>;
};


export type Subscription_RootChat_Message_File_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_File_Order_By>>;
  where?: Maybe<Chat_Message_File_Bool_Exp>;
};


export type Subscription_RootChat_Message_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGeo_CountryArgs = {
  distinct_on?: Maybe<Array<Geo_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_Order_By>>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};


export type Subscription_RootGeo_Country_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_Order_By>>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};


export type Subscription_RootGeo_Country_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_Country_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_I18n_Order_By>>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_Country_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Country_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_I18n_Order_By>>;
  where?: Maybe<Geo_Country_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_Country_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_DistrictArgs = {
  distinct_on?: Maybe<Array<Geo_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_Order_By>>;
  where?: Maybe<Geo_District_Bool_Exp>;
};


export type Subscription_RootGeo_District_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_Order_By>>;
  where?: Maybe<Geo_District_Bool_Exp>;
};


export type Subscription_RootGeo_District_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_District_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_I18n_Order_By>>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_District_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_District_I18n_Order_By>>;
  where?: Maybe<Geo_District_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_District_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_DivisionArgs = {
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Subscription_RootGeo_Division_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Subscription_RootGeo_Division_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_Division_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_I18n_Order_By>>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_Division_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Division_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_I18n_Order_By>>;
  where?: Maybe<Geo_Division_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_Division_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_StateArgs = {
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Subscription_RootGeo_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Subscription_RootGeo_State_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_State_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_I18n_Order_By>>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_State_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_State_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_I18n_Order_By>>;
  where?: Maybe<Geo_State_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_State_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_Sub_DistrictArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Subscription_RootGeo_Sub_District_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Subscription_RootGeo_Sub_District_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootGeo_Sub_District_I18nArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_I18n_Order_By>>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_Sub_District_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Geo_Sub_District_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_I18n_Order_By>>;
  where?: Maybe<Geo_Sub_District_I18n_Bool_Exp>;
};


export type Subscription_RootGeo_Sub_District_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootMisc_LanguageArgs = {
  distinct_on?: Maybe<Array<Misc_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Language_Order_By>>;
  where?: Maybe<Misc_Language_Bool_Exp>;
};


export type Subscription_RootMisc_Language_AggregateArgs = {
  distinct_on?: Maybe<Array<Misc_Language_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Language_Order_By>>;
  where?: Maybe<Misc_Language_Bool_Exp>;
};


export type Subscription_RootMisc_Language_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootMisc_VerificationArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Order_By>>;
  where?: Maybe<Misc_Verification_Bool_Exp>;
};


export type Subscription_RootMisc_Verification_AggregateArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Order_By>>;
  where?: Maybe<Misc_Verification_Bool_Exp>;
};


export type Subscription_RootMisc_Verification_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMisc_Verification_TypeArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Type_Order_By>>;
  where?: Maybe<Misc_Verification_Type_Bool_Exp>;
};


export type Subscription_RootMisc_Verification_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Misc_Verification_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Misc_Verification_Type_Order_By>>;
  where?: Maybe<Misc_Verification_Type_Bool_Exp>;
};


export type Subscription_RootMisc_Verification_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootNotification_BaseArgs = {
  distinct_on?: Maybe<Array<Notification_Base_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_Order_By>>;
  where?: Maybe<Notification_Base_Bool_Exp>;
};


export type Subscription_RootNotification_Base_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Base_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_Order_By>>;
  where?: Maybe<Notification_Base_Bool_Exp>;
};


export type Subscription_RootNotification_Base_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootNotification_Base_I18nArgs = {
  distinct_on?: Maybe<Array<Notification_Base_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_I18n_Order_By>>;
  where?: Maybe<Notification_Base_I18n_Bool_Exp>;
};


export type Subscription_RootNotification_Base_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Base_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Base_I18n_Order_By>>;
  where?: Maybe<Notification_Base_I18n_Bool_Exp>;
};


export type Subscription_RootNotification_Base_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootNotification_Link_TypeArgs = {
  distinct_on?: Maybe<Array<Notification_Link_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Link_Type_Order_By>>;
  where?: Maybe<Notification_Link_Type_Bool_Exp>;
};


export type Subscription_RootNotification_Link_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Link_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Link_Type_Order_By>>;
  where?: Maybe<Notification_Link_Type_Bool_Exp>;
};


export type Subscription_RootNotification_Link_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootNotification_NotificationArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type Subscription_RootNotification_Notification_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type Subscription_RootNotification_Notification_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
};


export type Subscription_RootProfile_AddressArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type Subscription_RootProfile_Address_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type Subscription_RootProfile_Address_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProfile_Address_TypeArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Type_Order_By>>;
  where?: Maybe<Profile_Address_Type_Bool_Exp>;
};


export type Subscription_RootProfile_Address_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Type_Order_By>>;
  where?: Maybe<Profile_Address_Type_Bool_Exp>;
};


export type Subscription_RootProfile_Address_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootProfile_GenderArgs = {
  distinct_on?: Maybe<Array<Profile_Gender_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Gender_Order_By>>;
  where?: Maybe<Profile_Gender_Bool_Exp>;
};


export type Subscription_RootProfile_Gender_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Gender_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Gender_Order_By>>;
  where?: Maybe<Profile_Gender_Bool_Exp>;
};


export type Subscription_RootProfile_Gender_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootProfile_ProfileArgs = {
  distinct_on?: Maybe<Array<Profile_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Profile_Order_By>>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};


export type Subscription_RootProfile_Profile_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Profile_Order_By>>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};


export type Subscription_RootProfile_Profile_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSearch_Geo_CountryArgs = {
  args: Search_Geo_Country_Args;
  distinct_on?: Maybe<Array<Geo_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_Order_By>>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};


export type Subscription_RootSearch_Geo_Country_AggregateArgs = {
  args: Search_Geo_Country_Args;
  distinct_on?: Maybe<Array<Geo_Country_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Country_Order_By>>;
  where?: Maybe<Geo_Country_Bool_Exp>;
};


export type Subscription_RootSearch_Geo_DivisionArgs = {
  args: Search_Geo_Division_Args;
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Subscription_RootSearch_Geo_Division_AggregateArgs = {
  args: Search_Geo_Division_Args;
  distinct_on?: Maybe<Array<Geo_Division_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Division_Order_By>>;
  where?: Maybe<Geo_Division_Bool_Exp>;
};


export type Subscription_RootSearch_Geo_StateArgs = {
  args: Search_Geo_State_Args;
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Subscription_RootSearch_Geo_State_AggregateArgs = {
  args: Search_Geo_State_Args;
  distinct_on?: Maybe<Array<Geo_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_State_Order_By>>;
  where?: Maybe<Geo_State_Bool_Exp>;
};


export type Subscription_RootSearch_Geo_Sub_DistrictArgs = {
  args: Search_Geo_Sub_District_Args;
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Subscription_RootSearch_Geo_Sub_District_AggregateArgs = {
  args: Search_Geo_Sub_District_Args;
  distinct_on?: Maybe<Array<Geo_Sub_District_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Geo_Sub_District_Order_By>>;
  where?: Maybe<Geo_Sub_District_Bool_Exp>;
};


export type Subscription_RootSms_MessageArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Order_By>>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};


export type Subscription_RootSms_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Order_By>>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};


export type Subscription_RootSms_Message_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSms_Message_StatusArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Status_Order_By>>;
  where?: Maybe<Sms_Message_Status_Bool_Exp>;
};


export type Subscription_RootSms_Message_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Status_Order_By>>;
  where?: Maybe<Sms_Message_Status_Bool_Exp>;
};


export type Subscription_RootSms_Message_Status_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootSms_TemplateArgs = {
  distinct_on?: Maybe<Array<Sms_Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Template_Order_By>>;
  where?: Maybe<Sms_Template_Bool_Exp>;
};


export type Subscription_RootSms_Template_AggregateArgs = {
  distinct_on?: Maybe<Array<Sms_Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Template_Order_By>>;
  where?: Maybe<Sms_Template_Bool_Exp>;
};


export type Subscription_RootSms_Template_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootSuspension_CategoryArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Order_By>>;
  where?: Maybe<Suspension_Category_Bool_Exp>;
};


export type Subscription_RootSuspension_Category_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Order_By>>;
  where?: Maybe<Suspension_Category_Bool_Exp>;
};


export type Subscription_RootSuspension_Category_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootSuspension_Category_ReasonArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Reason_Order_By>>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};


export type Subscription_RootSuspension_Category_Reason_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Reason_Order_By>>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};


export type Subscription_RootSuspension_Category_Reason_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootSuspension_ReasonArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_Order_By>>;
  where?: Maybe<Suspension_Reason_Bool_Exp>;
};


export type Subscription_RootSuspension_Reason_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_Order_By>>;
  where?: Maybe<Suspension_Reason_Bool_Exp>;
};


export type Subscription_RootSuspension_Reason_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootSuspension_Reason_I18nArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_I18n_Order_By>>;
  where?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
};


export type Subscription_RootSuspension_Reason_I18n_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_I18n_Order_By>>;
  where?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
};


export type Subscription_RootSuspension_Reason_I18n_By_PkArgs = {
  id: Scalars['smallint'];
};


export type Subscription_RootSuspension_StateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Order_By>>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};


export type Subscription_RootSuspension_State_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Order_By>>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};


export type Subscription_RootSuspension_State_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSuspension_State_ReasonArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Reason_Order_By>>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};


export type Subscription_RootSuspension_State_Reason_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Reason_Order_By>>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};


export type Subscription_RootSuspension_State_Reason_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSuspension_TypeArgs = {
  distinct_on?: Maybe<Array<Suspension_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Type_Order_By>>;
  where?: Maybe<Suspension_Type_Bool_Exp>;
};


export type Subscription_RootSuspension_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Type_Order_By>>;
  where?: Maybe<Suspension_Type_Bool_Exp>;
};


export type Subscription_RootSuspension_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTimescaledb_Information_ChunksArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Chunks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Chunks_Order_By>>;
  where?: Maybe<Timescaledb_Information_Chunks_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Chunks_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Chunks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Chunks_Order_By>>;
  where?: Maybe<Timescaledb_Information_Chunks_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Compression_SettingsArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Compression_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Compression_Settings_Order_By>>;
  where?: Maybe<Timescaledb_Information_Compression_Settings_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Compression_Settings_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Compression_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Compression_Settings_Order_By>>;
  where?: Maybe<Timescaledb_Information_Compression_Settings_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Continuous_AggregatesArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Order_By>>;
  where?: Maybe<Timescaledb_Information_Continuous_Aggregates_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Continuous_Aggregates_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Order_By>>;
  where?: Maybe<Timescaledb_Information_Continuous_Aggregates_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Data_NodesArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Data_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Data_Nodes_Order_By>>;
  where?: Maybe<Timescaledb_Information_Data_Nodes_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Data_Nodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Data_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Data_Nodes_Order_By>>;
  where?: Maybe<Timescaledb_Information_Data_Nodes_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_DimensionsArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Dimensions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Dimensions_Order_By>>;
  where?: Maybe<Timescaledb_Information_Dimensions_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Dimensions_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Dimensions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Dimensions_Order_By>>;
  where?: Maybe<Timescaledb_Information_Dimensions_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_HypertablesArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Hypertables_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Hypertables_Order_By>>;
  where?: Maybe<Timescaledb_Information_Hypertables_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Hypertables_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Hypertables_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Hypertables_Order_By>>;
  where?: Maybe<Timescaledb_Information_Hypertables_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Job_StatsArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Job_Stats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Job_Stats_Order_By>>;
  where?: Maybe<Timescaledb_Information_Job_Stats_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Job_Stats_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Job_Stats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Job_Stats_Order_By>>;
  where?: Maybe<Timescaledb_Information_Job_Stats_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_JobsArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Jobs_Order_By>>;
  where?: Maybe<Timescaledb_Information_Jobs_Bool_Exp>;
};


export type Subscription_RootTimescaledb_Information_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Timescaledb_Information_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timescaledb_Information_Jobs_Order_By>>;
  where?: Maybe<Timescaledb_Information_Jobs_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_TypeArgs = {
  distinct_on?: Maybe<Array<User_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Type_Order_By>>;
  where?: Maybe<User_Type_Bool_Exp>;
};


export type Subscription_RootUser_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Type_Order_By>>;
  where?: Maybe<User_Type_Bool_Exp>;
};


export type Subscription_RootUser_Type_By_PkArgs = {
  value: Scalars['String'];
};

export type Suspension_Category = {
  __typename?: 'suspension_category';
  category_reasons: Array<Suspension_Category_Reason>;
  category_reasons_aggregate: Suspension_Category_Reason_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['smallint'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


export type Suspension_CategoryCategory_ReasonsArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Reason_Order_By>>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};


export type Suspension_CategoryCategory_Reasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Reason_Order_By>>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};

export type Suspension_Category_Aggregate = {
  __typename?: 'suspension_category_aggregate';
  aggregate?: Maybe<Suspension_Category_Aggregate_Fields>;
  nodes: Array<Suspension_Category>;
};

export type Suspension_Category_Aggregate_Fields = {
  __typename?: 'suspension_category_aggregate_fields';
  avg?: Maybe<Suspension_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Suspension_Category_Max_Fields>;
  min?: Maybe<Suspension_Category_Min_Fields>;
  stddev?: Maybe<Suspension_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Suspension_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suspension_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Suspension_Category_Sum_Fields>;
  var_pop?: Maybe<Suspension_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Suspension_Category_Var_Samp_Fields>;
  variance?: Maybe<Suspension_Category_Variance_Fields>;
};


export type Suspension_Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Suspension_Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Suspension_Category_Avg_Fields = {
  __typename?: 'suspension_category_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Bool_Exp = {
  _and?: Maybe<Array<Suspension_Category_Bool_Exp>>;
  _not?: Maybe<Suspension_Category_Bool_Exp>;
  _or?: Maybe<Array<Suspension_Category_Bool_Exp>>;
  category_reasons?: Maybe<Suspension_Category_Reason_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Suspension_Category_Constraint {
  CategoryPkey = 'category_pkey'
}

export type Suspension_Category_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Category_Insert_Input = {
  category_reasons?: Maybe<Suspension_Category_Reason_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Suspension_Category_Max_Fields = {
  __typename?: 'suspension_category_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Suspension_Category_Min_Fields = {
  __typename?: 'suspension_category_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Suspension_Category_Mutation_Response = {
  __typename?: 'suspension_category_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Suspension_Category>;
};

export type Suspension_Category_Obj_Rel_Insert_Input = {
  data: Suspension_Category_Insert_Input;
  on_conflict?: Maybe<Suspension_Category_On_Conflict>;
};

export type Suspension_Category_On_Conflict = {
  constraint: Suspension_Category_Constraint;
  update_columns?: Array<Suspension_Category_Update_Column>;
  where?: Maybe<Suspension_Category_Bool_Exp>;
};

export type Suspension_Category_Order_By = {
  category_reasons_aggregate?: Maybe<Suspension_Category_Reason_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Suspension_Category_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export type Suspension_Category_Reason = {
  __typename?: 'suspension_category_reason';
  category: Suspension_Category;
  category_id: Scalars['smallint'];
  id: Scalars['smallint'];
  reason: Suspension_Reason;
  reason_id: Scalars['smallint'];
};

export type Suspension_Category_Reason_Aggregate = {
  __typename?: 'suspension_category_reason_aggregate';
  aggregate?: Maybe<Suspension_Category_Reason_Aggregate_Fields>;
  nodes: Array<Suspension_Category_Reason>;
};

export type Suspension_Category_Reason_Aggregate_Fields = {
  __typename?: 'suspension_category_reason_aggregate_fields';
  avg?: Maybe<Suspension_Category_Reason_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Suspension_Category_Reason_Max_Fields>;
  min?: Maybe<Suspension_Category_Reason_Min_Fields>;
  stddev?: Maybe<Suspension_Category_Reason_Stddev_Fields>;
  stddev_pop?: Maybe<Suspension_Category_Reason_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suspension_Category_Reason_Stddev_Samp_Fields>;
  sum?: Maybe<Suspension_Category_Reason_Sum_Fields>;
  var_pop?: Maybe<Suspension_Category_Reason_Var_Pop_Fields>;
  var_samp?: Maybe<Suspension_Category_Reason_Var_Samp_Fields>;
  variance?: Maybe<Suspension_Category_Reason_Variance_Fields>;
};


export type Suspension_Category_Reason_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Suspension_Category_Reason_Aggregate_Order_By = {
  avg?: Maybe<Suspension_Category_Reason_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Suspension_Category_Reason_Max_Order_By>;
  min?: Maybe<Suspension_Category_Reason_Min_Order_By>;
  stddev?: Maybe<Suspension_Category_Reason_Stddev_Order_By>;
  stddev_pop?: Maybe<Suspension_Category_Reason_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Suspension_Category_Reason_Stddev_Samp_Order_By>;
  sum?: Maybe<Suspension_Category_Reason_Sum_Order_By>;
  var_pop?: Maybe<Suspension_Category_Reason_Var_Pop_Order_By>;
  var_samp?: Maybe<Suspension_Category_Reason_Var_Samp_Order_By>;
  variance?: Maybe<Suspension_Category_Reason_Variance_Order_By>;
};

export type Suspension_Category_Reason_Arr_Rel_Insert_Input = {
  data: Array<Suspension_Category_Reason_Insert_Input>;
  on_conflict?: Maybe<Suspension_Category_Reason_On_Conflict>;
};

export type Suspension_Category_Reason_Avg_Fields = {
  __typename?: 'suspension_category_reason_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Reason_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Bool_Exp = {
  _and?: Maybe<Array<Suspension_Category_Reason_Bool_Exp>>;
  _not?: Maybe<Suspension_Category_Reason_Bool_Exp>;
  _or?: Maybe<Array<Suspension_Category_Reason_Bool_Exp>>;
  category?: Maybe<Suspension_Category_Bool_Exp>;
  category_id?: Maybe<Smallint_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  reason?: Maybe<Suspension_Reason_Bool_Exp>;
  reason_id?: Maybe<Smallint_Comparison_Exp>;
};

export enum Suspension_Category_Reason_Constraint {
  CategoryReasonCategoryIdReasonIdKey = 'category_reason_category_id_reason_id_key',
  CategoryReasonPkey = 'category_reason_pkey'
}

export type Suspension_Category_Reason_Inc_Input = {
  category_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Category_Reason_Insert_Input = {
  category?: Maybe<Suspension_Category_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
  reason?: Maybe<Suspension_Reason_Obj_Rel_Insert_Input>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Category_Reason_Max_Fields = {
  __typename?: 'suspension_category_reason_max_fields';
  category_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Category_Reason_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Min_Fields = {
  __typename?: 'suspension_category_reason_min_fields';
  category_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Category_Reason_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Mutation_Response = {
  __typename?: 'suspension_category_reason_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Suspension_Category_Reason>;
};

export type Suspension_Category_Reason_On_Conflict = {
  constraint: Suspension_Category_Reason_Constraint;
  update_columns?: Array<Suspension_Category_Reason_Update_Column>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};

export type Suspension_Category_Reason_Order_By = {
  category?: Maybe<Suspension_Category_Order_By>;
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason?: Maybe<Suspension_Reason_Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Suspension_Category_Reason_Select_Column {
  CategoryId = 'category_id',
  Id = 'id',
  ReasonId = 'reason_id'
}

export type Suspension_Category_Reason_Set_Input = {
  category_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Category_Reason_Stddev_Fields = {
  __typename?: 'suspension_category_reason_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Reason_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Stddev_Pop_Fields = {
  __typename?: 'suspension_category_reason_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Reason_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Stddev_Samp_Fields = {
  __typename?: 'suspension_category_reason_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Reason_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Sum_Fields = {
  __typename?: 'suspension_category_reason_sum_fields';
  category_id?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['smallint']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Category_Reason_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export enum Suspension_Category_Reason_Update_Column {
  CategoryId = 'category_id',
  Id = 'id',
  ReasonId = 'reason_id'
}

export type Suspension_Category_Reason_Var_Pop_Fields = {
  __typename?: 'suspension_category_reason_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Reason_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Var_Samp_Fields = {
  __typename?: 'suspension_category_reason_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Reason_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Category_Reason_Variance_Fields = {
  __typename?: 'suspension_category_reason_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Reason_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export enum Suspension_Category_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Suspension_Category_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Suspension_Category_Stddev_Fields = {
  __typename?: 'suspension_category_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Stddev_Pop_Fields = {
  __typename?: 'suspension_category_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Stddev_Samp_Fields = {
  __typename?: 'suspension_category_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Sum_Fields = {
  __typename?: 'suspension_category_sum_fields';
  id?: Maybe<Scalars['smallint']>;
};

export enum Suspension_Category_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Suspension_Category_Var_Pop_Fields = {
  __typename?: 'suspension_category_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Var_Samp_Fields = {
  __typename?: 'suspension_category_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Category_Variance_Fields = {
  __typename?: 'suspension_category_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason = {
  __typename?: 'suspension_reason';
  category_reasons: Array<Suspension_Category_Reason>;
  category_reasons_aggregate: Suspension_Category_Reason_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['smallint'];
  internal: Scalars['Boolean'];
  reason_i18ns: Array<Suspension_Reason_I18n>;
  reason_i18ns_aggregate: Suspension_Reason_I18n_Aggregate;
  state_reasons: Array<Suspension_State_Reason>;
  state_reasons_aggregate: Suspension_State_Reason_Aggregate;
  updated_at: Scalars['timestamptz'];
};


export type Suspension_ReasonCategory_ReasonsArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Reason_Order_By>>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};


export type Suspension_ReasonCategory_Reasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Category_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Category_Reason_Order_By>>;
  where?: Maybe<Suspension_Category_Reason_Bool_Exp>;
};


export type Suspension_ReasonReason_I18nsArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_I18n_Order_By>>;
  where?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
};


export type Suspension_ReasonReason_I18ns_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_Reason_I18n_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_Reason_I18n_Order_By>>;
  where?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
};


export type Suspension_ReasonState_ReasonsArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Reason_Order_By>>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};


export type Suspension_ReasonState_Reasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Reason_Order_By>>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};

export type Suspension_Reason_Aggregate = {
  __typename?: 'suspension_reason_aggregate';
  aggregate?: Maybe<Suspension_Reason_Aggregate_Fields>;
  nodes: Array<Suspension_Reason>;
};

export type Suspension_Reason_Aggregate_Fields = {
  __typename?: 'suspension_reason_aggregate_fields';
  avg?: Maybe<Suspension_Reason_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Suspension_Reason_Max_Fields>;
  min?: Maybe<Suspension_Reason_Min_Fields>;
  stddev?: Maybe<Suspension_Reason_Stddev_Fields>;
  stddev_pop?: Maybe<Suspension_Reason_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suspension_Reason_Stddev_Samp_Fields>;
  sum?: Maybe<Suspension_Reason_Sum_Fields>;
  var_pop?: Maybe<Suspension_Reason_Var_Pop_Fields>;
  var_samp?: Maybe<Suspension_Reason_Var_Samp_Fields>;
  variance?: Maybe<Suspension_Reason_Variance_Fields>;
};


export type Suspension_Reason_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Suspension_Reason_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Suspension_Reason_Avg_Fields = {
  __typename?: 'suspension_reason_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_Bool_Exp = {
  _and?: Maybe<Array<Suspension_Reason_Bool_Exp>>;
  _not?: Maybe<Suspension_Reason_Bool_Exp>;
  _or?: Maybe<Array<Suspension_Reason_Bool_Exp>>;
  category_reasons?: Maybe<Suspension_Category_Reason_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  internal?: Maybe<Boolean_Comparison_Exp>;
  reason_i18ns?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
  state_reasons?: Maybe<Suspension_State_Reason_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Suspension_Reason_Constraint {
  ReasonPkey = 'reason_pkey'
}

export type Suspension_Reason_I18n = {
  __typename?: 'suspension_reason_i18n';
  description: Scalars['String'];
  id: Scalars['smallint'];
  lang: Scalars['smallint'];
  name: Scalars['String'];
  reason: Suspension_Reason;
  reason_id: Scalars['smallint'];
};

export type Suspension_Reason_I18n_Aggregate = {
  __typename?: 'suspension_reason_i18n_aggregate';
  aggregate?: Maybe<Suspension_Reason_I18n_Aggregate_Fields>;
  nodes: Array<Suspension_Reason_I18n>;
};

export type Suspension_Reason_I18n_Aggregate_Fields = {
  __typename?: 'suspension_reason_i18n_aggregate_fields';
  avg?: Maybe<Suspension_Reason_I18n_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Suspension_Reason_I18n_Max_Fields>;
  min?: Maybe<Suspension_Reason_I18n_Min_Fields>;
  stddev?: Maybe<Suspension_Reason_I18n_Stddev_Fields>;
  stddev_pop?: Maybe<Suspension_Reason_I18n_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suspension_Reason_I18n_Stddev_Samp_Fields>;
  sum?: Maybe<Suspension_Reason_I18n_Sum_Fields>;
  var_pop?: Maybe<Suspension_Reason_I18n_Var_Pop_Fields>;
  var_samp?: Maybe<Suspension_Reason_I18n_Var_Samp_Fields>;
  variance?: Maybe<Suspension_Reason_I18n_Variance_Fields>;
};


export type Suspension_Reason_I18n_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Suspension_Reason_I18n_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Suspension_Reason_I18n_Aggregate_Order_By = {
  avg?: Maybe<Suspension_Reason_I18n_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Suspension_Reason_I18n_Max_Order_By>;
  min?: Maybe<Suspension_Reason_I18n_Min_Order_By>;
  stddev?: Maybe<Suspension_Reason_I18n_Stddev_Order_By>;
  stddev_pop?: Maybe<Suspension_Reason_I18n_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Suspension_Reason_I18n_Stddev_Samp_Order_By>;
  sum?: Maybe<Suspension_Reason_I18n_Sum_Order_By>;
  var_pop?: Maybe<Suspension_Reason_I18n_Var_Pop_Order_By>;
  var_samp?: Maybe<Suspension_Reason_I18n_Var_Samp_Order_By>;
  variance?: Maybe<Suspension_Reason_I18n_Variance_Order_By>;
};

export type Suspension_Reason_I18n_Arr_Rel_Insert_Input = {
  data: Array<Suspension_Reason_I18n_Insert_Input>;
  on_conflict?: Maybe<Suspension_Reason_I18n_On_Conflict>;
};

export type Suspension_Reason_I18n_Avg_Fields = {
  __typename?: 'suspension_reason_i18n_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_I18n_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Bool_Exp = {
  _and?: Maybe<Array<Suspension_Reason_I18n_Bool_Exp>>;
  _not?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
  _or?: Maybe<Array<Suspension_Reason_I18n_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Smallint_Comparison_Exp>;
  lang?: Maybe<Smallint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  reason?: Maybe<Suspension_Reason_Bool_Exp>;
  reason_id?: Maybe<Smallint_Comparison_Exp>;
};

export enum Suspension_Reason_I18n_Constraint {
  ReasonI18nPkey = 'reason_i18n_pkey',
  ReasonI18nReasonIdLangKey = 'reason_i18n_reason_id_lang_key'
}

export type Suspension_Reason_I18n_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Reason_I18n_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  reason?: Maybe<Suspension_Reason_Obj_Rel_Insert_Input>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Reason_I18n_Max_Fields = {
  __typename?: 'suspension_reason_i18n_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Reason_I18n_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Min_Fields = {
  __typename?: 'suspension_reason_i18n_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Reason_I18n_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Mutation_Response = {
  __typename?: 'suspension_reason_i18n_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Suspension_Reason_I18n>;
};

export type Suspension_Reason_I18n_On_Conflict = {
  constraint: Suspension_Reason_I18n_Constraint;
  update_columns?: Array<Suspension_Reason_I18n_Update_Column>;
  where?: Maybe<Suspension_Reason_I18n_Bool_Exp>;
};

export type Suspension_Reason_I18n_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  reason?: Maybe<Suspension_Reason_Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Suspension_Reason_I18n_Select_Column {
  Description = 'description',
  Id = 'id',
  Lang = 'lang',
  Name = 'name',
  ReasonId = 'reason_id'
}

export type Suspension_Reason_I18n_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  name?: Maybe<Scalars['String']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Reason_I18n_Stddev_Fields = {
  __typename?: 'suspension_reason_i18n_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_I18n_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Stddev_Pop_Fields = {
  __typename?: 'suspension_reason_i18n_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_I18n_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Stddev_Samp_Fields = {
  __typename?: 'suspension_reason_i18n_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_I18n_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Sum_Fields = {
  __typename?: 'suspension_reason_i18n_sum_fields';
  id?: Maybe<Scalars['smallint']>;
  lang?: Maybe<Scalars['smallint']>;
  reason_id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Reason_I18n_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export enum Suspension_Reason_I18n_Update_Column {
  Description = 'description',
  Id = 'id',
  Lang = 'lang',
  Name = 'name',
  ReasonId = 'reason_id'
}

export type Suspension_Reason_I18n_Var_Pop_Fields = {
  __typename?: 'suspension_reason_i18n_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_I18n_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Var_Samp_Fields = {
  __typename?: 'suspension_reason_i18n_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_I18n_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_I18n_Variance_Fields = {
  __typename?: 'suspension_reason_i18n_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lang?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_I18n_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lang?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
};

export type Suspension_Reason_Inc_Input = {
  id?: Maybe<Scalars['smallint']>;
};

export type Suspension_Reason_Insert_Input = {
  category_reasons?: Maybe<Suspension_Category_Reason_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  internal?: Maybe<Scalars['Boolean']>;
  reason_i18ns?: Maybe<Suspension_Reason_I18n_Arr_Rel_Insert_Input>;
  state_reasons?: Maybe<Suspension_State_Reason_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Suspension_Reason_Max_Fields = {
  __typename?: 'suspension_reason_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Suspension_Reason_Min_Fields = {
  __typename?: 'suspension_reason_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Suspension_Reason_Mutation_Response = {
  __typename?: 'suspension_reason_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Suspension_Reason>;
};

export type Suspension_Reason_Obj_Rel_Insert_Input = {
  data: Suspension_Reason_Insert_Input;
  on_conflict?: Maybe<Suspension_Reason_On_Conflict>;
};

export type Suspension_Reason_On_Conflict = {
  constraint: Suspension_Reason_Constraint;
  update_columns?: Array<Suspension_Reason_Update_Column>;
  where?: Maybe<Suspension_Reason_Bool_Exp>;
};

export type Suspension_Reason_Order_By = {
  category_reasons_aggregate?: Maybe<Suspension_Category_Reason_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  internal?: Maybe<Order_By>;
  reason_i18ns_aggregate?: Maybe<Suspension_Reason_I18n_Aggregate_Order_By>;
  state_reasons_aggregate?: Maybe<Suspension_State_Reason_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Suspension_Reason_Pk_Columns_Input = {
  id: Scalars['smallint'];
};

export enum Suspension_Reason_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Internal = 'internal',
  UpdatedAt = 'updated_at'
}

export type Suspension_Reason_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['smallint']>;
  internal?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Suspension_Reason_Stddev_Fields = {
  __typename?: 'suspension_reason_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_Stddev_Pop_Fields = {
  __typename?: 'suspension_reason_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_Stddev_Samp_Fields = {
  __typename?: 'suspension_reason_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_Sum_Fields = {
  __typename?: 'suspension_reason_sum_fields';
  id?: Maybe<Scalars['smallint']>;
};

export enum Suspension_Reason_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Internal = 'internal',
  UpdatedAt = 'updated_at'
}

export type Suspension_Reason_Var_Pop_Fields = {
  __typename?: 'suspension_reason_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_Var_Samp_Fields = {
  __typename?: 'suspension_reason_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_Reason_Variance_Fields = {
  __typename?: 'suspension_reason_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Suspension_State = {
  __typename?: 'suspension_state';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  state_reasons: Array<Suspension_State_Reason>;
  state_reasons_aggregate: Suspension_State_Reason_Aggregate;
  till?: Maybe<Scalars['timestamptz']>;
  type: Suspension_Type_Enum;
  typeByType: Suspension_Type;
  user: User;
  user_id: Scalars['Int'];
};


export type Suspension_StateState_ReasonsArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Reason_Order_By>>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};


export type Suspension_StateState_Reasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Reason_Order_By>>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};

export type Suspension_State_Aggregate = {
  __typename?: 'suspension_state_aggregate';
  aggregate?: Maybe<Suspension_State_Aggregate_Fields>;
  nodes: Array<Suspension_State>;
};

export type Suspension_State_Aggregate_Fields = {
  __typename?: 'suspension_state_aggregate_fields';
  avg?: Maybe<Suspension_State_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Suspension_State_Max_Fields>;
  min?: Maybe<Suspension_State_Min_Fields>;
  stddev?: Maybe<Suspension_State_Stddev_Fields>;
  stddev_pop?: Maybe<Suspension_State_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suspension_State_Stddev_Samp_Fields>;
  sum?: Maybe<Suspension_State_Sum_Fields>;
  var_pop?: Maybe<Suspension_State_Var_Pop_Fields>;
  var_samp?: Maybe<Suspension_State_Var_Samp_Fields>;
  variance?: Maybe<Suspension_State_Variance_Fields>;
};


export type Suspension_State_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Suspension_State_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Suspension_State_Aggregate_Order_By = {
  avg?: Maybe<Suspension_State_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Suspension_State_Max_Order_By>;
  min?: Maybe<Suspension_State_Min_Order_By>;
  stddev?: Maybe<Suspension_State_Stddev_Order_By>;
  stddev_pop?: Maybe<Suspension_State_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Suspension_State_Stddev_Samp_Order_By>;
  sum?: Maybe<Suspension_State_Sum_Order_By>;
  var_pop?: Maybe<Suspension_State_Var_Pop_Order_By>;
  var_samp?: Maybe<Suspension_State_Var_Samp_Order_By>;
  variance?: Maybe<Suspension_State_Variance_Order_By>;
};

export type Suspension_State_Arr_Rel_Insert_Input = {
  data: Array<Suspension_State_Insert_Input>;
  on_conflict?: Maybe<Suspension_State_On_Conflict>;
};

export type Suspension_State_Avg_Fields = {
  __typename?: 'suspension_state_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Avg_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Bool_Exp = {
  _and?: Maybe<Array<Suspension_State_Bool_Exp>>;
  _not?: Maybe<Suspension_State_Bool_Exp>;
  _or?: Maybe<Array<Suspension_State_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  state_reasons?: Maybe<Suspension_State_Reason_Bool_Exp>;
  till?: Maybe<Timestamptz_Comparison_Exp>;
  type?: Maybe<Suspension_Type_Enum_Comparison_Exp>;
  typeByType?: Maybe<Suspension_Type_Bool_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

export enum Suspension_State_Constraint {
  StatePkey = 'state_pkey',
  StateUserIdTypeKey = 'state_user_id_type_key'
}

export type Suspension_State_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  state_reasons?: Maybe<Suspension_State_Reason_Arr_Rel_Insert_Input>;
  till?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Suspension_Type_Enum>;
  typeByType?: Maybe<Suspension_Type_Obj_Rel_Insert_Input>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Max_Fields = {
  __typename?: 'suspension_state_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  till?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  till?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Min_Fields = {
  __typename?: 'suspension_state_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  till?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  till?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Mutation_Response = {
  __typename?: 'suspension_state_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Suspension_State>;
};

export type Suspension_State_Obj_Rel_Insert_Input = {
  data: Suspension_State_Insert_Input;
  on_conflict?: Maybe<Suspension_State_On_Conflict>;
};

export type Suspension_State_On_Conflict = {
  constraint: Suspension_State_Constraint;
  update_columns?: Array<Suspension_State_Update_Column>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};

export type Suspension_State_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  state_reasons_aggregate?: Maybe<Suspension_State_Reason_Aggregate_Order_By>;
  till?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  typeByType?: Maybe<Suspension_Type_Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export type Suspension_State_Reason = {
  __typename?: 'suspension_state_reason';
  id: Scalars['Int'];
  reason: Suspension_Reason;
  reason_id: Scalars['smallint'];
  state: Suspension_State;
  state_id: Scalars['Int'];
};

export type Suspension_State_Reason_Aggregate = {
  __typename?: 'suspension_state_reason_aggregate';
  aggregate?: Maybe<Suspension_State_Reason_Aggregate_Fields>;
  nodes: Array<Suspension_State_Reason>;
};

export type Suspension_State_Reason_Aggregate_Fields = {
  __typename?: 'suspension_state_reason_aggregate_fields';
  avg?: Maybe<Suspension_State_Reason_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Suspension_State_Reason_Max_Fields>;
  min?: Maybe<Suspension_State_Reason_Min_Fields>;
  stddev?: Maybe<Suspension_State_Reason_Stddev_Fields>;
  stddev_pop?: Maybe<Suspension_State_Reason_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suspension_State_Reason_Stddev_Samp_Fields>;
  sum?: Maybe<Suspension_State_Reason_Sum_Fields>;
  var_pop?: Maybe<Suspension_State_Reason_Var_Pop_Fields>;
  var_samp?: Maybe<Suspension_State_Reason_Var_Samp_Fields>;
  variance?: Maybe<Suspension_State_Reason_Variance_Fields>;
};


export type Suspension_State_Reason_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Suspension_State_Reason_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Suspension_State_Reason_Aggregate_Order_By = {
  avg?: Maybe<Suspension_State_Reason_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Suspension_State_Reason_Max_Order_By>;
  min?: Maybe<Suspension_State_Reason_Min_Order_By>;
  stddev?: Maybe<Suspension_State_Reason_Stddev_Order_By>;
  stddev_pop?: Maybe<Suspension_State_Reason_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Suspension_State_Reason_Stddev_Samp_Order_By>;
  sum?: Maybe<Suspension_State_Reason_Sum_Order_By>;
  var_pop?: Maybe<Suspension_State_Reason_Var_Pop_Order_By>;
  var_samp?: Maybe<Suspension_State_Reason_Var_Samp_Order_By>;
  variance?: Maybe<Suspension_State_Reason_Variance_Order_By>;
};

export type Suspension_State_Reason_Arr_Rel_Insert_Input = {
  data: Array<Suspension_State_Reason_Insert_Input>;
  on_conflict?: Maybe<Suspension_State_Reason_On_Conflict>;
};

export type Suspension_State_Reason_Avg_Fields = {
  __typename?: 'suspension_state_reason_avg_fields';
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Reason_Avg_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Bool_Exp = {
  _and?: Maybe<Array<Suspension_State_Reason_Bool_Exp>>;
  _not?: Maybe<Suspension_State_Reason_Bool_Exp>;
  _or?: Maybe<Array<Suspension_State_Reason_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  reason?: Maybe<Suspension_Reason_Bool_Exp>;
  reason_id?: Maybe<Smallint_Comparison_Exp>;
  state?: Maybe<Suspension_State_Bool_Exp>;
  state_id?: Maybe<Int_Comparison_Exp>;
};

export enum Suspension_State_Reason_Constraint {
  StateReasonPkey = 'state_reason_pkey',
  StateReasonReasonIdStateIdKey = 'state_reason_reason_id_state_id_key'
}

export type Suspension_State_Reason_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  reason_id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Reason_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  reason?: Maybe<Suspension_Reason_Obj_Rel_Insert_Input>;
  reason_id?: Maybe<Scalars['smallint']>;
  state?: Maybe<Suspension_State_Obj_Rel_Insert_Input>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Reason_Max_Fields = {
  __typename?: 'suspension_state_reason_max_fields';
  id?: Maybe<Scalars['Int']>;
  reason_id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Reason_Max_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Min_Fields = {
  __typename?: 'suspension_state_reason_min_fields';
  id?: Maybe<Scalars['Int']>;
  reason_id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Reason_Min_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Mutation_Response = {
  __typename?: 'suspension_state_reason_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Suspension_State_Reason>;
};

export type Suspension_State_Reason_On_Conflict = {
  constraint: Suspension_State_Reason_Constraint;
  update_columns?: Array<Suspension_State_Reason_Update_Column>;
  where?: Maybe<Suspension_State_Reason_Bool_Exp>;
};

export type Suspension_State_Reason_Order_By = {
  id?: Maybe<Order_By>;
  reason?: Maybe<Suspension_Reason_Order_By>;
  reason_id?: Maybe<Order_By>;
  state?: Maybe<Suspension_State_Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum Suspension_State_Reason_Select_Column {
  Id = 'id',
  ReasonId = 'reason_id',
  StateId = 'state_id'
}

export type Suspension_State_Reason_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  reason_id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Reason_Stddev_Fields = {
  __typename?: 'suspension_state_reason_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Reason_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Stddev_Pop_Fields = {
  __typename?: 'suspension_state_reason_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Reason_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Stddev_Samp_Fields = {
  __typename?: 'suspension_state_reason_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Reason_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Sum_Fields = {
  __typename?: 'suspension_state_reason_sum_fields';
  id?: Maybe<Scalars['Int']>;
  reason_id?: Maybe<Scalars['smallint']>;
  state_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Reason_Sum_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export enum Suspension_State_Reason_Update_Column {
  Id = 'id',
  ReasonId = 'reason_id',
  StateId = 'state_id'
}

export type Suspension_State_Reason_Var_Pop_Fields = {
  __typename?: 'suspension_state_reason_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Reason_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Var_Samp_Fields = {
  __typename?: 'suspension_state_reason_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Reason_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export type Suspension_State_Reason_Variance_Fields = {
  __typename?: 'suspension_state_reason_variance_fields';
  id?: Maybe<Scalars['Float']>;
  reason_id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Reason_Variance_Order_By = {
  id?: Maybe<Order_By>;
  reason_id?: Maybe<Order_By>;
  state_id?: Maybe<Order_By>;
};

export enum Suspension_State_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Till = 'till',
  Type = 'type',
  UserId = 'user_id'
}

export type Suspension_State_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  till?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Suspension_Type_Enum>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Stddev_Fields = {
  __typename?: 'suspension_state_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Stddev_Pop_Fields = {
  __typename?: 'suspension_state_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Stddev_Samp_Fields = {
  __typename?: 'suspension_state_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Sum_Fields = {
  __typename?: 'suspension_state_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type Suspension_State_Sum_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Suspension_State_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Till = 'till',
  Type = 'type',
  UserId = 'user_id'
}

export type Suspension_State_Var_Pop_Fields = {
  __typename?: 'suspension_state_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Var_Samp_Fields = {
  __typename?: 'suspension_state_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_State_Variance_Fields = {
  __typename?: 'suspension_state_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type Suspension_State_Variance_Order_By = {
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Suspension_Type = {
  __typename?: 'suspension_type';
  states: Array<Suspension_State>;
  states_aggregate: Suspension_State_Aggregate;
  value: Scalars['String'];
};


export type Suspension_TypeStatesArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Order_By>>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};


export type Suspension_TypeStates_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Order_By>>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};

export type Suspension_Type_Aggregate = {
  __typename?: 'suspension_type_aggregate';
  aggregate?: Maybe<Suspension_Type_Aggregate_Fields>;
  nodes: Array<Suspension_Type>;
};

export type Suspension_Type_Aggregate_Fields = {
  __typename?: 'suspension_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Suspension_Type_Max_Fields>;
  min?: Maybe<Suspension_Type_Min_Fields>;
};


export type Suspension_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Suspension_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Suspension_Type_Bool_Exp = {
  _and?: Maybe<Array<Suspension_Type_Bool_Exp>>;
  _not?: Maybe<Suspension_Type_Bool_Exp>;
  _or?: Maybe<Array<Suspension_Type_Bool_Exp>>;
  states?: Maybe<Suspension_State_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Suspension_Type_Constraint {
  TypePkey = 'type_pkey'
}

export enum Suspension_Type_Enum {
  Deleted = 'DELETED',
  Disabled = 'DISABLED',
  Suspended = 'SUSPENDED'
}

export type Suspension_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Suspension_Type_Enum>;
  _in?: Maybe<Array<Suspension_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Suspension_Type_Enum>;
  _nin?: Maybe<Array<Suspension_Type_Enum>>;
};

export type Suspension_Type_Insert_Input = {
  states?: Maybe<Suspension_State_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type Suspension_Type_Max_Fields = {
  __typename?: 'suspension_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Suspension_Type_Min_Fields = {
  __typename?: 'suspension_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Suspension_Type_Mutation_Response = {
  __typename?: 'suspension_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Suspension_Type>;
};

export type Suspension_Type_Obj_Rel_Insert_Input = {
  data: Suspension_Type_Insert_Input;
  on_conflict?: Maybe<Suspension_Type_On_Conflict>;
};

export type Suspension_Type_On_Conflict = {
  constraint: Suspension_Type_Constraint;
  update_columns?: Array<Suspension_Type_Update_Column>;
  where?: Maybe<Suspension_Type_Bool_Exp>;
};

export type Suspension_Type_Order_By = {
  states_aggregate?: Maybe<Suspension_State_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type Suspension_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum Suspension_Type_Select_Column {
  Value = 'value'
}

export type Suspension_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Suspension_Type_Update_Column {
  Value = 'value'
}

export type Timescaledb_Information_Chunks = {
  __typename?: 'timescaledb_information_chunks';
  chunk_name?: Maybe<Scalars['name']>;
  chunk_schema?: Maybe<Scalars['name']>;
  chunk_tablespace?: Maybe<Scalars['name']>;
  data_nodes?: Maybe<Scalars['_name']>;
  hypertable_name?: Maybe<Scalars['name']>;
  hypertable_schema?: Maybe<Scalars['name']>;
  is_compressed?: Maybe<Scalars['Boolean']>;
  primary_dimension?: Maybe<Scalars['name']>;
  primary_dimension_type?: Maybe<Scalars['regtype']>;
  range_end?: Maybe<Scalars['timestamptz']>;
  range_end_integer?: Maybe<Scalars['bigint']>;
  range_start?: Maybe<Scalars['timestamptz']>;
  range_start_integer?: Maybe<Scalars['bigint']>;
};

export type Timescaledb_Information_Chunks_Aggregate = {
  __typename?: 'timescaledb_information_chunks_aggregate';
  aggregate?: Maybe<Timescaledb_Information_Chunks_Aggregate_Fields>;
  nodes: Array<Timescaledb_Information_Chunks>;
};

export type Timescaledb_Information_Chunks_Aggregate_Fields = {
  __typename?: 'timescaledb_information_chunks_aggregate_fields';
  avg?: Maybe<Timescaledb_Information_Chunks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Timescaledb_Information_Chunks_Max_Fields>;
  min?: Maybe<Timescaledb_Information_Chunks_Min_Fields>;
  stddev?: Maybe<Timescaledb_Information_Chunks_Stddev_Fields>;
  stddev_pop?: Maybe<Timescaledb_Information_Chunks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Timescaledb_Information_Chunks_Stddev_Samp_Fields>;
  sum?: Maybe<Timescaledb_Information_Chunks_Sum_Fields>;
  var_pop?: Maybe<Timescaledb_Information_Chunks_Var_Pop_Fields>;
  var_samp?: Maybe<Timescaledb_Information_Chunks_Var_Samp_Fields>;
  variance?: Maybe<Timescaledb_Information_Chunks_Variance_Fields>;
};


export type Timescaledb_Information_Chunks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timescaledb_Information_Chunks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Timescaledb_Information_Chunks_Avg_Fields = {
  __typename?: 'timescaledb_information_chunks_avg_fields';
  range_end_integer?: Maybe<Scalars['Float']>;
  range_start_integer?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Chunks_Bool_Exp = {
  _and?: Maybe<Array<Timescaledb_Information_Chunks_Bool_Exp>>;
  _not?: Maybe<Timescaledb_Information_Chunks_Bool_Exp>;
  _or?: Maybe<Array<Timescaledb_Information_Chunks_Bool_Exp>>;
  chunk_name?: Maybe<Name_Comparison_Exp>;
  chunk_schema?: Maybe<Name_Comparison_Exp>;
  chunk_tablespace?: Maybe<Name_Comparison_Exp>;
  data_nodes?: Maybe<_Name_Comparison_Exp>;
  hypertable_name?: Maybe<Name_Comparison_Exp>;
  hypertable_schema?: Maybe<Name_Comparison_Exp>;
  is_compressed?: Maybe<Boolean_Comparison_Exp>;
  primary_dimension?: Maybe<Name_Comparison_Exp>;
  primary_dimension_type?: Maybe<Regtype_Comparison_Exp>;
  range_end?: Maybe<Timestamptz_Comparison_Exp>;
  range_end_integer?: Maybe<Bigint_Comparison_Exp>;
  range_start?: Maybe<Timestamptz_Comparison_Exp>;
  range_start_integer?: Maybe<Bigint_Comparison_Exp>;
};

export type Timescaledb_Information_Chunks_Max_Fields = {
  __typename?: 'timescaledb_information_chunks_max_fields';
  range_end?: Maybe<Scalars['timestamptz']>;
  range_end_integer?: Maybe<Scalars['bigint']>;
  range_start?: Maybe<Scalars['timestamptz']>;
  range_start_integer?: Maybe<Scalars['bigint']>;
};

export type Timescaledb_Information_Chunks_Min_Fields = {
  __typename?: 'timescaledb_information_chunks_min_fields';
  range_end?: Maybe<Scalars['timestamptz']>;
  range_end_integer?: Maybe<Scalars['bigint']>;
  range_start?: Maybe<Scalars['timestamptz']>;
  range_start_integer?: Maybe<Scalars['bigint']>;
};

export type Timescaledb_Information_Chunks_Order_By = {
  chunk_name?: Maybe<Order_By>;
  chunk_schema?: Maybe<Order_By>;
  chunk_tablespace?: Maybe<Order_By>;
  data_nodes?: Maybe<Order_By>;
  hypertable_name?: Maybe<Order_By>;
  hypertable_schema?: Maybe<Order_By>;
  is_compressed?: Maybe<Order_By>;
  primary_dimension?: Maybe<Order_By>;
  primary_dimension_type?: Maybe<Order_By>;
  range_end?: Maybe<Order_By>;
  range_end_integer?: Maybe<Order_By>;
  range_start?: Maybe<Order_By>;
  range_start_integer?: Maybe<Order_By>;
};

export enum Timescaledb_Information_Chunks_Select_Column {
  ChunkName = 'chunk_name',
  ChunkSchema = 'chunk_schema',
  ChunkTablespace = 'chunk_tablespace',
  DataNodes = 'data_nodes',
  HypertableName = 'hypertable_name',
  HypertableSchema = 'hypertable_schema',
  IsCompressed = 'is_compressed',
  PrimaryDimension = 'primary_dimension',
  PrimaryDimensionType = 'primary_dimension_type',
  RangeEnd = 'range_end',
  RangeEndInteger = 'range_end_integer',
  RangeStart = 'range_start',
  RangeStartInteger = 'range_start_integer'
}

export type Timescaledb_Information_Chunks_Stddev_Fields = {
  __typename?: 'timescaledb_information_chunks_stddev_fields';
  range_end_integer?: Maybe<Scalars['Float']>;
  range_start_integer?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Chunks_Stddev_Pop_Fields = {
  __typename?: 'timescaledb_information_chunks_stddev_pop_fields';
  range_end_integer?: Maybe<Scalars['Float']>;
  range_start_integer?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Chunks_Stddev_Samp_Fields = {
  __typename?: 'timescaledb_information_chunks_stddev_samp_fields';
  range_end_integer?: Maybe<Scalars['Float']>;
  range_start_integer?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Chunks_Sum_Fields = {
  __typename?: 'timescaledb_information_chunks_sum_fields';
  range_end_integer?: Maybe<Scalars['bigint']>;
  range_start_integer?: Maybe<Scalars['bigint']>;
};

export type Timescaledb_Information_Chunks_Var_Pop_Fields = {
  __typename?: 'timescaledb_information_chunks_var_pop_fields';
  range_end_integer?: Maybe<Scalars['Float']>;
  range_start_integer?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Chunks_Var_Samp_Fields = {
  __typename?: 'timescaledb_information_chunks_var_samp_fields';
  range_end_integer?: Maybe<Scalars['Float']>;
  range_start_integer?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Chunks_Variance_Fields = {
  __typename?: 'timescaledb_information_chunks_variance_fields';
  range_end_integer?: Maybe<Scalars['Float']>;
  range_start_integer?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Compression_Settings = {
  __typename?: 'timescaledb_information_compression_settings';
  attname?: Maybe<Scalars['name']>;
  hypertable_name?: Maybe<Scalars['name']>;
  hypertable_schema?: Maybe<Scalars['name']>;
  orderby_asc?: Maybe<Scalars['Boolean']>;
  orderby_column_index?: Maybe<Scalars['smallint']>;
  orderby_nullsfirst?: Maybe<Scalars['Boolean']>;
  segmentby_column_index?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Compression_Settings_Aggregate = {
  __typename?: 'timescaledb_information_compression_settings_aggregate';
  aggregate?: Maybe<Timescaledb_Information_Compression_Settings_Aggregate_Fields>;
  nodes: Array<Timescaledb_Information_Compression_Settings>;
};

export type Timescaledb_Information_Compression_Settings_Aggregate_Fields = {
  __typename?: 'timescaledb_information_compression_settings_aggregate_fields';
  avg?: Maybe<Timescaledb_Information_Compression_Settings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Timescaledb_Information_Compression_Settings_Max_Fields>;
  min?: Maybe<Timescaledb_Information_Compression_Settings_Min_Fields>;
  stddev?: Maybe<Timescaledb_Information_Compression_Settings_Stddev_Fields>;
  stddev_pop?: Maybe<Timescaledb_Information_Compression_Settings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Timescaledb_Information_Compression_Settings_Stddev_Samp_Fields>;
  sum?: Maybe<Timescaledb_Information_Compression_Settings_Sum_Fields>;
  var_pop?: Maybe<Timescaledb_Information_Compression_Settings_Var_Pop_Fields>;
  var_samp?: Maybe<Timescaledb_Information_Compression_Settings_Var_Samp_Fields>;
  variance?: Maybe<Timescaledb_Information_Compression_Settings_Variance_Fields>;
};


export type Timescaledb_Information_Compression_Settings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timescaledb_Information_Compression_Settings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Timescaledb_Information_Compression_Settings_Avg_Fields = {
  __typename?: 'timescaledb_information_compression_settings_avg_fields';
  orderby_column_index?: Maybe<Scalars['Float']>;
  segmentby_column_index?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Compression_Settings_Bool_Exp = {
  _and?: Maybe<Array<Timescaledb_Information_Compression_Settings_Bool_Exp>>;
  _not?: Maybe<Timescaledb_Information_Compression_Settings_Bool_Exp>;
  _or?: Maybe<Array<Timescaledb_Information_Compression_Settings_Bool_Exp>>;
  attname?: Maybe<Name_Comparison_Exp>;
  hypertable_name?: Maybe<Name_Comparison_Exp>;
  hypertable_schema?: Maybe<Name_Comparison_Exp>;
  orderby_asc?: Maybe<Boolean_Comparison_Exp>;
  orderby_column_index?: Maybe<Smallint_Comparison_Exp>;
  orderby_nullsfirst?: Maybe<Boolean_Comparison_Exp>;
  segmentby_column_index?: Maybe<Smallint_Comparison_Exp>;
};

export type Timescaledb_Information_Compression_Settings_Max_Fields = {
  __typename?: 'timescaledb_information_compression_settings_max_fields';
  orderby_column_index?: Maybe<Scalars['smallint']>;
  segmentby_column_index?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Compression_Settings_Min_Fields = {
  __typename?: 'timescaledb_information_compression_settings_min_fields';
  orderby_column_index?: Maybe<Scalars['smallint']>;
  segmentby_column_index?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Compression_Settings_Order_By = {
  attname?: Maybe<Order_By>;
  hypertable_name?: Maybe<Order_By>;
  hypertable_schema?: Maybe<Order_By>;
  orderby_asc?: Maybe<Order_By>;
  orderby_column_index?: Maybe<Order_By>;
  orderby_nullsfirst?: Maybe<Order_By>;
  segmentby_column_index?: Maybe<Order_By>;
};

export enum Timescaledb_Information_Compression_Settings_Select_Column {
  Attname = 'attname',
  HypertableName = 'hypertable_name',
  HypertableSchema = 'hypertable_schema',
  OrderbyAsc = 'orderby_asc',
  OrderbyColumnIndex = 'orderby_column_index',
  OrderbyNullsfirst = 'orderby_nullsfirst',
  SegmentbyColumnIndex = 'segmentby_column_index'
}

export type Timescaledb_Information_Compression_Settings_Stddev_Fields = {
  __typename?: 'timescaledb_information_compression_settings_stddev_fields';
  orderby_column_index?: Maybe<Scalars['Float']>;
  segmentby_column_index?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Compression_Settings_Stddev_Pop_Fields = {
  __typename?: 'timescaledb_information_compression_settings_stddev_pop_fields';
  orderby_column_index?: Maybe<Scalars['Float']>;
  segmentby_column_index?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Compression_Settings_Stddev_Samp_Fields = {
  __typename?: 'timescaledb_information_compression_settings_stddev_samp_fields';
  orderby_column_index?: Maybe<Scalars['Float']>;
  segmentby_column_index?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Compression_Settings_Sum_Fields = {
  __typename?: 'timescaledb_information_compression_settings_sum_fields';
  orderby_column_index?: Maybe<Scalars['smallint']>;
  segmentby_column_index?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Compression_Settings_Var_Pop_Fields = {
  __typename?: 'timescaledb_information_compression_settings_var_pop_fields';
  orderby_column_index?: Maybe<Scalars['Float']>;
  segmentby_column_index?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Compression_Settings_Var_Samp_Fields = {
  __typename?: 'timescaledb_information_compression_settings_var_samp_fields';
  orderby_column_index?: Maybe<Scalars['Float']>;
  segmentby_column_index?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Compression_Settings_Variance_Fields = {
  __typename?: 'timescaledb_information_compression_settings_variance_fields';
  orderby_column_index?: Maybe<Scalars['Float']>;
  segmentby_column_index?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Continuous_Aggregates = {
  __typename?: 'timescaledb_information_continuous_aggregates';
  hypertable_name?: Maybe<Scalars['name']>;
  hypertable_schema?: Maybe<Scalars['name']>;
  materialization_hypertable_name?: Maybe<Scalars['name']>;
  materialization_hypertable_schema?: Maybe<Scalars['name']>;
  materialized_only?: Maybe<Scalars['Boolean']>;
  view_definition?: Maybe<Scalars['String']>;
  view_name?: Maybe<Scalars['name']>;
  view_owner?: Maybe<Scalars['name']>;
  view_schema?: Maybe<Scalars['name']>;
};

export type Timescaledb_Information_Continuous_Aggregates_Aggregate = {
  __typename?: 'timescaledb_information_continuous_aggregates_aggregate';
  aggregate?: Maybe<Timescaledb_Information_Continuous_Aggregates_Aggregate_Fields>;
  nodes: Array<Timescaledb_Information_Continuous_Aggregates>;
};

export type Timescaledb_Information_Continuous_Aggregates_Aggregate_Fields = {
  __typename?: 'timescaledb_information_continuous_aggregates_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Timescaledb_Information_Continuous_Aggregates_Max_Fields>;
  min?: Maybe<Timescaledb_Information_Continuous_Aggregates_Min_Fields>;
};


export type Timescaledb_Information_Continuous_Aggregates_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Timescaledb_Information_Continuous_Aggregates_Bool_Exp = {
  _and?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Bool_Exp>>;
  _not?: Maybe<Timescaledb_Information_Continuous_Aggregates_Bool_Exp>;
  _or?: Maybe<Array<Timescaledb_Information_Continuous_Aggregates_Bool_Exp>>;
  hypertable_name?: Maybe<Name_Comparison_Exp>;
  hypertable_schema?: Maybe<Name_Comparison_Exp>;
  materialization_hypertable_name?: Maybe<Name_Comparison_Exp>;
  materialization_hypertable_schema?: Maybe<Name_Comparison_Exp>;
  materialized_only?: Maybe<Boolean_Comparison_Exp>;
  view_definition?: Maybe<String_Comparison_Exp>;
  view_name?: Maybe<Name_Comparison_Exp>;
  view_owner?: Maybe<Name_Comparison_Exp>;
  view_schema?: Maybe<Name_Comparison_Exp>;
};

export type Timescaledb_Information_Continuous_Aggregates_Max_Fields = {
  __typename?: 'timescaledb_information_continuous_aggregates_max_fields';
  view_definition?: Maybe<Scalars['String']>;
};

export type Timescaledb_Information_Continuous_Aggregates_Min_Fields = {
  __typename?: 'timescaledb_information_continuous_aggregates_min_fields';
  view_definition?: Maybe<Scalars['String']>;
};

export type Timescaledb_Information_Continuous_Aggregates_Order_By = {
  hypertable_name?: Maybe<Order_By>;
  hypertable_schema?: Maybe<Order_By>;
  materialization_hypertable_name?: Maybe<Order_By>;
  materialization_hypertable_schema?: Maybe<Order_By>;
  materialized_only?: Maybe<Order_By>;
  view_definition?: Maybe<Order_By>;
  view_name?: Maybe<Order_By>;
  view_owner?: Maybe<Order_By>;
  view_schema?: Maybe<Order_By>;
};

export enum Timescaledb_Information_Continuous_Aggregates_Select_Column {
  HypertableName = 'hypertable_name',
  HypertableSchema = 'hypertable_schema',
  MaterializationHypertableName = 'materialization_hypertable_name',
  MaterializationHypertableSchema = 'materialization_hypertable_schema',
  MaterializedOnly = 'materialized_only',
  ViewDefinition = 'view_definition',
  ViewName = 'view_name',
  ViewOwner = 'view_owner',
  ViewSchema = 'view_schema'
}

export type Timescaledb_Information_Data_Nodes = {
  __typename?: 'timescaledb_information_data_nodes';
  node_name?: Maybe<Scalars['name']>;
  options?: Maybe<Scalars['_text']>;
  owner?: Maybe<Scalars['name']>;
};

export type Timescaledb_Information_Data_Nodes_Aggregate = {
  __typename?: 'timescaledb_information_data_nodes_aggregate';
  aggregate?: Maybe<Timescaledb_Information_Data_Nodes_Aggregate_Fields>;
  nodes: Array<Timescaledb_Information_Data_Nodes>;
};

export type Timescaledb_Information_Data_Nodes_Aggregate_Fields = {
  __typename?: 'timescaledb_information_data_nodes_aggregate_fields';
  count: Scalars['Int'];
};


export type Timescaledb_Information_Data_Nodes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timescaledb_Information_Data_Nodes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Timescaledb_Information_Data_Nodes_Bool_Exp = {
  _and?: Maybe<Array<Timescaledb_Information_Data_Nodes_Bool_Exp>>;
  _not?: Maybe<Timescaledb_Information_Data_Nodes_Bool_Exp>;
  _or?: Maybe<Array<Timescaledb_Information_Data_Nodes_Bool_Exp>>;
  node_name?: Maybe<Name_Comparison_Exp>;
  options?: Maybe<_Text_Comparison_Exp>;
  owner?: Maybe<Name_Comparison_Exp>;
};

export type Timescaledb_Information_Data_Nodes_Order_By = {
  node_name?: Maybe<Order_By>;
  options?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
};

export enum Timescaledb_Information_Data_Nodes_Select_Column {
  NodeName = 'node_name',
  Options = 'options',
  Owner = 'owner'
}

export type Timescaledb_Information_Dimensions = {
  __typename?: 'timescaledb_information_dimensions';
  column_name?: Maybe<Scalars['name']>;
  column_type?: Maybe<Scalars['regtype']>;
  dimension_number?: Maybe<Scalars['bigint']>;
  dimension_type?: Maybe<Scalars['String']>;
  hypertable_name?: Maybe<Scalars['name']>;
  hypertable_schema?: Maybe<Scalars['name']>;
  integer_interval?: Maybe<Scalars['bigint']>;
  integer_now_func?: Maybe<Scalars['name']>;
  num_partitions?: Maybe<Scalars['smallint']>;
  time_interval?: Maybe<Scalars['interval']>;
};

export type Timescaledb_Information_Dimensions_Aggregate = {
  __typename?: 'timescaledb_information_dimensions_aggregate';
  aggregate?: Maybe<Timescaledb_Information_Dimensions_Aggregate_Fields>;
  nodes: Array<Timescaledb_Information_Dimensions>;
};

export type Timescaledb_Information_Dimensions_Aggregate_Fields = {
  __typename?: 'timescaledb_information_dimensions_aggregate_fields';
  avg?: Maybe<Timescaledb_Information_Dimensions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Timescaledb_Information_Dimensions_Max_Fields>;
  min?: Maybe<Timescaledb_Information_Dimensions_Min_Fields>;
  stddev?: Maybe<Timescaledb_Information_Dimensions_Stddev_Fields>;
  stddev_pop?: Maybe<Timescaledb_Information_Dimensions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Timescaledb_Information_Dimensions_Stddev_Samp_Fields>;
  sum?: Maybe<Timescaledb_Information_Dimensions_Sum_Fields>;
  var_pop?: Maybe<Timescaledb_Information_Dimensions_Var_Pop_Fields>;
  var_samp?: Maybe<Timescaledb_Information_Dimensions_Var_Samp_Fields>;
  variance?: Maybe<Timescaledb_Information_Dimensions_Variance_Fields>;
};


export type Timescaledb_Information_Dimensions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timescaledb_Information_Dimensions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Timescaledb_Information_Dimensions_Avg_Fields = {
  __typename?: 'timescaledb_information_dimensions_avg_fields';
  dimension_number?: Maybe<Scalars['Float']>;
  integer_interval?: Maybe<Scalars['Float']>;
  num_partitions?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Dimensions_Bool_Exp = {
  _and?: Maybe<Array<Timescaledb_Information_Dimensions_Bool_Exp>>;
  _not?: Maybe<Timescaledb_Information_Dimensions_Bool_Exp>;
  _or?: Maybe<Array<Timescaledb_Information_Dimensions_Bool_Exp>>;
  column_name?: Maybe<Name_Comparison_Exp>;
  column_type?: Maybe<Regtype_Comparison_Exp>;
  dimension_number?: Maybe<Bigint_Comparison_Exp>;
  dimension_type?: Maybe<String_Comparison_Exp>;
  hypertable_name?: Maybe<Name_Comparison_Exp>;
  hypertable_schema?: Maybe<Name_Comparison_Exp>;
  integer_interval?: Maybe<Bigint_Comparison_Exp>;
  integer_now_func?: Maybe<Name_Comparison_Exp>;
  num_partitions?: Maybe<Smallint_Comparison_Exp>;
  time_interval?: Maybe<Interval_Comparison_Exp>;
};

export type Timescaledb_Information_Dimensions_Max_Fields = {
  __typename?: 'timescaledb_information_dimensions_max_fields';
  dimension_number?: Maybe<Scalars['bigint']>;
  dimension_type?: Maybe<Scalars['String']>;
  integer_interval?: Maybe<Scalars['bigint']>;
  num_partitions?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Dimensions_Min_Fields = {
  __typename?: 'timescaledb_information_dimensions_min_fields';
  dimension_number?: Maybe<Scalars['bigint']>;
  dimension_type?: Maybe<Scalars['String']>;
  integer_interval?: Maybe<Scalars['bigint']>;
  num_partitions?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Dimensions_Order_By = {
  column_name?: Maybe<Order_By>;
  column_type?: Maybe<Order_By>;
  dimension_number?: Maybe<Order_By>;
  dimension_type?: Maybe<Order_By>;
  hypertable_name?: Maybe<Order_By>;
  hypertable_schema?: Maybe<Order_By>;
  integer_interval?: Maybe<Order_By>;
  integer_now_func?: Maybe<Order_By>;
  num_partitions?: Maybe<Order_By>;
  time_interval?: Maybe<Order_By>;
};

export enum Timescaledb_Information_Dimensions_Select_Column {
  ColumnName = 'column_name',
  ColumnType = 'column_type',
  DimensionNumber = 'dimension_number',
  DimensionType = 'dimension_type',
  HypertableName = 'hypertable_name',
  HypertableSchema = 'hypertable_schema',
  IntegerInterval = 'integer_interval',
  IntegerNowFunc = 'integer_now_func',
  NumPartitions = 'num_partitions',
  TimeInterval = 'time_interval'
}

export type Timescaledb_Information_Dimensions_Stddev_Fields = {
  __typename?: 'timescaledb_information_dimensions_stddev_fields';
  dimension_number?: Maybe<Scalars['Float']>;
  integer_interval?: Maybe<Scalars['Float']>;
  num_partitions?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Dimensions_Stddev_Pop_Fields = {
  __typename?: 'timescaledb_information_dimensions_stddev_pop_fields';
  dimension_number?: Maybe<Scalars['Float']>;
  integer_interval?: Maybe<Scalars['Float']>;
  num_partitions?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Dimensions_Stddev_Samp_Fields = {
  __typename?: 'timescaledb_information_dimensions_stddev_samp_fields';
  dimension_number?: Maybe<Scalars['Float']>;
  integer_interval?: Maybe<Scalars['Float']>;
  num_partitions?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Dimensions_Sum_Fields = {
  __typename?: 'timescaledb_information_dimensions_sum_fields';
  dimension_number?: Maybe<Scalars['bigint']>;
  integer_interval?: Maybe<Scalars['bigint']>;
  num_partitions?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Dimensions_Var_Pop_Fields = {
  __typename?: 'timescaledb_information_dimensions_var_pop_fields';
  dimension_number?: Maybe<Scalars['Float']>;
  integer_interval?: Maybe<Scalars['Float']>;
  num_partitions?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Dimensions_Var_Samp_Fields = {
  __typename?: 'timescaledb_information_dimensions_var_samp_fields';
  dimension_number?: Maybe<Scalars['Float']>;
  integer_interval?: Maybe<Scalars['Float']>;
  num_partitions?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Dimensions_Variance_Fields = {
  __typename?: 'timescaledb_information_dimensions_variance_fields';
  dimension_number?: Maybe<Scalars['Float']>;
  integer_interval?: Maybe<Scalars['Float']>;
  num_partitions?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Hypertables = {
  __typename?: 'timescaledb_information_hypertables';
  compression_enabled?: Maybe<Scalars['Boolean']>;
  data_nodes?: Maybe<Scalars['_name']>;
  hypertable_name?: Maybe<Scalars['name']>;
  hypertable_schema?: Maybe<Scalars['name']>;
  is_distributed?: Maybe<Scalars['Boolean']>;
  num_chunks?: Maybe<Scalars['bigint']>;
  num_dimensions?: Maybe<Scalars['smallint']>;
  owner?: Maybe<Scalars['name']>;
  replication_factor?: Maybe<Scalars['smallint']>;
  tablespaces?: Maybe<Scalars['_name']>;
};

export type Timescaledb_Information_Hypertables_Aggregate = {
  __typename?: 'timescaledb_information_hypertables_aggregate';
  aggregate?: Maybe<Timescaledb_Information_Hypertables_Aggregate_Fields>;
  nodes: Array<Timescaledb_Information_Hypertables>;
};

export type Timescaledb_Information_Hypertables_Aggregate_Fields = {
  __typename?: 'timescaledb_information_hypertables_aggregate_fields';
  avg?: Maybe<Timescaledb_Information_Hypertables_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Timescaledb_Information_Hypertables_Max_Fields>;
  min?: Maybe<Timescaledb_Information_Hypertables_Min_Fields>;
  stddev?: Maybe<Timescaledb_Information_Hypertables_Stddev_Fields>;
  stddev_pop?: Maybe<Timescaledb_Information_Hypertables_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Timescaledb_Information_Hypertables_Stddev_Samp_Fields>;
  sum?: Maybe<Timescaledb_Information_Hypertables_Sum_Fields>;
  var_pop?: Maybe<Timescaledb_Information_Hypertables_Var_Pop_Fields>;
  var_samp?: Maybe<Timescaledb_Information_Hypertables_Var_Samp_Fields>;
  variance?: Maybe<Timescaledb_Information_Hypertables_Variance_Fields>;
};


export type Timescaledb_Information_Hypertables_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timescaledb_Information_Hypertables_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Timescaledb_Information_Hypertables_Avg_Fields = {
  __typename?: 'timescaledb_information_hypertables_avg_fields';
  num_chunks?: Maybe<Scalars['Float']>;
  num_dimensions?: Maybe<Scalars['Float']>;
  replication_factor?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Hypertables_Bool_Exp = {
  _and?: Maybe<Array<Timescaledb_Information_Hypertables_Bool_Exp>>;
  _not?: Maybe<Timescaledb_Information_Hypertables_Bool_Exp>;
  _or?: Maybe<Array<Timescaledb_Information_Hypertables_Bool_Exp>>;
  compression_enabled?: Maybe<Boolean_Comparison_Exp>;
  data_nodes?: Maybe<_Name_Comparison_Exp>;
  hypertable_name?: Maybe<Name_Comparison_Exp>;
  hypertable_schema?: Maybe<Name_Comparison_Exp>;
  is_distributed?: Maybe<Boolean_Comparison_Exp>;
  num_chunks?: Maybe<Bigint_Comparison_Exp>;
  num_dimensions?: Maybe<Smallint_Comparison_Exp>;
  owner?: Maybe<Name_Comparison_Exp>;
  replication_factor?: Maybe<Smallint_Comparison_Exp>;
  tablespaces?: Maybe<_Name_Comparison_Exp>;
};

export type Timescaledb_Information_Hypertables_Max_Fields = {
  __typename?: 'timescaledb_information_hypertables_max_fields';
  num_chunks?: Maybe<Scalars['bigint']>;
  num_dimensions?: Maybe<Scalars['smallint']>;
  replication_factor?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Hypertables_Min_Fields = {
  __typename?: 'timescaledb_information_hypertables_min_fields';
  num_chunks?: Maybe<Scalars['bigint']>;
  num_dimensions?: Maybe<Scalars['smallint']>;
  replication_factor?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Hypertables_Order_By = {
  compression_enabled?: Maybe<Order_By>;
  data_nodes?: Maybe<Order_By>;
  hypertable_name?: Maybe<Order_By>;
  hypertable_schema?: Maybe<Order_By>;
  is_distributed?: Maybe<Order_By>;
  num_chunks?: Maybe<Order_By>;
  num_dimensions?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  replication_factor?: Maybe<Order_By>;
  tablespaces?: Maybe<Order_By>;
};

export enum Timescaledb_Information_Hypertables_Select_Column {
  CompressionEnabled = 'compression_enabled',
  DataNodes = 'data_nodes',
  HypertableName = 'hypertable_name',
  HypertableSchema = 'hypertable_schema',
  IsDistributed = 'is_distributed',
  NumChunks = 'num_chunks',
  NumDimensions = 'num_dimensions',
  Owner = 'owner',
  ReplicationFactor = 'replication_factor',
  Tablespaces = 'tablespaces'
}

export type Timescaledb_Information_Hypertables_Stddev_Fields = {
  __typename?: 'timescaledb_information_hypertables_stddev_fields';
  num_chunks?: Maybe<Scalars['Float']>;
  num_dimensions?: Maybe<Scalars['Float']>;
  replication_factor?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Hypertables_Stddev_Pop_Fields = {
  __typename?: 'timescaledb_information_hypertables_stddev_pop_fields';
  num_chunks?: Maybe<Scalars['Float']>;
  num_dimensions?: Maybe<Scalars['Float']>;
  replication_factor?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Hypertables_Stddev_Samp_Fields = {
  __typename?: 'timescaledb_information_hypertables_stddev_samp_fields';
  num_chunks?: Maybe<Scalars['Float']>;
  num_dimensions?: Maybe<Scalars['Float']>;
  replication_factor?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Hypertables_Sum_Fields = {
  __typename?: 'timescaledb_information_hypertables_sum_fields';
  num_chunks?: Maybe<Scalars['bigint']>;
  num_dimensions?: Maybe<Scalars['smallint']>;
  replication_factor?: Maybe<Scalars['smallint']>;
};

export type Timescaledb_Information_Hypertables_Var_Pop_Fields = {
  __typename?: 'timescaledb_information_hypertables_var_pop_fields';
  num_chunks?: Maybe<Scalars['Float']>;
  num_dimensions?: Maybe<Scalars['Float']>;
  replication_factor?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Hypertables_Var_Samp_Fields = {
  __typename?: 'timescaledb_information_hypertables_var_samp_fields';
  num_chunks?: Maybe<Scalars['Float']>;
  num_dimensions?: Maybe<Scalars['Float']>;
  replication_factor?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Hypertables_Variance_Fields = {
  __typename?: 'timescaledb_information_hypertables_variance_fields';
  num_chunks?: Maybe<Scalars['Float']>;
  num_dimensions?: Maybe<Scalars['Float']>;
  replication_factor?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Job_Stats = {
  __typename?: 'timescaledb_information_job_stats';
  hypertable_name?: Maybe<Scalars['name']>;
  hypertable_schema?: Maybe<Scalars['name']>;
  job_id?: Maybe<Scalars['Int']>;
  job_status?: Maybe<Scalars['String']>;
  last_run_duration?: Maybe<Scalars['interval']>;
  last_run_started_at?: Maybe<Scalars['timestamptz']>;
  last_run_status?: Maybe<Scalars['String']>;
  last_successful_finish?: Maybe<Scalars['timestamptz']>;
  next_start?: Maybe<Scalars['timestamptz']>;
  total_failures?: Maybe<Scalars['bigint']>;
  total_runs?: Maybe<Scalars['bigint']>;
  total_successes?: Maybe<Scalars['bigint']>;
};

export type Timescaledb_Information_Job_Stats_Aggregate = {
  __typename?: 'timescaledb_information_job_stats_aggregate';
  aggregate?: Maybe<Timescaledb_Information_Job_Stats_Aggregate_Fields>;
  nodes: Array<Timescaledb_Information_Job_Stats>;
};

export type Timescaledb_Information_Job_Stats_Aggregate_Fields = {
  __typename?: 'timescaledb_information_job_stats_aggregate_fields';
  avg?: Maybe<Timescaledb_Information_Job_Stats_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Timescaledb_Information_Job_Stats_Max_Fields>;
  min?: Maybe<Timescaledb_Information_Job_Stats_Min_Fields>;
  stddev?: Maybe<Timescaledb_Information_Job_Stats_Stddev_Fields>;
  stddev_pop?: Maybe<Timescaledb_Information_Job_Stats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Timescaledb_Information_Job_Stats_Stddev_Samp_Fields>;
  sum?: Maybe<Timescaledb_Information_Job_Stats_Sum_Fields>;
  var_pop?: Maybe<Timescaledb_Information_Job_Stats_Var_Pop_Fields>;
  var_samp?: Maybe<Timescaledb_Information_Job_Stats_Var_Samp_Fields>;
  variance?: Maybe<Timescaledb_Information_Job_Stats_Variance_Fields>;
};


export type Timescaledb_Information_Job_Stats_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timescaledb_Information_Job_Stats_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Timescaledb_Information_Job_Stats_Avg_Fields = {
  __typename?: 'timescaledb_information_job_stats_avg_fields';
  job_id?: Maybe<Scalars['Float']>;
  total_failures?: Maybe<Scalars['Float']>;
  total_runs?: Maybe<Scalars['Float']>;
  total_successes?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Job_Stats_Bool_Exp = {
  _and?: Maybe<Array<Timescaledb_Information_Job_Stats_Bool_Exp>>;
  _not?: Maybe<Timescaledb_Information_Job_Stats_Bool_Exp>;
  _or?: Maybe<Array<Timescaledb_Information_Job_Stats_Bool_Exp>>;
  hypertable_name?: Maybe<Name_Comparison_Exp>;
  hypertable_schema?: Maybe<Name_Comparison_Exp>;
  job_id?: Maybe<Int_Comparison_Exp>;
  job_status?: Maybe<String_Comparison_Exp>;
  last_run_duration?: Maybe<Interval_Comparison_Exp>;
  last_run_started_at?: Maybe<Timestamptz_Comparison_Exp>;
  last_run_status?: Maybe<String_Comparison_Exp>;
  last_successful_finish?: Maybe<Timestamptz_Comparison_Exp>;
  next_start?: Maybe<Timestamptz_Comparison_Exp>;
  total_failures?: Maybe<Bigint_Comparison_Exp>;
  total_runs?: Maybe<Bigint_Comparison_Exp>;
  total_successes?: Maybe<Bigint_Comparison_Exp>;
};

export type Timescaledb_Information_Job_Stats_Max_Fields = {
  __typename?: 'timescaledb_information_job_stats_max_fields';
  job_id?: Maybe<Scalars['Int']>;
  job_status?: Maybe<Scalars['String']>;
  last_run_started_at?: Maybe<Scalars['timestamptz']>;
  last_run_status?: Maybe<Scalars['String']>;
  last_successful_finish?: Maybe<Scalars['timestamptz']>;
  next_start?: Maybe<Scalars['timestamptz']>;
  total_failures?: Maybe<Scalars['bigint']>;
  total_runs?: Maybe<Scalars['bigint']>;
  total_successes?: Maybe<Scalars['bigint']>;
};

export type Timescaledb_Information_Job_Stats_Min_Fields = {
  __typename?: 'timescaledb_information_job_stats_min_fields';
  job_id?: Maybe<Scalars['Int']>;
  job_status?: Maybe<Scalars['String']>;
  last_run_started_at?: Maybe<Scalars['timestamptz']>;
  last_run_status?: Maybe<Scalars['String']>;
  last_successful_finish?: Maybe<Scalars['timestamptz']>;
  next_start?: Maybe<Scalars['timestamptz']>;
  total_failures?: Maybe<Scalars['bigint']>;
  total_runs?: Maybe<Scalars['bigint']>;
  total_successes?: Maybe<Scalars['bigint']>;
};

export type Timescaledb_Information_Job_Stats_Order_By = {
  hypertable_name?: Maybe<Order_By>;
  hypertable_schema?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  job_status?: Maybe<Order_By>;
  last_run_duration?: Maybe<Order_By>;
  last_run_started_at?: Maybe<Order_By>;
  last_run_status?: Maybe<Order_By>;
  last_successful_finish?: Maybe<Order_By>;
  next_start?: Maybe<Order_By>;
  total_failures?: Maybe<Order_By>;
  total_runs?: Maybe<Order_By>;
  total_successes?: Maybe<Order_By>;
};

export enum Timescaledb_Information_Job_Stats_Select_Column {
  HypertableName = 'hypertable_name',
  HypertableSchema = 'hypertable_schema',
  JobId = 'job_id',
  JobStatus = 'job_status',
  LastRunDuration = 'last_run_duration',
  LastRunStartedAt = 'last_run_started_at',
  LastRunStatus = 'last_run_status',
  LastSuccessfulFinish = 'last_successful_finish',
  NextStart = 'next_start',
  TotalFailures = 'total_failures',
  TotalRuns = 'total_runs',
  TotalSuccesses = 'total_successes'
}

export type Timescaledb_Information_Job_Stats_Stddev_Fields = {
  __typename?: 'timescaledb_information_job_stats_stddev_fields';
  job_id?: Maybe<Scalars['Float']>;
  total_failures?: Maybe<Scalars['Float']>;
  total_runs?: Maybe<Scalars['Float']>;
  total_successes?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Job_Stats_Stddev_Pop_Fields = {
  __typename?: 'timescaledb_information_job_stats_stddev_pop_fields';
  job_id?: Maybe<Scalars['Float']>;
  total_failures?: Maybe<Scalars['Float']>;
  total_runs?: Maybe<Scalars['Float']>;
  total_successes?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Job_Stats_Stddev_Samp_Fields = {
  __typename?: 'timescaledb_information_job_stats_stddev_samp_fields';
  job_id?: Maybe<Scalars['Float']>;
  total_failures?: Maybe<Scalars['Float']>;
  total_runs?: Maybe<Scalars['Float']>;
  total_successes?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Job_Stats_Sum_Fields = {
  __typename?: 'timescaledb_information_job_stats_sum_fields';
  job_id?: Maybe<Scalars['Int']>;
  total_failures?: Maybe<Scalars['bigint']>;
  total_runs?: Maybe<Scalars['bigint']>;
  total_successes?: Maybe<Scalars['bigint']>;
};

export type Timescaledb_Information_Job_Stats_Var_Pop_Fields = {
  __typename?: 'timescaledb_information_job_stats_var_pop_fields';
  job_id?: Maybe<Scalars['Float']>;
  total_failures?: Maybe<Scalars['Float']>;
  total_runs?: Maybe<Scalars['Float']>;
  total_successes?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Job_Stats_Var_Samp_Fields = {
  __typename?: 'timescaledb_information_job_stats_var_samp_fields';
  job_id?: Maybe<Scalars['Float']>;
  total_failures?: Maybe<Scalars['Float']>;
  total_runs?: Maybe<Scalars['Float']>;
  total_successes?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Job_Stats_Variance_Fields = {
  __typename?: 'timescaledb_information_job_stats_variance_fields';
  job_id?: Maybe<Scalars['Float']>;
  total_failures?: Maybe<Scalars['Float']>;
  total_runs?: Maybe<Scalars['Float']>;
  total_successes?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Jobs = {
  __typename?: 'timescaledb_information_jobs';
  application_name?: Maybe<Scalars['name']>;
  config?: Maybe<Scalars['jsonb']>;
  hypertable_name?: Maybe<Scalars['name']>;
  hypertable_schema?: Maybe<Scalars['name']>;
  job_id?: Maybe<Scalars['Int']>;
  max_retries?: Maybe<Scalars['Int']>;
  max_runtime?: Maybe<Scalars['interval']>;
  next_start?: Maybe<Scalars['timestamptz']>;
  owner?: Maybe<Scalars['name']>;
  proc_name?: Maybe<Scalars['name']>;
  proc_schema?: Maybe<Scalars['name']>;
  retry_period?: Maybe<Scalars['interval']>;
  schedule_interval?: Maybe<Scalars['interval']>;
  scheduled?: Maybe<Scalars['Boolean']>;
};


export type Timescaledb_Information_JobsConfigArgs = {
  path?: Maybe<Scalars['String']>;
};

export type Timescaledb_Information_Jobs_Aggregate = {
  __typename?: 'timescaledb_information_jobs_aggregate';
  aggregate?: Maybe<Timescaledb_Information_Jobs_Aggregate_Fields>;
  nodes: Array<Timescaledb_Information_Jobs>;
};

export type Timescaledb_Information_Jobs_Aggregate_Fields = {
  __typename?: 'timescaledb_information_jobs_aggregate_fields';
  avg?: Maybe<Timescaledb_Information_Jobs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Timescaledb_Information_Jobs_Max_Fields>;
  min?: Maybe<Timescaledb_Information_Jobs_Min_Fields>;
  stddev?: Maybe<Timescaledb_Information_Jobs_Stddev_Fields>;
  stddev_pop?: Maybe<Timescaledb_Information_Jobs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Timescaledb_Information_Jobs_Stddev_Samp_Fields>;
  sum?: Maybe<Timescaledb_Information_Jobs_Sum_Fields>;
  var_pop?: Maybe<Timescaledb_Information_Jobs_Var_Pop_Fields>;
  var_samp?: Maybe<Timescaledb_Information_Jobs_Var_Samp_Fields>;
  variance?: Maybe<Timescaledb_Information_Jobs_Variance_Fields>;
};


export type Timescaledb_Information_Jobs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timescaledb_Information_Jobs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Timescaledb_Information_Jobs_Avg_Fields = {
  __typename?: 'timescaledb_information_jobs_avg_fields';
  job_id?: Maybe<Scalars['Float']>;
  max_retries?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Jobs_Bool_Exp = {
  _and?: Maybe<Array<Timescaledb_Information_Jobs_Bool_Exp>>;
  _not?: Maybe<Timescaledb_Information_Jobs_Bool_Exp>;
  _or?: Maybe<Array<Timescaledb_Information_Jobs_Bool_Exp>>;
  application_name?: Maybe<Name_Comparison_Exp>;
  config?: Maybe<Jsonb_Comparison_Exp>;
  hypertable_name?: Maybe<Name_Comparison_Exp>;
  hypertable_schema?: Maybe<Name_Comparison_Exp>;
  job_id?: Maybe<Int_Comparison_Exp>;
  max_retries?: Maybe<Int_Comparison_Exp>;
  max_runtime?: Maybe<Interval_Comparison_Exp>;
  next_start?: Maybe<Timestamptz_Comparison_Exp>;
  owner?: Maybe<Name_Comparison_Exp>;
  proc_name?: Maybe<Name_Comparison_Exp>;
  proc_schema?: Maybe<Name_Comparison_Exp>;
  retry_period?: Maybe<Interval_Comparison_Exp>;
  schedule_interval?: Maybe<Interval_Comparison_Exp>;
  scheduled?: Maybe<Boolean_Comparison_Exp>;
};

export type Timescaledb_Information_Jobs_Max_Fields = {
  __typename?: 'timescaledb_information_jobs_max_fields';
  job_id?: Maybe<Scalars['Int']>;
  max_retries?: Maybe<Scalars['Int']>;
  next_start?: Maybe<Scalars['timestamptz']>;
};

export type Timescaledb_Information_Jobs_Min_Fields = {
  __typename?: 'timescaledb_information_jobs_min_fields';
  job_id?: Maybe<Scalars['Int']>;
  max_retries?: Maybe<Scalars['Int']>;
  next_start?: Maybe<Scalars['timestamptz']>;
};

export type Timescaledb_Information_Jobs_Order_By = {
  application_name?: Maybe<Order_By>;
  config?: Maybe<Order_By>;
  hypertable_name?: Maybe<Order_By>;
  hypertable_schema?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  max_retries?: Maybe<Order_By>;
  max_runtime?: Maybe<Order_By>;
  next_start?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  proc_name?: Maybe<Order_By>;
  proc_schema?: Maybe<Order_By>;
  retry_period?: Maybe<Order_By>;
  schedule_interval?: Maybe<Order_By>;
  scheduled?: Maybe<Order_By>;
};

export enum Timescaledb_Information_Jobs_Select_Column {
  ApplicationName = 'application_name',
  Config = 'config',
  HypertableName = 'hypertable_name',
  HypertableSchema = 'hypertable_schema',
  JobId = 'job_id',
  MaxRetries = 'max_retries',
  MaxRuntime = 'max_runtime',
  NextStart = 'next_start',
  Owner = 'owner',
  ProcName = 'proc_name',
  ProcSchema = 'proc_schema',
  RetryPeriod = 'retry_period',
  ScheduleInterval = 'schedule_interval',
  Scheduled = 'scheduled'
}

export type Timescaledb_Information_Jobs_Stddev_Fields = {
  __typename?: 'timescaledb_information_jobs_stddev_fields';
  job_id?: Maybe<Scalars['Float']>;
  max_retries?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Jobs_Stddev_Pop_Fields = {
  __typename?: 'timescaledb_information_jobs_stddev_pop_fields';
  job_id?: Maybe<Scalars['Float']>;
  max_retries?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Jobs_Stddev_Samp_Fields = {
  __typename?: 'timescaledb_information_jobs_stddev_samp_fields';
  job_id?: Maybe<Scalars['Float']>;
  max_retries?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Jobs_Sum_Fields = {
  __typename?: 'timescaledb_information_jobs_sum_fields';
  job_id?: Maybe<Scalars['Int']>;
  max_retries?: Maybe<Scalars['Int']>;
};

export type Timescaledb_Information_Jobs_Var_Pop_Fields = {
  __typename?: 'timescaledb_information_jobs_var_pop_fields';
  job_id?: Maybe<Scalars['Float']>;
  max_retries?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Jobs_Var_Samp_Fields = {
  __typename?: 'timescaledb_information_jobs_var_samp_fields';
  job_id?: Maybe<Scalars['Float']>;
  max_retries?: Maybe<Scalars['Float']>;
};

export type Timescaledb_Information_Jobs_Variance_Fields = {
  __typename?: 'timescaledb_information_jobs_variance_fields';
  job_id?: Maybe<Scalars['Float']>;
  max_retries?: Maybe<Scalars['Float']>;
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type User = {
  __typename?: 'user';
  access_tokens: Array<Auth_Access_Token>;
  access_tokens_aggregate: Auth_Access_Token_Aggregate;
  addresses: Array<Profile_Address>;
  addresses_aggregate: Profile_Address_Aggregate;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logs: Array<Access_Control_Log>;
  logs_aggregate: Access_Control_Log_Aggregate;
  messages: Array<Sms_Message>;
  messages_aggregate: Sms_Message_Aggregate;
  mobile?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notifications: Array<Notification_Notification>;
  notificationsByFrom: Array<Notification_Notification>;
  notificationsByFrom_aggregate: Notification_Notification_Aggregate;
  notifications_aggregate: Notification_Notification_Aggregate;
  password?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  profiles: Array<Profile_Profile>;
  profiles_aggregate: Profile_Profile_Aggregate;
  role_users: Array<Access_Control_Role_User>;
  role_users_aggregate: Access_Control_Role_User_Aggregate;
  states: Array<Suspension_State>;
  states_aggregate: Suspension_State_Aggregate;
  type: User_Type_Enum;
  updated_at: Scalars['timestamptz'];
  user_permissions: Array<Access_Control_User_Permission>;
  user_permissions_aggregate: Access_Control_User_Permission_Aggregate;
  user_type: User_Type;
  username?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};


export type UserAccess_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Access_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Access_Token_Order_By>>;
  where?: Maybe<Auth_Access_Token_Bool_Exp>;
};


export type UserAccess_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Access_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Access_Token_Order_By>>;
  where?: Maybe<Auth_Access_Token_Bool_Exp>;
};


export type UserAddressesArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type UserAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Address_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Address_Order_By>>;
  where?: Maybe<Profile_Address_Bool_Exp>;
};


export type UserLogsArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type UserLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Log_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Log_Order_By>>;
  where?: Maybe<Access_Control_Log_Bool_Exp>;
};


export type UserMessagesArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Order_By>>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};


export type UserMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Sms_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sms_Message_Order_By>>;
  where?: Maybe<Sms_Message_Bool_Exp>;
};


export type UserNotificationsArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type UserNotificationsByFromArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type UserNotificationsByFrom_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type UserNotifications_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Notification_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Notification_Order_By>>;
  where?: Maybe<Notification_Notification_Bool_Exp>;
};


export type UserProfilesArgs = {
  distinct_on?: Maybe<Array<Profile_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Profile_Order_By>>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};


export type UserProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Profile_Order_By>>;
  where?: Maybe<Profile_Profile_Bool_Exp>;
};


export type UserRole_UsersArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_User_Order_By>>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};


export type UserRole_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_Role_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_Role_User_Order_By>>;
  where?: Maybe<Access_Control_Role_User_Bool_Exp>;
};


export type UserStatesArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Order_By>>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};


export type UserStates_AggregateArgs = {
  distinct_on?: Maybe<Array<Suspension_State_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Suspension_State_Order_By>>;
  where?: Maybe<Suspension_State_Bool_Exp>;
};


export type UserUser_PermissionsArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};


export type UserUser_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Access_Control_User_Permission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Access_Control_User_Permission_Order_By>>;
  where?: Maybe<Access_Control_User_Permission_Bool_Exp>;
};

export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  access_tokens?: Maybe<Auth_Access_Token_Bool_Exp>;
  addresses?: Maybe<Profile_Address_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  logs?: Maybe<Access_Control_Log_Bool_Exp>;
  messages?: Maybe<Sms_Message_Bool_Exp>;
  mobile?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  notifications?: Maybe<Notification_Notification_Bool_Exp>;
  notificationsByFrom?: Maybe<Notification_Notification_Bool_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  profiles?: Maybe<Profile_Profile_Bool_Exp>;
  role_users?: Maybe<Access_Control_Role_User_Bool_Exp>;
  states?: Maybe<Suspension_State_Bool_Exp>;
  type?: Maybe<User_Type_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_permissions?: Maybe<Access_Control_User_Permission_Bool_Exp>;
  user_type?: Maybe<User_Type_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
  verified?: Maybe<Boolean_Comparison_Exp>;
};

export enum User_Constraint {
  UserEmailKey = 'user_email_key',
  UserMobileKey = 'user_mobile_key',
  UserPkey = 'user_pkey',
  UserUsernameKey = 'user_username_key'
}

export type User_Delete_Account_Input = {
  password: Scalars['String'];
  reasonIds?: Maybe<Array<Scalars['Int']>>;
};

export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type User_Insert_Input = {
  access_tokens?: Maybe<Auth_Access_Token_Arr_Rel_Insert_Input>;
  addresses?: Maybe<Profile_Address_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  logs?: Maybe<Access_Control_Log_Arr_Rel_Insert_Input>;
  messages?: Maybe<Sms_Message_Arr_Rel_Insert_Input>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notifications?: Maybe<Notification_Notification_Arr_Rel_Insert_Input>;
  notificationsByFrom?: Maybe<Notification_Notification_Arr_Rel_Insert_Input>;
  password?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  profiles?: Maybe<Profile_Profile_Arr_Rel_Insert_Input>;
  role_users?: Maybe<Access_Control_Role_User_Arr_Rel_Insert_Input>;
  states?: Maybe<Suspension_State_Arr_Rel_Insert_Input>;
  type?: Maybe<User_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_permissions?: Maybe<Access_Control_User_Permission_Arr_Rel_Insert_Input>;
  user_type?: Maybe<User_Type_Obj_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mobile?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mobile?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User>;
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

export type User_Order_By = {
  access_tokens_aggregate?: Maybe<Auth_Access_Token_Aggregate_Order_By>;
  addresses_aggregate?: Maybe<Profile_Address_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logs_aggregate?: Maybe<Access_Control_Log_Aggregate_Order_By>;
  messages_aggregate?: Maybe<Sms_Message_Aggregate_Order_By>;
  mobile?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  notificationsByFrom_aggregate?: Maybe<Notification_Notification_Aggregate_Order_By>;
  notifications_aggregate?: Maybe<Notification_Notification_Aggregate_Order_By>;
  password?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  profiles_aggregate?: Maybe<Profile_Profile_Aggregate_Order_By>;
  role_users_aggregate?: Maybe<Access_Control_Role_User_Aggregate_Order_By>;
  states_aggregate?: Maybe<Suspension_State_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_permissions_aggregate?: Maybe<Access_Control_User_Permission_Aggregate_Order_By>;
  user_type?: Maybe<User_Type_Order_By>;
  username?: Maybe<Order_By>;
  verified?: Maybe<Order_By>;
};

export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export enum User_Select_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Mobile = 'mobile',
  Name = 'name',
  Password = 'password',
  Picture = 'picture',
  Type = 'type',
  UpdatedAt = 'updated_at',
  Username = 'username',
  Verified = 'verified'
}

export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  type?: Maybe<User_Type_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Type = {
  __typename?: 'user_type';
  users: Array<User>;
  users_aggregate: User_Aggregate;
  value: Scalars['String'];
};


export type User_TypeUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type User_TypeUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type User_Type_Aggregate = {
  __typename?: 'user_type_aggregate';
  aggregate?: Maybe<User_Type_Aggregate_Fields>;
  nodes: Array<User_Type>;
};

export type User_Type_Aggregate_Fields = {
  __typename?: 'user_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Type_Max_Fields>;
  min?: Maybe<User_Type_Min_Fields>;
};


export type User_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Type_Bool_Exp = {
  _and?: Maybe<Array<User_Type_Bool_Exp>>;
  _not?: Maybe<User_Type_Bool_Exp>;
  _or?: Maybe<Array<User_Type_Bool_Exp>>;
  users?: Maybe<User_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum User_Type_Constraint {
  UserTypePkey = 'user_type_pkey'
}

export enum User_Type_Enum {
  Admin = 'ADMIN',
  Employer = 'EMPLOYER',
  Mod = 'MOD',
  Seeker = 'SEEKER'
}

export type User_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Type_Enum>;
  _in?: Maybe<Array<User_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Type_Enum>;
  _nin?: Maybe<Array<User_Type_Enum>>;
};

export type User_Type_Insert_Input = {
  users?: Maybe<User_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

export type User_Type_Max_Fields = {
  __typename?: 'user_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type User_Type_Min_Fields = {
  __typename?: 'user_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type User_Type_Mutation_Response = {
  __typename?: 'user_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User_Type>;
};

export type User_Type_Obj_Rel_Insert_Input = {
  data: User_Type_Insert_Input;
  on_conflict?: Maybe<User_Type_On_Conflict>;
};

export type User_Type_On_Conflict = {
  constraint: User_Type_Constraint;
  update_columns?: Array<User_Type_Update_Column>;
  where?: Maybe<User_Type_Bool_Exp>;
};

export type User_Type_Order_By = {
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

export type User_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

export enum User_Type_Select_Column {
  Value = 'value'
}

export type User_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum User_Type_Update_Column {
  Value = 'value'
}

export enum User_Update_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Mobile = 'mobile',
  Name = 'name',
  Password = 'password',
  Picture = 'picture',
  Type = 'type',
  UpdatedAt = 'updated_at',
  Username = 'username',
  Verified = 'verified'
}

export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Verification_Edit_Input = {
  id: Scalars['Int'];
  payload: Scalars['String'];
};

export type Verification_Input = {
  id: Scalars['Int'];
  payload?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type Verification_Resp = {
  __typename?: 'verification_resp';
  id: Scalars['Int'];
};
