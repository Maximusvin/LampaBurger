import { totalPriceItem, formatCurrency } from 'Functions';

export const getItems = state => state.orders.items;
export const getTotalCount = state => getItems(state).length;
export const getTotalPrice = state => {
  const total = getItems(state).reduce(
    (total, item) => totalPriceItem(item) + total,
    0,
  );

  return total;
};
