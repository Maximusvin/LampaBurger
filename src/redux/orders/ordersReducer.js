import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  checkChoices,
  addToOrder,
  showOrderConfirm,
  setTotalPrice,
  setTotalCount,
  deleteItemInOrders,
  clearOrdersList,
} from './ordersActions';

//  payload: [order],

const orders = createReducer([], {
  [addToOrder]: (state, { payload }) => payload,
  [clearOrdersList]: (_, { payload }) => [],
  [deleteItemInOrders]: (state, { payload }) =>
    state.filter((_, index) => index !== payload),
});

const totalPrice = createReducer(0, {
  [setTotalPrice]: (state, { payload }) => state + payload,
});

const totalCount = createReducer(0, {
  [setTotalCount]: (state, { payload }) => state + payload,
});

const choice = createReducer('', {
  [checkChoices]: (state, { payload }) => payload,
});

const isOpenOrderConfirm = createReducer(false, {
  [showOrderConfirm]: (_, { payload }) => payload,
});

export default combineReducers({
  orders,
  totalPrice,
  totalCount,
  choice,
  isOpenOrderConfirm,
});
