import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { Profile, Status } from '@/services/authService';

interface UserState {
  id: number;
  name: string;
  profile: Profile;
  status: Status;
}

const initialState: UserState = {
  id: 1,
  name: "John Doe",
  profile: Profile.ADMIN,
  status: Status.ACTIVE
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      return {...state, action};
    },
    login: (state, action: PayloadAction<UserState>) => {
      return {...state, action};
    },
    logout: (state, action: PayloadAction<UserState>) => {
      return {...state, action};
    }
  },
});

export const { updateUser, login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;