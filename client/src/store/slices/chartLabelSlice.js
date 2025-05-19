import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 'Tutti',
};

const chartLabelSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = chartLabelSlice.actions;
export default chartLabelSlice.reducer;