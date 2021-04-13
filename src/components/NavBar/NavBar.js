import { ColorStyle } from 'components';
import { ShoppingBasket, AccountCircle } from '@material-ui/icons';
import {
  Header,
  Logo,
  ImgLogo,
  Title,
  ControlsWrap,
  ButtonAuth,
} from './NavBar.style';

import logo from '../../assets/images/burger.svg';
import { yellow } from '../../assets/colors';

const NavBar = () => {
  return (
    <Header>
      <Logo href="#">
        <ImgLogo src={logo} alt="Logo LampaBurger" />
        <Title>
          Lampa
          <ColorStyle color={yellow}>Burger</ColorStyle>
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
