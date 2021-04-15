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

const Order = ({ orders }) => {
  const total = orders.reduce((total, item) => totalPriceItem(item) + total, 0);

  const totalCounter = orders.reduce((total, item) => total + item.count, 0);

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
        <Total>Всего товаров в корзине: {totalCounter}</Total>
        <Total>Сумма заказа: {formatCurrency(total)}</Total>
        <Button>Button</Button>
      </OrderWrap>
    </Layout>
  );
};

export default Order;