import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/slice/auth";
import {apiSlice} from './apiSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false}).concat(apiSlice.middleware),
      devTools: true,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
