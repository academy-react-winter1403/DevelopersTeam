import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    UserLoginInfo: {
      phoneOrGmail: "",
      password: "",
      rememberMe: "",
    },
  },
  reducers: {
    handleLogin: (state, action) => {
      state.UserLoginInfo = { ...state.UserLoginInfo, ...action.payload };
    },
  },
});

export const { handleLogin } = loginSlice.actions;

export default loginSlice.reducer;
