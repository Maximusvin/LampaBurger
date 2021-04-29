import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import CountItem from './CountItem/CountItem';
import Toppings from './Toppings/Toppings';
import Choices from './Choices/Choices';
import { addToOrder } from 'redux/orders/ordersActions';
import { addOpenItemMenu } from 'redux/modals/modalsActions';
import { ColorStyle } from 'components';
import { totalPriceItem, formatCurrency } from 'Functions';
import { yellow } from 'assets/colors/index';
import { useCount, useToppings, useChoices } from 'hooks';
import { getOrders } from 'redux/orders/ordersSelector';

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
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);

  const openItem = useSelector(store => store.modals.openItemMenu);
  const { name, url, weight, description } = openItem;
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const totalPrice = totalPriceItem(order);

  const closeModal = () => {
    dispatch(addOpenItemMenu(null));
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    dispatch(addToOrder(newOrders));
    closeModal();
  };

  const onAddToOrder = () => {
    dispatch(addToOrder([...orders, order]));
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
          {openItem.choices && <Choices openItem={openItem} {...choices} />}
        </div>

        <Control>
          <Button
            type="button"
            onClick={isEdit ? editOrder : onAddToOrder}
            disabled={openItem.choices && !order.choice}
          >
            <FinalCost>{formatCurrency(totalPrice)}</FinalCost>
            <Add disabled={openItem.choices && !order.choice}>
              {isEdit ? 'Редактировать заказ' : 'Добавить к заказу'}
            </Add>
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
