import {
  ToppingWrap,
  Title,
  ToppingLabel,
  ToppingCheckbox,
} from './Toppings.style';

const Toppings = ({ toppings, checkToppings }) => {
  // const getTopping = toppings =>
  //   toppings.map(item => ({
  //     name: item,
  //     checked: false,
  //   }));

  // const readyTopping = openItem.topping
  //   ? openItem.topping
  //   : openItem.toppings
  //   ? getTopping(openItem.toppings)
  //   : [];

  // console.log(getTopping(readyTopping));

  return (
    <>
      <Title>Добавки</Title>
      <ToppingWrap>
        {toppings.map((topping, k) => (
          <ToppingLabel key={k}>
            <ToppingCheckbox
              type="checkbox"
              checked={topping.checked}
              onChange={() => checkToppings(k)}
            />
            {topping.name}
          </ToppingLabel>
        ))}
      </ToppingWrap>
    </>
  );
};

export default Toppings;
