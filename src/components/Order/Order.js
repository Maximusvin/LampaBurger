import { Layout } from 'components';
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

const Order = ({ orders }) => {
  const totalPriceItem = order => (order.price * order.count).toFixed(2);
  const total = orders.reduce((total, item) => totalPriceItem(item) + total, 0);

  return (
    <Layout>
      <OrderWrap>
        <Title>Ваш заказ</Title>
        <OrderContent>
          {orders.length > 0 ? (
            <OrderList>
              {orders.map(order => (
                <OrderListItem key={order.id} order={order} />
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
        <Total>Total: {total} UAH</Total>
        <Button>Button</Button>
      </OrderWrap>
    </Layout>
  );
};

export default Order;
