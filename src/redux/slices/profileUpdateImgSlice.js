import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  currentImage: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.images = action.payload;
    },
    addProfileImage: (state, action) => {
      state.images.push(action.payload);
    },
    deleteProfileImage: (state, action) => {
      state.images = state.images.filter((img) => img.id !== action.payload);
    },
    updateProfilePicture: (state, action) => {
      state.currentImage = action.payload;
    },
  },
});

export const {
  setProfile,
  addProfileImage,
  deleteProfileImage,
  updateProfilePicture,
} = profileSlice.actions;

export default profileSlice.reducer;
