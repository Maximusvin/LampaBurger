import { createAction } from '@reduxjs/toolkit';

export const checkChoices = createAction('orders/checkChoices');
export const checkToppings = createAction('orders/checkToppings');
export const addToOrder = createAction('orders/addToOrder');
