export interface ILoginData {
  email: string;
  password: string;
}
export interface ILogin {
  token: string;
  user: IUser;
}
export interface IUser {
  id: number;
  email: string;
  avatar: null;
  status: null;
  isActive: boolean;
  isBlocked: boolean;
  timeBlocked: null;
  roles: IRole[];
  permissions: any[];
}
export interface IRole {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  name: string;
  description: string;
  permissions: any[];
}

export enum AuthStatus {
  CHECKING = 'CHECKING',
  AUTHENTICATED = 'AUTHENTICATED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
  RESETTING_PASSWORD = 'RESETTING_PASSWORD',
}
