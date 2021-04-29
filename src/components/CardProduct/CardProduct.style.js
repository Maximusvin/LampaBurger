import styled from 'styled-components';
import { white } from '../../assets/colors';

export const ProductCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${white};
  padding: 40px;
`;

export const DescrProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  margin-right: 20px;
`;

export const Title = styled.h2`
  font-size: 38px;
  line-height: 58px;
  color: #f4f4f4;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 148.8%;
  color: #f4f4f4;
  border-left: 4px solid #ffd900;
  padding-left: 16px;
  margin-bottom: 24px;
`;

export const ImageWrap = styled.div`
  width: 35%;
`;

export const Image = styled.img``;

export const Control = styled.div``;

export const Button = styled.button`
  background: #0f0f0f;
  display: flex;
  align-items: center;
  outline: none;
  width: 100%;
  border: 4px solid ${props => (props.disabled ? '#646464' : '#ffd900')};
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);
  color: #0f0f0f;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 0;

  :hover {
    border: 4px solid ${props => (props.disabled ? '#646464' : '#f1ce03')};
  }
`;

export const FinalCost = styled.span`
  width: 35%;
  color: #f4f4f4;
  background: #0f0f0f;
  text-align: center;
  font-size: 18px;
  text-transform: none;
  display: block;
`;

export const Add = styled.span`
  display: block;
  width: 65%;
  color: #0f0f0f;
  background: ${props => (props.disabled ? '#646464' : '#ffd900')};
  padding: 12px;
  text-align: center;
  transition: all 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);

  :hover {
    background: ${props => (props.disabled ? '#646464' : '#f1ce03')};
  }
`;

export const CountWrapper = styled.span`
  width: 65%;
  color: #0f0f0f;
  background: #ffd900;
  padding: 12px;
  text-align: center;
  transition: all 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  cursor: pointer;
`;
