import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string;
  name: string;
  role: 'user' | 'admin' | null;
}

const initialState: UserState = {
  id: '1',
  name: 'Sample User',
  role: 'admin',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (_, action: PayloadAction<UserState>) => action.payload,
    clearUser: () => initialState,
  },
});

export const { setUserDetails, clearUser } = userSlice.actions;
export default userSlice.reducer;
