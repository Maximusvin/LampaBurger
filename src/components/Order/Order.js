import { Layout } from 'components';
import { totalPriceItem, formatCurrency, projection } from 'Functions';
import OrderListItem from 'components/Order/OrderListItem/OrderListItem';

import {
  OrderWrap,
  Title,
  OrderContent,
  OrderList,
  Form,
  Input,
  Total,
  Button,
  EmptyList,
} from './Order.style';

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

const Order = ({
  orders,
  setOrders,
  setOpenItem,
  authentication,
  logIn,
  firebaseDatabase,
}) => {
  const total = orders.reduce((total, item) => totalPriceItem(item) + total, 0);
  const totalCounter = orders.reduce((total, item) => total + item.count, 0);

  const dataBase = firebaseDatabase();

  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder,
    });
  };

  const deleteItem = idx =>
    setOrders(orders.filter((item, index) => index !== idx));

  return (
    <Layout>
      <OrderWrap>
        <Title>Ваш заказ</Title>
        <OrderContent>
          {orders.length > 0 ? (
            <OrderList>
              {orders.map((order, index) => (
                <OrderListItem
                  key={order.id + order.name}
                  order={order}
                  onDelete={deleteItem}
                  setOpenItem={setOpenItem}
                  index={index}
                />
              ))}
            </OrderList>
          ) : (
            <EmptyList>Список заказов пуст</EmptyList>
          )}

          <Form>
            <Input type="text" name="" />
            <Input type="text" name="" />
            <Input type="text" name="" />
          </Form>
        </OrderContent>
        <Total>Всего товаров в корзине: {totalCounter}</Total>
        <Total>Сумма заказа: {formatCurrency(total)}</Total>
        <Button
          onClick={() => {
            if (authentication) {
              sendOrder();
            } else {
              logIn();
            }
          }}
        >
          Оформить заказ
        </Button>
      </OrderWrap>
    </Layout>
  );
};

export default Order;
