import { ColorStyle } from 'components';
import { ShoppingBasket, AccountCircle, ExitToApp } from '@material-ui/icons';

import {
  Header,
  Logo,
  ImgLogo,
  Title,
  ControlsWrap,
  ButtonAuth,
  UserWrap,
  UserName,
  ButtonCart,
} from './NavBar.style';

import logo from '../../assets/images/burger.svg';
import { yellow } from '../../assets/colors';

const NavBar = ({ authentication, logIn, logOut }) => {
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
        <ButtonCart>
          <ShoppingBasket />
        </ButtonCart>

        {authentication ? (
          <UserWrap>
            <UserName>{authentication.displayName}</UserName>
            <ButtonAuth onClick={logOut}>
              <ExitToApp />
            </ButtonAuth>
          </UserWrap>
        ) : (
          <ButtonAuth onClick={logIn}>
            <AccountCircle />
          </ButtonAuth>
        )}
      </ControlsWrap>
    </Header>
  );
};

export default NavBar;
