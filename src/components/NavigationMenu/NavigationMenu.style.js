import styled from 'styled-components';

export const NavWrap = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const NavItem = styled.li`
  margin-right: 25px;

  @media (max-width: 576px) {
    margin-right: 15px;
  }
`;

export const Img = styled.img`
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Link = styled.a`
  display: block;
  color: #fff;
  transition: color 0.2s linear;
  text-align: center;
  background: #0f0f0f;
  padding: 20px 30px;
  border-radius: 10px;
  width: 135px;
  transition: all 0.2s linear;
  text-transform: uppercase;

  @media (max-width: 576px) {
    padding: 10px 20px;
    width: 112px;
  }

  :hover {
    color: #f1ce03;
    background: #373737;
  }
`;
