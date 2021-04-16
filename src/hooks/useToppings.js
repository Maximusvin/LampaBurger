import { useState } from 'react';

const getTopping = toppings =>
  toppings.map(item => ({
    name: item,
    checked: false,
  }));

export const useToppings = openItem => {
  const readyTopping = openItem.topping
    ? openItem.topping
    : openItem.toppings
    ? getTopping(openItem.toppings)
    : [];
  const [toppings, setToppings] = useState(readyTopping);

  const checkToppings = idx =>
    setToppings(
      toppings.map((item, i) => {
        const newItem = { ...item };
        return i === idx ? { ...newItem, checked: !newItem.checked } : newItem;
      }),
    );

  return { toppings, checkToppings };
};
