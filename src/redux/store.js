import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import orders from './orders/ordersReducer';
import sort from './sort/sortReducer';
import menuDB from './menuDB/menuDBReducer';
import modals from './modals/modalsReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  thunk,
  logger,
];

const basketPersistConfig = {
  key: 'basket',
  storage,
};

export const store = configureStore({
  reducer: {
    orders,
    sort,
    menuDB,
    modals,

    // basket: persistReducer(basketPersistConfig, basketReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
