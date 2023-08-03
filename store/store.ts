import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import carouselSlice from './carousel/carouselSlice'

import userSlice from "@/store/user/userSlice";
import cartSlice from "@/store/cart/cartSlice";

const persistConfig = {
  key: 'MaxShop',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart:cartSlice,
  carousel:carouselSlice,
  user:userSlice
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor =persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>