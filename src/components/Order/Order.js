import { useContext } from 'react';
import { Context } from 'Functions';
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
  OrderListWrap,
} from './Order.style';

const Order = () => {
  const {
    auth: { authentication, logIn },
    orders: { orders, setOrders },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const total = orders.reduce((total, item) => totalPriceItem(item) + total, 0);
  const totalCounter = orders.reduce((total, item) => total + item.count, 0);

  const deleteItem = idx =>
    setOrders(orders.filter((item, index) => index !== idx));

  return (
    <Layout>
      <OrderWrap>
        <Title>Ваш заказ</Title>

        {orders.length > 0 ? (
          <OrderContent>
            <OrderListWrap>
              <OrderList>
                {orders.map((order, index) => (
                  <OrderListItem
                    key={order.id + order.name}
                    order={order}
                    onDelete={deleteItem}
                    index={index}
                  />
                ))}
              </OrderList>
              <Total>Всего товаров в корзине: {totalCounter}</Total>
              <Total>Сумма заказа: {formatCurrency(total)}</Total>
            </OrderListWrap>
            <Form>
              <Input type="text" name="" />
              <Input type="text" name="" />
              <Input type="text" name="" />
            </Form>
            <Button
              onClick={() => {
                if (authentication) {
                  setOpenOrderConfirm(true);
                } else {
                  logIn();
                }
              }}
            >
              Оформить заказ
            </Button>
          </OrderContent>
        ) : (
          <EmptyList>Список заказов пуст</EmptyList>
        )}
      </OrderWrap>
    </Layout>
  );
};

export default Order;
