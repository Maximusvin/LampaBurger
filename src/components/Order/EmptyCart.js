import {
  EmptyList,
  ImgInEmptyCart,
  TextInEmptyCart,
  LinkToHome,
} from './Order.style';
import emptyCart from 'assets/images/icons/empty-cart.svg';

const EmptyCart = () => (
  <EmptyList>
    <ImgInEmptyCart src={emptyCart} alt="Пустая корзина" />
    <LinkToHome to="/">
      <TextInEmptyCart>Добавь сюда всё, что захочешь</TextInEmptyCart>
    </LinkToHome>
  </EmptyList>
);

export default EmptyCart;
