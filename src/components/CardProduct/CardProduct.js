import CloseIcon from '@material-ui/icons/Close';
import CountItem from './CountItem/CountItem';
import Toppings from './Toppings/Toppings';
import Choices from './Choices/Choices';
// ==================
import { useSelector, useDispatch } from 'react-redux';
import { addToOrder, checkChoices } from 'redux/orders/ordersActions';
import { addOpenItemMenu } from 'redux/openItemMenu/openItemMenuActions';
// ==================
import { ColorStyle } from 'components';
import { totalPriceItem, formatCurrency } from 'Functions';
import { yellow } from 'assets/colors/index';
import { useCount, useToppings } from 'hooks';

import {
  ProductCard,
  DescrProduct,
  Title,
  Description,
  Image,
  Control,
  Button,
  FinalCost,
  Add,
  ImageWrap,
  ButtonClose,
} from './CardProduct.style';

const CardProduct = () => {
  const orders = useSelector(store => store.orders);
  const choice = useSelector(store => store.orders.choice);
  const openItem = useSelector(store => store.openItemMenu);
  const dispatch = useDispatch();
  // const topping = useSelector(store => store.orders.topping);

  const { name, url, weight, description } = openItem;
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const isEdit = openItem.index > -1;

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice,
  };

  const closeModal = () => {
    dispatch(addOpenItemMenu(null));
  };

  const editOrder = () => {
    const newOrders = [...orders.orders];
    newOrders[openItem.index] = order;
    dispatch(addToOrder(newOrders));
    closeModal();
  };

  const onAddToOrder = () => {
    // dispatch(addToOrder(order));
    dispatch(addToOrder([...orders.orders, order]));
    dispatch(checkChoices(''));
    closeModal();
  };

  return (
    <ProductCard>
      <ButtonClose onClick={closeModal}>
        <CloseIcon style={{ color: '#f7cc10' }} />
      </ButtonClose>
      <DescrProduct>
        <div>
          <Title>{name}</Title>
          <Description>
            {description} <ColorStyle color={yellow}>{weight}</ColorStyle>
          </Description>
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices openItem={openItem} />}
        </div>

        <Control>
          <Button
            type="button"
            onClick={isEdit ? editOrder : onAddToOrder}
            disabled={openItem.choices && !order.choice}
          >
            <FinalCost>{formatCurrency(totalPriceItem(order))}</FinalCost>
            <Add>{isEdit ? 'Редактировать заказ' : 'Добавить к заказу'}</Add>
          </Button>
        </Control>
      </DescrProduct>

      <ImageWrap>
        <Image src={url} alt={name} />
        <CountItem {...counter} />
      </ImageWrap>
    </ProductCard>
  );
};

export default CardProduct;
