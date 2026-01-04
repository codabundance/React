import { createSlice } from "@reduxjs/toolkit";

// one slice for privacy value
const privacySlice = createSlice({
  initialState: false,
  name: "privacy",
  reducers: {
    togglePrivacy: (state, action) => {
      return (state = !state);
    },
  },
});

export const privacyActions = privacySlice.actions;
export default privacySlice;
