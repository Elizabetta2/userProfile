import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export const userSelector = (state) => state.user;

export default userSlice.reducer;
