import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  id: number | null;
  username: string | null;
  role: string | null;
  logined?: boolean;
}

const initialState: UserState = {
  id: null,
  username: null,
  role: null,
  logined: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const payload = {
        ...state,
        ...action.payload
      };
      console.log(payload);
      return payload;
    },
    setLogined: (state, action: PayloadAction<{logined: boolean}>) => ({...state, ...action.payload}),
    clearUser: () => initialState
  }
});

export const { setUser, clearUser, setLogined } = userSlice.actions;
export default userSlice.reducer;
