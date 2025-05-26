import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
  currentAccount: null,
};

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload;
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount =
        typeof action.payload === "string"
          ? JSON.parse(action.payload)
          : action.payload;
    },
    logoutAccount: (state, action) => {
      const remainingAccounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );

      state.accounts = remainingAccounts;

      if (state.currentAccount?.id === action.payload) {
        state.currentAccount =
          remainingAccounts.length > 0 ? remainingAccounts[0] : null;
      }
    },
    addAccount: (state, action) => {
      const newAccount =
        typeof action.payload === "string"
          ? JSON.parse(action.payload)
          : action.payload;

      state.accounts.push(newAccount);
      state.currentAccount = newAccount;
    },
    updateCurrentAccountProfile: (state, action) => {
      if (state.currentAccount) {
        state.currentAccount = {
          ...state.currentAccount,
          profileData: action.payload,
        };
      }
    },
  },
});

export const {
  setAccounts,
  setCurrentAccount,
  logoutAccount,
  addAccount,
  updateCurrentAccountProfile,
} = accountSlice.actions;
export default accountSlice.reducer;
