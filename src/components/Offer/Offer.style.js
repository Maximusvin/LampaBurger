import styled from 'styled-components';
import bgOffer from '../../assets/images/hd-1.jpg';

import { yellow, white } from '../../assets/colors';

export const OfferWrap = styled.div`
  height: 100vh;
  background: url(${bgOffer});
`;

export const Description = styled.div`
  width: 680px;
  padding-top: 150px;
  color: ${white};
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 64px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 25px;
`;
