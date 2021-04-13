import {
  Input,
  ButtonIncrement,
  ButtonDecrement,
  ControlWrap,
} from './CountItem.style';

const CountItem = ({ count, setCount, onChange }) => {
  return (
    <ControlWrap>
      <ButtonIncrement
        disabled={count <= 1}
        onClick={() => setCount(count - 1)}
      >
        -
      </ButtonIncrement>
      <Input type="number" min="1" max="99" value={count} onChange={onChange} />
      <ButtonDecrement onClick={() => setCount(count + 1)}>+</ButtonDecrement>
    </ControlWrap>
  );
};

export default CountItem;
