import styled from 'styled-components';

export const ChoiceWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 500px;
  margin-bottom: 15px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const ChoiceLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 15px;
  margin-bottom: 5px;
`;

export const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;
