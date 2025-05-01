import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import profileReducer from "./slices/profileUpdateImgSlice";
import stepsReducer from "./slices/loginSteps";

const store = configureStore({
  reducer: {
    accounts: accountReducer,
    profile: profileReducer,
    steps: stepsReducer,
  },
});

export default store;
