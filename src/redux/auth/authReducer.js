import { createReducer } from '@reduxjs/toolkit';
import { createAuth } from './authActions';

const auth = createReducer(null, {
  [createAuth]: (_, { payload }) => payload,
});

export default auth;
