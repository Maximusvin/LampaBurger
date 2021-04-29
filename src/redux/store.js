import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';

import ordersReducer from './orders/ordersReducer';
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
  key: 'orders',
  storage,
  blacklist: ['sort', 'menuDB', 'modals', 'form'],
};

const rootReducer = combineReducers({
  orders: ordersReducer,
  sort,
  menuDB,
  modals,
  form: formReducer,
});

const persistedReducer = persistReducer(basketPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
