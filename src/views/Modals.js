import { useSelector, useDispatch } from 'react-redux';
import { CardProduct, OrderConfirm } from 'components';
import ModalItem from 'UI/ModalItem/';
import { addOpenItemMenu } from 'redux/modals/modalsActions';
import { showOrderConfirm } from 'redux/modals/modalsActions';

export const Modals = () => {
  const dispatch = useDispatch();
  const openItem = useSelector(state => state.modals.openItemMenu);
  const orderConfirm = useSelector(state => state.modals.isOpenOrderConfirm);

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
