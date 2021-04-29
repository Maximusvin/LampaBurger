import { createReducer } from '@reduxjs/toolkit';
import {
  addToOrder,
  deleteItemInOrders,
  clearOrdersList,
  changeItemToOrders,
} from './ordersActions';

const orders = createReducer([], {
  [addToOrder]: (_, { payload }) => payload,
  [clearOrdersList]: (_, actions) => [],
  [changeItemToOrders]: (state, { payload }) =>
    state.map((order, index) =>
      index === payload.idx ? { ...order, count: payload.count } : order,
    ),
  [deleteItemInOrders]: (state, { payload }) =>
    state.filter((_, index) => index !== payload),
});

export default orders;
