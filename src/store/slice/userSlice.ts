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
  user.login = localStorage.getItem('login') || '';
  user.password = localStorage.getItem('pass') || '';
  user.name = localStorage.getItem('name') || '';
  user.gender = localStorage.getItem('gender') || '';
  user.post = localStorage.getItem('post') || '';
  user.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
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
          localStorage.setItem('login', user.login);
          localStorage.setItem('password', user.password);
          localStorage.setItem('name', user.name);
          localStorage.setItem('gender', user.gender);
          localStorage.setItem('post', user.post);
          localStorage.setItem('contacts', JSON.stringify(user.contacts));
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
      state.activeUser.contacts[contactIndex].name = action.payload.name;
      state.activeUser.contacts[contactIndex].email = action.payload.email;
      state.activeUser.contacts[contactIndex].phone = action.payload.phone;
      state.activeUser.contacts[contactIndex].address = action.payload.address;
    },
  },
});

export const { check, logOut, addContact, deleteContact, changeContact } =
  userSlice.actions;
export default userSlice.reducer;
