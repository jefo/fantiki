import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import sources from './sources.duck';

export const store = configureStore({
    reducer: { sources },
    middleware: [
        logger,
    ],
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
