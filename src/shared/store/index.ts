import {configureStore} from '@reduxjs/toolkit';

import auth from '../../modules/Auth/store';

export const store = configureStore({
  reducer: {
    auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
