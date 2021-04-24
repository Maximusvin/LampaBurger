import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ordersReducer from './orders/ordersReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  logger,
];

const basketPersistConfig = {
  key: 'basket',
  storage,
};

export const store = configureStore({
  reducer: {
    orders: ordersReducer,

    // basket: persistReducer(basketPersistConfig, basketReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
