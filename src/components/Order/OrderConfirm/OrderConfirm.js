import { totalPriceItem, formatCurrency, projection } from 'Functions';
import { Overlay } from 'UI/ModalItem/ModalItem.style';
import { ConfirmWrap, Title } from './OrderConfirm.style';
import { Total, Text, Button } from 'components/Order/Order.style';

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: [
    'topping',
    arr => arr.filter(obj => obj.checked).map(obj => obj.name),
    arr => (arr.length ? arr : 'no topping'),
  ],
  choice: ['choice', item => (item ? item : 'No choices')],
};

const OrderConfirm = ({
  orders,
  setOrders,
  authentication,
  setOpenOrderConfirm,
  dataBase,
}) => {
  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder,
    });
    setOrders([]);
    setOpenOrderConfirm(false);
  };

  const total = orders.reduce((total, item) => totalPriceItem(item) + total, 0);

  return (
    <ConfirmWrap>
      <Title>{authentication.displayName}</Title>
      <Text>Осталось только подтвердить ваш заказ</Text>
      <Total>Итого: {formatCurrency(total)}</Total>

      <Button
        onClick={() => {
          sendOrder();
        }}
      >
        Подтвердить заказ
      </Button>
    </ConfirmWrap>
  );
};

export default OrderConfirm;
