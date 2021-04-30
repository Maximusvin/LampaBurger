import styled from 'styled-components';

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 40px 30px 40px;
  background-color: #1d1d1d;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const InputWrap = styled.div`
  color: ${props => (props.error ? '#ff0000' : '#fff')};
  font-size: 12px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid
    ${({ touched, error }) => (touched && error ? '#ff0000' : '')};
`;

export const Button = styled.button`
  width: 100%;
  border-color: #373737;
  background: #373737;
  color: #888;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  padding: 12px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin-top: 25px;

  :hover {
    background: #ffd900;
    color: #0f0f0f;
  }
`;
