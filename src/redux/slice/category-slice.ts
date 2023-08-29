import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    setIsVisible: (state, action: PayloadAction<CategoryState>) => {
      const payload = {
        ...state,
        ...action.payload
      };
      return payload;
    }
  }
});

export const { setIsVisible } = categorySlice.actions;
export default categorySlice.reducer;
