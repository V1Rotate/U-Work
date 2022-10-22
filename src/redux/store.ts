import { configureStore } from '@reduxjs/toolkit';

import cart from './cart/slice';
import uWorkItem from './uWorkItem/slice';
import applicationItem from './applicationItem/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart,
    uWorkItem,
    applicationItem,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
