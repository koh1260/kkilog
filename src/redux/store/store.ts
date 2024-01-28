import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slice/user-slice';
import categoryBarSlice from '../slice/category-bar-slice';
import modalSlice from '../slice/login-modal-slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    categoryBar: categoryBarSlice,
    modal: modalSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
