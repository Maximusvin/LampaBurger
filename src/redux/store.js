import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ordersReducer from './orders/ordersReducer';
import sortReducer from './sort/sortReducer';
import menuReducer from './menuDB/menuDBReducer';
import openItemMenuReducer from './openItemMenu/openItemMenuReducer';
import authReducer from './auth/authReducer';

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
    orders: ordersReducer,
    sort: sortReducer,
    menuDB: menuReducer,
    openItemMenu: openItemMenuReducer,
    auth: authReducer,

    // basket: persistReducer(basketPersistConfig, basketReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
