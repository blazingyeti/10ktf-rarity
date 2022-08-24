import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parentName: "",
  nftNumber: "",
  itemsFound: [],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setParentName: (state, { payload }) => {
      state.parentName = payload;
    },
    setNftNumber: (state, { payload }) => {
      state.nftNumber = payload;
    },
    addItemFound: (state, { payload }) => {
      state.itemsFound = [...state.itemsFound, payload];
    },
    clearItemsFound: (state) => {
      state.itemsFound = [];
    },
  },
});

export const { setParentName, setNftNumber, addItemFound, clearItemsFound } =
  itemSlice.actions;

export default itemSlice.reducer;
