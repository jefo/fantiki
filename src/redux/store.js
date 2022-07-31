import { configureStore } from '@reduxjs/toolkit';
import sources from './sources.duck';

export const store = configureStore({
    reducer: { sources },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
