import { IUser } from '../types';

export interface IAuthData {
  login: string;
  password: string;
}

export interface IAuthState {
  regUsers: IUser[];
  result: boolean;
  message: string;
  activeUser: IUser;
  counter: number;
}

export enum ResponseMessage {
  Greeting = 'Доброе время суток епта',
  Login = 'Неправильный логин',
  Paasword = 'Неправильный пароль',
}
