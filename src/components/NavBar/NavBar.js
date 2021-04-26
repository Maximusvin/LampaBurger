import { useContext } from 'react';
import { ShoppingBasket, AccountCircle, ExitToApp } from '@material-ui/icons';
import { ColorStyle } from 'components';
import { Context } from 'Functions';

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
  UserImg,
} from './NavBar.style';

import logo from '../../assets/images/burger.svg';
import { yellow } from '../../assets/colors';

const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);

  return (
    <Header>
      <Logo to="/">
        <ImgLogo src={logo} alt="Logo LampaBurger" />
        <Title>
          Lampa
          <ColorStyle color={yellow}>Burger</ColorStyle>
        </Title>
      </Logo>
      <ControlsWrap>
        <ButtonCart to="/cart">
          <ShoppingBasket />
        </ButtonCart>

        {authentication ? (
          <UserWrap>
            <UserName>{authentication.displayName}</UserName>
            <UserImg src={authentication.photoURL} alt="" />
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
