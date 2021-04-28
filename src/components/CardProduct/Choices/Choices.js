import { ChoiceWrap, Title, ChoiceLabel, ChoiceRadio } from './Choices.style';

const Choices = ({ openItem, choice, changeChoices }) => {
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
              onChange={changeChoices}
            />
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  );
};

export default Choices;
