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
`;

export const Header = styled.div`
  color: ${black};
  background-color: ${yellow};
  padding: 10px;
  border-radius: 5px;
`;

export const Title = styled.p`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Сost = styled.p`
  text-align: right;
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
`;
