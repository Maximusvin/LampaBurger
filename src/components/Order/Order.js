import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'components';
import OrderForm from './OrderForm/OrderForm';
import { totalPriceItem, formatCurrency } from 'Functions';
import OrderListItem from 'components/Order/OrderListItem/OrderListItem';
import EmptyCart from './EmptyCart';
import DeleteIcon from '@material-ui/icons/Delete';
import { clearOrdersList } from 'redux/orders/ordersActions';

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
  const dispatch = useDispatch();
  const orders = useSelector(store => store.orders.orders);

  const total = orders.reduce((total, item) => totalPriceItem(item) + total, 0);
  const totalCounter = orders.reduce((total, item) => total + item.count, 0);

  return (
    <Layout>
      <OrderWrap>
        <HeaderWrap>
          <Title>Ваш заказ</Title>
          <ClearOrderWrap onClick={() => dispatch(clearOrdersList())}>
            <DeleteIcon style={{ marginRight: 10 }} />
            <p>Очистить корзину</p>
          </ClearOrderWrap>
        </HeaderWrap>
        {orders.length > 0 ? (
          <OrderContent>
            <OrderListWrap>
              <OrderList>
                {orders.map((order, index) => (
                  <OrderListItem key={order.id} order={order} index={index} />
                ))}
              </OrderList>
              <Total>Всего товаров в корзине: {totalCounter}</Total>
              <Total>Сумма заказа: {formatCurrency(total)}</Total>
            </OrderListWrap>
            <OrderForm />
          </OrderContent>
        ) : (
          <EmptyCart />
        )}
      </OrderWrap>
    </Layout>
  );
};

export default Order;
