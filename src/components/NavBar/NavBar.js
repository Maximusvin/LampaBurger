import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingBasket, AccountCircle, ExitToApp } from '@material-ui/icons';
import { ColorStyle } from 'components';
import { Context, formatCurrency } from 'Functions';

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
  Price,
  Count,
} from './NavBar.style';

import logo from '../../assets/images/burger.svg';
import { yellow } from '../../assets/colors';
import { getTotalCount, getTotalPrice } from 'redux/orders/ordersSelector';

const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);

  const totalCount = useSelector(getTotalCount);
  const totalPrice = useSelector(getTotalPrice);

  console.log(totalPrice);

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
          {totalPrice > 0 && <Price>{formatCurrency(totalPrice)}</Price>}
          <ShoppingBasket />
          {totalCount > 0 && <Count>{totalCount}</Count>}
        </ButtonCart>

        {authentication ? (
          <UserWrap>
            <UserName>{authentication.displayName}</UserName>
            <UserImg
              src={authentication.photoURL}
              alt={authentication.displayName}
            />
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
