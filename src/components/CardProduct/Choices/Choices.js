import { useSelector, useDispatch } from 'react-redux';
import { ChoiceWrap, Title, ChoiceLabel, ChoiceRadio } from './Choices.style';
import { checkChoices } from 'redux/orders/ordersActions';

const Choices = ({ openItem }) => {
  const choice = useSelector(state => state.orders.choice);
  const dispatch = useDispatch();

  return (
    <>
      <Title>Выбор:</Title>
      <ChoiceWrap>
        {openItem.choices.map((item, k) => (
          <ChoiceLabel key={k}>
            <ChoiceRadio
              type="radio"
              name="choices"
              value={item}
              checked={choice === item}
              onChange={e => dispatch(checkChoices(e.target.value))}
            />
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  );
};

export default Choices;
