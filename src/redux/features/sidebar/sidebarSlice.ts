import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  unfoldable: boolean;
  isVisible: boolean;
  isNarrow: boolean;
}

const initialState: SidebarState = {
  unfoldable: false,
  isVisible: true,
  isNarrow: false
}

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setUnfoldable: (state, action: PayloadAction<boolean>) => {
      state.unfoldable = action.payload;
      state.isNarrow = state.unfoldable;
    },
    setIsNarrow: (state, action: PayloadAction<boolean>) => {
      state.isNarrow = action.payload;
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    }
  },
});

export const { setUnfoldable, setVisible, setIsNarrow } = sideBarSlice.actions;

export const sidebarReducer = sideBarSlice.reducer;