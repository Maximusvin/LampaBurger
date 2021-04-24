import { NavWrap, NavList, NavItem, Link } from './NavigationMenu.style';

const Nav = () => (
  <NavWrap>
    <NavList>
      <NavItem>
        <Link href="#burgers">Бургеры</Link>
      </NavItem>
      <NavItem>
        <Link href="#sets">Сеты</Link>
      </NavItem>
    </NavList>
  </NavWrap>
);

export default Nav;
