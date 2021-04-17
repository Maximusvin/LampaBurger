import styled from 'styled-components';
import { white, yellow } from '../../assets/colors';

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

  @media (max-width: 576px) {
    padding: 10px 15px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  color: ${white};
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
`;

export const ButtonAuth = styled.button`
  color: ${white};
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;

  :hover {
    color: ${yellow};
  }
`;

export const ButtonCart = styled.button`
  color: ${white};
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  margin-right: 20px;

  :hover {
    color: ${yellow};
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
