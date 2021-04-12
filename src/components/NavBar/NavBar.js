import { ShoppingBasket, AccountCircle } from '@material-ui/icons';
import {
  Header,
  Logo,
  ImgLogo,
  Title,
  ControlsWrap,
  ButtonAuth,
  Color,
} from './NavBar.style';

import logo from '../../assets/images/burger.svg';

const NavBar = () => {
  return (
    <Header>
      <Logo href="#">
        <ImgLogo src={logo} alt="Logo LampaBurger" />
        <Title>
          Lampa
          <Color>Burger</Color>
        </Title>
      </Logo>
      <ControlsWrap>
        <ShoppingBasket />
        <ButtonAuth>
          <AccountCircle />
        </ButtonAuth>
      </ControlsWrap>
    </Header>
  );
};

export default NavBar;
