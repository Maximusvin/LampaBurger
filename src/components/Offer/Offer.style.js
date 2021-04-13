import styled from 'styled-components';
import bgOffer from '../../assets/images/hd-1.jpg';

import { white } from '../../assets/colors';

export const OfferWrap = styled.div`
  background: url(${bgOffer});
  background-size: cover;
  width: 100%;
`;

export const Description = styled.div`
  width: 680px;
  padding-top: 150px;
  padding-bottom: 150px;
  color: ${white};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 64px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const SubTitle = styled.p`
  width: 475px;
  margin-bottom: 60px;
  line-height: 1.5em;
  font-size: 26px;
  font-weight: 500;
`;

export const Button = styled.a`
  padding: 10px 35px;
  cursor: pointer;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 25px;
  transition: all 0.2s linear;

  :hover: {
    background-color: rgba(255, 255, 255, 1);
    color: rgb(53, 53, 53);
  }
`;
