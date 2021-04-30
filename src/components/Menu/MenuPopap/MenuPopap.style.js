import styled from 'styled-components';

export const PopapWrap = styled.div`
  width: 280px;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const PopapTextWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

export const PopapActiveItem = styled.p`
  color: #ffdf55;
  text-decoration: underline dotted #ffdf55;
  cursor: pointer;
`;

export const SortText = styled.p`
  margin-right: 10px;
`;

export const Popap = styled.div`
  z-index: 100;
  position: absolute;
  right: 0;
  top: 25px;
  width: max-content;
  background-color: #2f2f2f;
  padding: 5px 0;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const PopapList = styled.div`
  border-radius: 5px;
`;

export const PopapItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#f7cc10' : '')};
  color: ${props => (props.active ? '#000' : '')};
  transition: all 0.2s linear;

  :hover {
    color: ${props => (props.active ? '' : '#f7cc10')};
    background-color: ${props => (props.active ? '#f7cc10' : '#1d1d1d')};
  }
`;
