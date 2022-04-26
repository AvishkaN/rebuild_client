import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import clickSlice from './slices/clickSlice';
import userSlice from './slices/userSlice';


export const store = configureStore({
  reducer: {
    
    clicks: clickSlice,
    products: productSlice,
    user: userSlice,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});