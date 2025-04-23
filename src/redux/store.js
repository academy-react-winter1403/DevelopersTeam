import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";

const store = configureStore({
  reducer: {
    accounts: accountReducer,
  },
});

export default store;
