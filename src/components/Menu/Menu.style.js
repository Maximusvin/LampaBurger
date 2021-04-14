import styled from 'styled-components';
import { black, white } from '../../assets/colors';

export const MenuWrap = styled.main`
  color: ${white};
  background-size: cover;
  background-color: ${black};
`;

export const Title = styled.h2`
  font-size: 55px;
  margin-bottom: 50px;

  @media (max-width: 576px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 50px;
`;
