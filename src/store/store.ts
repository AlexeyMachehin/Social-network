import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const createStore = () => {
  return configureStore({
    reducer: {
      userReducer,
    },
  });
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
