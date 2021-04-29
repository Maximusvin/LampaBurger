import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'components';
import OrderForm from './OrderForm/OrderForm';
import { formatCurrency } from 'Functions';
import OrderListItem from 'components/Order/OrderListItem/OrderListItem';
import EmptyCart from './EmptyCart';
import DeleteIcon from '@material-ui/icons/Delete';
import { clearOrdersList } from 'redux/orders/ordersActions';
import {
  getTotalCount,
  getTotalPrice,
  getOrders,
} from 'redux/orders/ordersSelector';

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
  const orders = useSelector(getOrders);
  const totalCount = useSelector(getTotalCount);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <Layout>
      <OrderWrap>
        <HeaderWrap>
          <Title>Ваш заказ</Title>
          {orders.length > 0 && (
            <ClearOrderWrap onClick={() => dispatch(clearOrdersList())}>
              <DeleteIcon style={{ marginRight: 10 }} />
              <p>Очистить корзину</p>
            </ClearOrderWrap>
          )}
        </HeaderWrap>
        {orders.length > 0 ? (
          <OrderContent>
            <OrderListWrap>
              <OrderList>
                {orders.map((order, index) => (
                  <OrderListItem key={order.id} order={order} index={index} />
                ))}
              </OrderList>
              <div>
                <Total>Всего товаров в корзине: {totalCount}</Total>
                <Total>Сумма заказа: {formatCurrency(totalPrice)}</Total>
              </div>
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
