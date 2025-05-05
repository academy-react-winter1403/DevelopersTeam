import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import profileReducer from "./slices/profileUpdateImgSlice";
import stepsReducer from "./slices/loginSteps";
import loginReducer from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    accounts: accountReducer,
    profile: profileReducer,
    steps: stepsReducer,
    login: loginReducer,
  },
});

export default store;
