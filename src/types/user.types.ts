import { IOrder } from '.';
import { IProduct } from './products.types';

export interface IUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  avatarPath: string;
}

export interface IFullUser extends IUser {
  favorites: IProduct[];
  orders: IOrder[];
}

export interface IUserState {
  email: string;
  isAdmin: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}

export interface IUpdateUser {
  email: string;
  password: string;
  name: string;
  avatarPath: string;
  phone: string;
}

export interface IStatisticItem {
  name: string;
  value: number;
}

export interface IUserInitialState {
  user: IUser | null;
  loading: boolean;
}
