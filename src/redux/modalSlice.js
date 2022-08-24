import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalData: {},
  showModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: (state, { payload }) => {
      state.showModal = payload;
      state.modalData = {};
    },
    setModalData: (state, { payload }) => {
      state.modalData = payload;
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

export const { closeModal, addList } = modalSlice.actions;

export default modalSlice.reducer;
