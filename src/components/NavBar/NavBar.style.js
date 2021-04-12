import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  background-color: #0f0f0f;
  color: #fff;
  transition: all 0.3s linear;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30px;
  margin-right: 15px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;
