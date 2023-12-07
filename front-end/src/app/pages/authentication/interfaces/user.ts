export interface IUser {
  id: number;
  email: string;
  avatar: null;
  status: null;
  isActive: boolean;
  isBlocked: boolean;
  timeBlocked: null;
  roles: IRole[];
  permissions: IPermission[];
}
export interface IRole {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  name: string;
  description: null | string;
  permissions?: null | IPermission[];
}
export interface IPermission {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  name: string;
  description: null | string;
  module: null;
}
