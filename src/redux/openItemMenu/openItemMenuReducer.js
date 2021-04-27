import { createReducer } from '@reduxjs/toolkit';
import { addOpenItemMenu } from './openItemMenuActions';

const openItemMenu = createReducer(null, {
  [addOpenItemMenu]: (_, { payload }) => payload,
});

export default openItemMenu;
