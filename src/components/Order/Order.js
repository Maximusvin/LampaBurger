import { useContext } from 'react';
import { Context } from 'Functions';
import { Layout } from 'components';
import { totalPriceItem, formatCurrency } from 'Functions';
import OrderListItem from 'components/Order/OrderListItem/OrderListItem';

import { useForm } from 'hooks';

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

  const newOrders = [...orders];

  const total = newOrders.reduce(
    (total, item) => totalPriceItem(item) + total,
    0,
  );
  const totalCounter = newOrders.reduce((total, item) => total + item.count, 0);

  const deleteItem = idx =>
    setOrders(newOrders.filter((_, index) => index !== idx));

  const { name, surname, address, phone, handleInputChange } = useForm();

  const formData = { name, surname, address, phone };

  const onSubmit = e => {
    e.preventDefault();

    if (authentication) {
      setOpenOrderConfirm(true);
      console.log(formData);
    } else {
      logIn();
    }
  };

  return (
    <Layout>
      <OrderWrap>
        <Title>Ваш заказ</Title>

        {newOrders.length > 0 ? (
          <OrderContent>
            <OrderListWrap>
              <OrderList>
                {newOrders.map((order, index) => (
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

            <Form onSubmit={onSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="surname"
                placeholder="Surname"
                value={surname}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                onChange={handleInputChange}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={handleInputChange}
              />
              <button type="submit">Click submit</button>
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
