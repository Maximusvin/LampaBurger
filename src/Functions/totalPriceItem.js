export const totalPriceItem = order =>
  Number((order.price * order.count).toFixed(2));
