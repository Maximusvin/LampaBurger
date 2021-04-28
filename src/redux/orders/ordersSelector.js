import { totalPriceItem } from 'Functions';

export const getItems = state => state.orders.items;

export const getTotalCount = state =>
  getItems(state).reduce((total, item) => total + item.count, 0);

export const getTotalPrice = state => {
  const total = getItems(state).reduce(
    (total, item) => totalPriceItem(item) + total,
    0,
  );

  return total;
};
