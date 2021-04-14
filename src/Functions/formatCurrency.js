export const formatCurrency = value =>
  value.toLocaleString('ru-RU', { style: 'currency', currency: 'UAH' });
