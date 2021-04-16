import { useState } from 'react';

const getTopping = toppings =>
  toppings.map(item => ({
    name: item,
    checked: false,
  }));

export const useChoices = openItem => {
  // const readyTopping = openItem.toppings ? getTopping(openItem.toppings) : [];
  const [choice, setChoice] = useState(openItem.choices);

  const checkChoices = e => setChoice(e.target.value);

  return { choice, checkChoices };
};
