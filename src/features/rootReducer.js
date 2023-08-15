import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./user/userSlice";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSlice } from "./api/apiSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, userReducer);

export const rootReducer = combineReducers({
  user: persistedAuthReducer,
  categories: categoriesSlice,
  products: productsSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
