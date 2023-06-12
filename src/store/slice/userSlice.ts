import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser, IUserContact } from '../../types';
import { IAuthData, IAuthState, ResponseMessage } from '../types';
import users from '../../JSON/users.json';

const auth = localStorage.length !== 0;
const user: IUser = {
  login: '',
  password: '',
  name: '',
  gender: '',
  post: '',
  contacts: [],
};

if (auth) {
  const { login, password, name, gender, post, contacts } = JSON.parse(
    localStorage.getItem('user') || '{}'
  );
  user.login = login;
  user.password = password;
  user.name = name;
  user.gender = gender;
  user.post = post;
  user.contacts = contacts;
}

const initialState: IAuthState = {
  regUsers: users,
  result: auth ? true : false,
  message: '',
  activeUser: user,
  counter: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    check: (state, action: PayloadAction<IAuthData>) => {
      const user = state.regUsers.find(
        (user) => user.login === action.payload.login
      );

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
          localStorage.setItem('user', JSON.stringify(user));
        }
      }
    },

    logOut: (state) => {
      state.result = false;
      state.message = '';
      state.activeUser = {
        login: '',
        password: '',
        name: '',
        gender: '',
        post: '',
        contacts: [],
      };
      localStorage.clear();
    },
    addContact: (state, action: PayloadAction<IUserContact>) => {
      state.activeUser.contacts = [
        ...state.activeUser.contacts,
        action.payload,
      ];
      state.counter = state.counter++;
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.activeUser.contacts = state.activeUser.contacts.filter(
        (user) => user.id !== action.payload
      );
    },
    changeContact: (state, action: PayloadAction<IUserContact>) => {
      const contactIndex = state.activeUser.contacts.findIndex(
        (user) => user.id === action.payload.id
      );
      state.activeUser.contacts[contactIndex] = action.payload;
    },
  },
});

export const { check, logOut, addContact, deleteContact, changeContact } =
  userSlice.actions;
export default userSlice.reducer;
