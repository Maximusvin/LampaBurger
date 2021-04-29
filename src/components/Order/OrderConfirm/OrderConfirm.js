import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { totalPriceItem, formatCurrency, Context, projection } from 'Functions';
import { dataBase } from 'services/firebase';
import { ConfirmWrap, Title } from './OrderConfirm.style';
import { Total, Text, Button } from 'components/Order/Order.style';
import { clearOrdersList } from 'redux/orders/ordersActions';
import { showOrderConfirm } from 'redux/modals/modalsActions';
import { getOrders } from 'redux/orders/ordersSelector';

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

export const OrderConfirm = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);
  const formData = useSelector(state => state.form.userContacts.values);

  console.log(JSON.stringify(formData));

  const {
    auth: { authentication },
  } = useContext(Context);

  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData));

    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      address: formData.address,
      phone: formData.phone,
      order: newOrder,
    });

    dispatch(clearOrdersList());
    dispatch(showOrderConfirm(false));
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
