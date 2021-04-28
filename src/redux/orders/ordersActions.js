import { createAction } from '@reduxjs/toolkit';

export const addToOrder = createAction('orders/addToOrder');
export const deleteItemInOrders = createAction('orders/deleteItemInOrders');
export const clearOrdersList = createAction('orders/clearOrdersList');

export const setTotalPrice = createAction('orders/totalPrice');
export const setTotalCount = createAction('orders/setTotalCount');
