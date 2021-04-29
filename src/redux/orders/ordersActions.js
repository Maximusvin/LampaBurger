import { createAction } from '@reduxjs/toolkit';

export const addToOrder = createAction('orders/addToOrder');
export const deleteItemInOrders = createAction('orders/deleteItemInOrders');
export const clearOrdersList = createAction('orders/clearOrdersList');
export const changeItemToOrders = createAction(
  'orders/changeItemToOrders',
  (idx, count) => ({ payload: { idx, count } }),
);
