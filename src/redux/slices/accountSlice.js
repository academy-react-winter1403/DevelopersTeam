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
      state.currentAccount = action.payload;
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
      state.accounts.push(action.payload);
      state.currentAccount = action.payload;
    },
  },
});

export const { setAccounts, setCurrentAccount, logoutAccount, addAccount } =
  accountSlice.actions;
export default accountSlice.reducer;
