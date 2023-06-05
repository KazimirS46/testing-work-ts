import { IUser, IUserContact } from '../../types';
import users from '../../JSON/users.json';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

enum ResponseMessage {
  Greeting = 'Доброе время суток епта',
  Login = 'Неправильный логин',
  Paasword = 'Неправильный пароль',
}

interface IAuthData {
  login: String;
  password: String;
}

interface IAuthState {
  regUsers: IUser[];
  result: Boolean;
  message: String;
  activeUser: IUser;
  counter: number;
}

const initialState: IAuthState = {
  regUsers: users,
  result: false,
  message: '',
  activeUser: { login: '', password: '', name: '', gender: '', post: '', contacts: [] },
  counter: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    check: (state, action: PayloadAction<IAuthData>) => {
      const user = state.regUsers.find((user) => user.login === action.payload.login);

      if (!user) {
        state.result = false;
        state.message = ResponseMessage.Login;
      } else {
        if (user.password !== action.payload.password) {
          state.result = false;
          state.message = ResponseMessage.Paasword;
        } else {
          state.result = true;
          state.message = ResponseMessage.Greeting;
          state.activeUser = user;
          state.counter = user.contacts.length;
        }
      }
    },

    logOut: (state) => {
      state.result = false;
      state.message = '';
      state.activeUser = { login: '', password: '', name: '', gender: '', post: '', contacts: [] };
    },
    addContact: (state, action: PayloadAction<IUserContact>) => {
      state.activeUser.contacts = [...state.activeUser.contacts, action.payload];
      state.counter = state.counter++;
    },
  },
});

export const { check, logOut, addContact } = userSlice.actions;
export default userSlice.reducer;
