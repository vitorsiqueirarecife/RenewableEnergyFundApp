import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Auth, LoginForm, User} from '../shared/types';

const initialState: Auth = {};

export const auth = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<User>) => {
      state.Users?.push(action.payload);
    },
    login: (state, action: PayloadAction<LoginForm>) => {
      const found = state.Users?.find(
        user =>
          user.email === action.payload.email &&
          user.password === action.payload.password,
      );

      if (found) {
        state.Session = found;
      } else {
        throw 'User not found!';
      }
    },
  },
});

export const {register} = auth.actions;

export default auth.reducer;
