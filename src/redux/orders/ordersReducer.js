import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addToOrder,
  setTotalPrice,
  setTotalCount,
  deleteItemInOrders,
  clearOrdersList,
} from './ordersActions';

const items = createReducer([], {
  [addToOrder]: (_, { payload }) => payload,
  // [addToOrder]: (state, { payload }) => ({
  //   ...state,
  //   items: payload,
  //   totalCount: state.items.length,
  // }),
  [clearOrdersList]: (_, { payload }) => [],
  [deleteItemInOrders]: (state, { payload }) =>
    state.filter((_, index) => index !== payload),
});

const totalPrice = createReducer(0, {
  [setTotalPrice]: (state, { payload }) => state + payload,
});

// const totalCount = createReducer(0, {
//   [setTotalCount]: (state, { payload }) => items.length,
// });

export default combineReducers({
  items,
  totalPrice,
  // totalCount,
});
