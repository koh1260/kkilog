import { createSlice } from '@reduxjs/toolkit';

export interface CategoryState {
  isVisible: boolean;
}

const initialState: CategoryState = {
  isVisible: false
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    showCategory: (state) => {
      state.isVisible = true;
    },
    hideCategory: (state) => {
      state.isVisible = false;
    }
  }
});

export const { showCategory, hideCategory } = categorySlice.actions;
export default categorySlice.reducer;
