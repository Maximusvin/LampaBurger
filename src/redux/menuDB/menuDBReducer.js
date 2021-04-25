import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { setMenuData } from './menuDBActions';

const menuData = createReducer(null, {
  [setMenuData]: (state, { payload }) => payload,
});

export default combineReducers({
  menuData,
});
