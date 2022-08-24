import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listVars: [],
  baseScore: 0
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestVar: (state, { payload }) => {
      state.testvar = payload;
    },
    addList: (state, { payload }) => {
      state.listVars = [...state.listVars, payload];
    },
  },
});

export const { setTestVar, addList } = testSlice.actions;

export default testSlice.reducer;
