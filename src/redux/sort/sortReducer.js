import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { setSortByBurger, setSortByOther } from './sortActions';

const sortBurger = createReducer('popular', {
  [setSortByBurger]: (_, { payload }) => payload,
});

const sortOther = createReducer('popular', {
  [setSortByOther]: (_, { payload }) => payload,
});

export default combineReducers({
  sortBurger,
  sortOther,
});
