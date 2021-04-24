import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { checkChoices, addToOrder } from './ordersActions';

const orders = createReducer([], {
  [addToOrder]: (state, { payload }) => [...state, payload],
});

const choice = createReducer('', {
  [checkChoices]: (state, { payload }) => payload,
});

export default combineReducers({
  orders,
  choice,
});
