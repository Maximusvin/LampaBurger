import { useSelector, useDispatch } from 'react-redux';
import { changeItemToOrders } from 'redux/orders/ordersActions';

import {
  Input,
  ButtonIncrement,
  ButtonDecrement,
  ControlWrap,
} from './OrderCountItem.style';

const CountItem = ({ index }) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.orders[index].count);

  const onChangeInput = e =>
    dispatch(changeItemToOrders(index, Number(e.target.value)));

  return (
    <ControlWrap>
      <ButtonIncrement
        disabled={count <= 1}
        onClick={() => dispatch(changeItemToOrders(index, count - 1))}
      >
        -
      </ButtonIncrement>
      <Input
        type="number"
        min="1"
        max="99"
        value={count}
        onChange={onChangeInput}
      />
      <ButtonDecrement
        onClick={() => dispatch(changeItemToOrders(index, count + 1))}
      >
        +
      </ButtonDecrement>
    </ControlWrap>
  );
};

export default CountItem;
