import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { setMenuData, setLoaded } from './menuDBActions';

const menuData = createReducer(null, {
  [setMenuData]: (_, { payload }) => payload,
});

const isLoaded = createReducer(false, {
  [setLoaded]: (_, { payload }) => payload,
  [setMenuData]: (_, { payload }) => true,
});

export default combineReducers({
  menuData,
  isLoaded,
});
