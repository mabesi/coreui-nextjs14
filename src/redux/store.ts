import { configureStore } from "@reduxjs/toolkit";
import { sidebarReducer } from "./features/sidebar/sidebarSlice";
import { userReducer } from "./features/user/userSlice";

export const makeStore =  () => {
  return configureStore({
    reducer: {
      sidebar: sidebarReducer,
      user: userReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];