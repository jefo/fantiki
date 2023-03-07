import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist-indexeddb-storage";

import logger from "redux-logger";
import sources from "./sources.duck";

const persistConfig = {
  key: "root",
  storage: storage("myDB"),
};

const rootReduser = combineReducers({ sources });

const persistedReducer = persistReducer(persistConfig, rootReduser);

const store = configureStore({
  reducer: persistedReducer,

  middleware: [logger],

  devTools: process.env.NODE_ENV !== "production",
});

export const persister = persistStore(store);
export default store;
