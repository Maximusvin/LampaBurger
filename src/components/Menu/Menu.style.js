import styled from 'styled-components';
import { black, white } from '../../assets/colors';

export const MenuWrap = styled.main`
  color: ${white};
  background-size: cover;
  background-color: ${black};
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 576px) {
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 55px;

  @media (max-width: 992px) {
    font-size: 38px;
  }

  @media (max-width: 576px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`;

export const Section = styled.section`
  padding-top: 80px;
`;
