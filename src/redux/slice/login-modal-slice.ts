import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  isVisibleLoginModal: boolean;
}

export interface LoginModalState {
  isVisibleLoginModal: boolean;
}

const initialState: ModalState = {
  isVisibleLoginModal: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isVisibleLoginModal = true;
    },
    closeLoginModal: (state) => {
      state.isVisibleLoginModal = false;
    }
  }
});

export const { openLoginModal, closeLoginModal } = modalSlice.actions;
export default modalSlice.reducer;
