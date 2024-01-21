import { createSlice } from '@reduxjs/toolkit';

export interface CategoryState {
  isVisible: boolean;
}

const initialState: CategoryState = {
  isVisible: false
};

const categoryBarSlice = createSlice({
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

export const { showCategory, hideCategory } = categoryBarSlice.actions;
export default categoryBarSlice.reducer;
