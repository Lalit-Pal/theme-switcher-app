import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeSelect",
  initialState: {
    selectedTheme: "light",
  },
  reducers: {
    switchTheme: (state, action) => {
      return { selectedTheme: action.payload };
    },
  },
});
export default themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;
