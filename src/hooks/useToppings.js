import { useState } from 'react';

const getTopping = toppings =>
  toppings.map(item => ({
    name: item,
    checked: false,
  }));

export const useToppings = openItem => {
  const [toppings, setToppings] = useState(getTopping(openItem.toppings));

  const checkToppings = idx =>
    setToppings(
      toppings.map((item, i) => {
        const newItem = { ...item };
        return i === idx ? { ...newItem, checked: !newItem.checked } : newItem;
      }),
    );

  return { toppings, checkToppings };
};

// [{name: "Cola", checked: false}, {name: "Fanta", checked: false}]
