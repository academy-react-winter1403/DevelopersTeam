import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import profileReducer from "./slices/profileUpdateImgSlice";

const store = configureStore({
  reducer: {
    accounts: accountReducer,
    profile: profileReducer,
  },
});

export default store;
