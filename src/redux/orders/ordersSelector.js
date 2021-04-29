import { totalPriceItem } from 'Functions';

export const getOrders = state => state.orders;

export const getTotalCount = state =>
  getOrders(state).reduce((total, item) => total + item.count, 0);

export const getTotalPrice = state => {
  const total = getOrders(state).reduce(
    (total, item) => totalPriceItem(item) + total,
    0,
  );

  return total;
};
