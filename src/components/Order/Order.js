import { useContext } from 'react';
import { Context } from 'Functions';
import { Layout } from 'components';
import OrderForm from './OrderForm/OrderForm';
import { totalPriceItem, formatCurrency } from 'Functions';
import OrderListItem from 'components/Order/OrderListItem/OrderListItem';
import EmptyCart from './EmptyCart';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  OrderWrap,
  Title,
  OrderContent,
  OrderList,
  Total,
  OrderListWrap,
  HeaderWrap,
  ClearOrderWrap,
} from './Order.style';

const Order = () => {
  const {
    auth,
    orders: { orders, setOrders },
    // orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const newOrders = [...orders];

  const total = newOrders.reduce(
    (total, item) => totalPriceItem(item) + total,
    0,
  );
  const totalCounter = newOrders.reduce((total, item) => total + item.count, 0);

  const deleteItem = idx =>
    setOrders(newOrders.filter((_, index) => index !== idx));

  return (
    <Layout>
      <OrderWrap>
        <HeaderWrap>
          <Title>Ваш заказ</Title>
          <ClearOrderWrap>
            <DeleteIcon style={{ marginRight: 10 }} />
            <p>Очистить корзину</p>
          </ClearOrderWrap>
        </HeaderWrap>
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
            <OrderForm {...auth} />
          </OrderContent>
        ) : (
          <EmptyCart />
        )}
      </OrderWrap>
    </Layout>
  );
};

export default Order;
