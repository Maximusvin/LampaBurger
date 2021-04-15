import {
  ToppingWrap,
  Title,
  ToppingLabel,
  ToppingCheckbox,
} from './Toppings.style';

const Toppings = ({ toppings, checkToppings }) => {
  console.log(toppings);
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
