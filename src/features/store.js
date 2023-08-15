import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";

import { rootReducer } from "./rootReducer";
import { apiSlice } from "./api/apiSlice"; 

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat(apiSlice.middleware), 
});

export const persistor = persistStore(store);
