import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Category } from '../../type';

interface CategorysState {
  categoryList: Category[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const initialState: CategorysState = {
  categoryList: [],
  isLoading: true,
  isError: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoryList: (state, action:  PayloadAction<Category[]>) => {
      state.categoryList = action.payload;
    },
    setIsLoading: (state, action:  PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action:  PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setError: (state, action:  PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});

export const { setCategoryList, setIsLoading, setIsError, setError } = categoriesSlice.actions;
export default categoriesSlice.reducer;