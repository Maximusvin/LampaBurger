import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { setMenuData, isLoaded } from './menuDBActions';

const menuData = createReducer([], {
  [setMenuData]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [isLoaded]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  menuData,
  isLoading,
});
