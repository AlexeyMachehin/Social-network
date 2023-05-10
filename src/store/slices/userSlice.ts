import { createSlice } from '@reduxjs/toolkit';
// {
//   user: {
//     email: '',
//     id: '',
//     photoURL: '',
//     name: '',
//     surname: '',
//     age: '',
//     city: '',
//     university: '',
//     posts: [],
//   },
// }
const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    removeUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
