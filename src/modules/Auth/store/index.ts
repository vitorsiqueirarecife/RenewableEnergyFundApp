import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Auth, LoginForm, User} from '../shared/types';

const initialState: Auth = {
  Session: null,
  Users: [],
};

export const auth = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      const found = state.Users?.find(
        user => user.email === action.payload.email,
      );

      if (found) {
        throw 'Email already exists';
      }

      state.Users?.push(action.payload);
    },
    login: (state, action: PayloadAction<LoginForm>) => {
      const found = state.Users?.find(
        user =>
          user.email === action.payload.email &&
          user.password === action.payload.password,
      );

      console.log('----');
      console.log(state.Users);
      console.log(action.payload);
      console.log(found);

      if (found) {
        state.Session = found;
        console.log(state.Session);
      } else {
        throw 'User not found';
      }
    },
  },
});

export const {register, login} = auth.actions;

export default auth.reducer;
