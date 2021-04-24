import { createReducer } from '@reduxjs/toolkit';
import { setSortBy } from './sortActions';

const sort = createReducer('popular', {
  [setSortBy]: (_, { payload }) => payload,
});

export default sort;
