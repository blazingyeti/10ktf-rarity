import { configureStore } from "@reduxjs/toolkit";
import loadoutReducer from "./loadoutSlice";
import itemReducer from "./itemSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    loadout: loadoutReducer,
    items: itemReducer,
    modal: modalReducer,
  },
});
