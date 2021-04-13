import styled from 'styled-components';
import { white } from '../../assets/colors';

export const OrderWrap = styled.section`
  padding-top: 80px;
  padding-bottom: 50px;
  color: ${white};
`;

export const Title = styled.h2`
  font-size: 55px;
  margin-bottom: 50px;
  text-align: center;
`;

export const OrderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const OrderList = styled.ul`
  width: 600px;
  padding: 40px 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1d1d1d;
`;

export const Form = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 5px;
  width: 100%;
`;

export const Total = styled.div`
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

export const EmptyList = styled.div``;
