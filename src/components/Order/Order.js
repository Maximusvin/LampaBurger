import { Layout } from 'components';
import { totalPriceItem, formatCurrency } from 'Functions';
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

const Order = ({ orders, setOrders }) => {
  const total = orders.reduce((total, item) => totalPriceItem(item) + total, 0);
  const totalCounter = orders.reduce((total, item) => total + item.count, 0);

  const deleteItem = idx =>
    setOrders([...orders].filter(item => item.id !== idx));

  return (
    <Layout>
      <OrderWrap>
        <Title>Ваш заказ</Title>
        <OrderContent>
          {orders.length > 0 ? (
            <OrderList>
              {orders.map(order => (
                <OrderListItem
                  key={order.id + order.name}
                  order={order}
                  onDelete={deleteItem}
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
        <Button>Оформить заказ</Button>
      </OrderWrap>
    </Layout>
  );
};

export default Order;
