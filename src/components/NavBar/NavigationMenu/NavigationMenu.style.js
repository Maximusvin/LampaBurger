import styled from 'styled-components';

export const NavWrap = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const NavItem = styled.li`
  margin-right: 25px;
`;

export const Link = styled.a`
  color: #fff;
  font-weight: 700;
  transition: color 0.2s linear;

  :hover {
    color: #f1ce03;
  }
`;
