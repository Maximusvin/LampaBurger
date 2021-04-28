import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addOpenItemMenu, showOrderConfirm } from './modalsActions';

const openItemMenu = createReducer(null, {
  [addOpenItemMenu]: (_, { payload }) => payload,
});

const isOpenOrderConfirm = createReducer(false, {
  [showOrderConfirm]: (_, { payload }) => payload,
});

export default combineReducers({
  openItemMenu,
  isOpenOrderConfirm,
});
