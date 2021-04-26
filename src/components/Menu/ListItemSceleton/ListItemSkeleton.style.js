import styled from 'styled-components';
import { yellow, black } from '../../../assets/colors';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 35px;
`;

export const Item = styled.li`
  cursor: pointer;
  max-width: 500px;
  font-size: 20px;
  height: 420px;

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

export const Header = styled.div`
  text-align: center;
  color: ${black};
  background-color: ${yellow};
  padding: 10px;
  border-radius: 5px;
`;

export const Image = styled.img`
  position: relative;
  max-width: 350px;
  top: -25px;
  transition: all 0.3s linear;
  margin-left: auto;
  margin-right: auto;

  :hover {
    transform: rotate(5deg) scale(1.1);
  }

  @media (max-width: 576px) {
    max-width: 100%;
    top: -12px;
  }
`;
