import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    setIsVisibleLoginModal: (state, action: PayloadAction<LoginModalState>) => {
      const payload = {
        ...state,
        ...action.payload,
      };
      return payload;
    }
  }
});

export const { setIsVisibleLoginModal } = modalSlice.actions;
export default modalSlice.reducer;
