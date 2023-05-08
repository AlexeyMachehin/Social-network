import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const select = (state: RootState) => state;

export const selectorUser = createSelector(
  [select],
  state => state.userReducer.user,
);
