import styled from 'styled-components';
import { white } from '../../assets/colors';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  background-color: #0f0f0f;
  color: ${white};
  transition: all 0.3s linear;
  border-bottom: 1px solid #373737;

  @media (max-width: 768px) {
    padding: 10px 5px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 25px 0;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${white};

  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

export const ImgLogo = styled.img`
  width: 30px;
  margin-right: 15px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const ControlsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ButtonAuth = styled.button`
  color: #ffd900;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  background-color: #2f2f2f;
  padding: 5px 20px;
  border-radius: 25px;

  :hover {
    background-color: #454545;
  }
`;

export const ButtonCart = styled(NavLink)`
  position: relative;
  color: #ffd900;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  margin-right: 15px;
  background-color: #2f2f2f;
  padding: 5px 20px;
  border-radius: 25px;

  @media (max-width: 576px) {
    margin-bottom: 10px;
  }

  :hover {
    background-color: #454545;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s linear;
`;

export const UserName = styled.p`
  margin-right: 10px;
`;

export const UserImg = styled.img`
  width: 30px;
  margin-right: 20px;
`;

export const Price = styled.span`
  display: block;
  margin-right: 5px;
  padding-top: 5px;
`;

export const Count = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  background-color: red;
  width: 15px;
  height: 15px;
  font-size: 12px;
  color: #fff;
`;
