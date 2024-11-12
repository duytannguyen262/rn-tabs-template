import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: null, // for user object
  accessToken: null, // for storing the JWT
  refreshToken: null,
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.userInfo = null;
    },
    signIn: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
