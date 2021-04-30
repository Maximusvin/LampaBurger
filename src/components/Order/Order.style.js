import styled from 'styled-components';
import { white } from '../../assets/colors';
import { Link } from 'react-router-dom';

export const OrderWrap = styled.section`
  padding-top: 80px;
  padding-bottom: 50px;
  color: ${white};

  @media (max-width: 576px) {
    padding-top: 180px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 576px) {
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

export const ClearOrderWrap = styled.button`
  display: flex;
  align-items: center;
  color: #888;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s linear;

  :hover {
    color: #f7cc10;
  }
`;

export const Title = styled.h2`
  font-size: 45px;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const OrderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;

  @media (max-width: 1283px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OrderListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  padding: 40px 30px 40px;
  background-color: #1d1d1d;

  @media (max-width: 1283px) {
    width: 530px;
  }

  @media (max-width: 992px) {
    width: 430px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 20px 0;
  }
`;

export const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 6px;

  @media (max-width: 576px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
`;

export const Total = styled.p`
  margin-bottom: 20px;
`;

export const Button = styled.button`
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
  margin-left: auto;
  margin-right: auto;

  :hover {
    background: #ffd900;
    color: #0f0f0f;
  }
`;

export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgInEmptyCart = styled.img`
  margin-bottom: 35px;
`;

export const TextInEmptyCart = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #888;
  transition: all 0.2s linear;
  padding: 15px 25px;
  border-radius: 25px;

  :hover {
    color: #f7cc10;
    background-color: #2f2f2f;
  }
`;

export const LinkToHome = styled(Link)``;
