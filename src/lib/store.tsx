import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/slice/auth";
import {apiSlice} from './apiSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});
export const setupStore= (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false}).concat(apiSlice.middleware),
      devTools: true,
    preloadedState
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof setupStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore["dispatch"];
