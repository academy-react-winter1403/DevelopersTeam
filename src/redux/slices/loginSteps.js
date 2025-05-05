import { createSlice } from "@reduxjs/toolkit";

const stepsSlice = createSlice({
  name: "steps",
  initialState: { value: 1 },
  reducers: {
    setSteps: (state) => {
      state.value += 1;
    },
  },
});

export const { setSteps } = stepsSlice.actions;
export default stepsSlice.reducer; 