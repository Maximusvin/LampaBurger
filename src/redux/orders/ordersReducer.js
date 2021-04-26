import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { checkChoices, addToOrder, showOrderConfirm } from './ordersActions';

const orders = createReducer([], {
  [addToOrder]: (state, { payload }) => [...state, payload],
});

const choice = createReducer('', {
  [checkChoices]: (state, { payload }) => payload,
});

const isOpenOrderConfirm = createReducer(false, {
  [showOrderConfirm]: (_, { payload }) => payload,
});

export default combineReducers({
  orders,
  choice,
  isOpenOrderConfirm,
});
