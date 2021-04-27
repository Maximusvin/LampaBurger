import { useSelector, useDispatch } from 'react-redux';
import { CardProduct, OrderConfirm } from 'components';
import ModalItem from 'UI/ModalItem/';
import { addOpenItemMenu } from 'redux/openItemMenu/openItemMenuActions';
import { showOrderConfirm } from 'redux/orders/ordersActions';

export const Modals = () => {
  const dispatch = useDispatch();
  const openItem = useSelector(state => state.openItemMenu);
  const orderConfirm = useSelector(state => state.orders.isOpenOrderConfirm);

  return (
    <>
      {openItem && (
        <ModalItem onCloseModal={val => dispatch(addOpenItemMenu(val))}>
          <CardProduct />
        </ModalItem>
      )}
      {orderConfirm && (
        <ModalItem onCloseModal={val => dispatch(showOrderConfirm(val))}>
          <OrderConfirm />
        </ModalItem>
      )}
      ;
    </>
  );
};
