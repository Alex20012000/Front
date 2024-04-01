import "@/styles/globals.css";
import "@/styles/login.css";
import "@/styles/presentation.css";
import "@/styles/catalog.css";
import "@/styles/cart.css";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice, cartSlice, workSlice } from "./store/slices";
import { useDispatch } from "react-redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

export const rootReducer = combineReducers({
  authSlice: authSlice.reducer,
  cartSlice: cartSlice.reducer,
  workSlice: workSlice.reducer,
});

const persistConfig = {
  key: "myPersistKeyword",
  storage: storage,
  whitelist: ["authSlice", "cartSlice", "workSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </StrictMode>
    </Provider>
  );
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
