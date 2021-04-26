import { NavWrap, NavList, NavItem, Link, Img } from './NavigationMenu.style';
import burgers from 'assets/images/icons/burgers.svg';
import sets from 'assets/images/icons/sets.svg';

const NavigationMenu = () => (
  <NavWrap>
    <NavList>
      <NavItem>
        <Link href="#burgers">
          <Img src={burgers} alt="Бургеры" />
          <span>Бургеры</span>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#sets">
          <Img src={sets} alt="Сеты" />
          <span>Сеты</span>
        </Link>
      </NavItem>
    </NavList>
  </NavWrap>
);

export default NavigationMenu;
