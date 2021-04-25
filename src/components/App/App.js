import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMenuData } from 'redux/menuDB/menuDBActions';
import { Switch, Route } from 'react-router';
import { NavBar, CardProduct } from 'components';
import { Home, Cart } from 'views';
import ModalItem from 'UI/ModalItem/';
import { Context } from 'Functions';

import OrderConfirm from 'components/Order/OrderConfirm/OrderConfirm';
import { authBase } from 'services/firebase';

import {
  useOpenItem,
  useOrders,
  useAuth,
  useTitle,
  useOrderConfirm,
} from 'hooks';

function App() {
  const auth = useAuth(authBase);
  const { openItem, setOpenItem } = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  return (
    <Context.Provider
      value={{
        auth,
        openItem,
        setOpenItem,
        orders,
        orderConfirm,
      }}
    >
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>

      {openItem && (
        <ModalItem onCloseModal={setOpenItem}>
          <CardProduct />
        </ModalItem>
      )}

      {orderConfirm.openOrderConfirm && (
        <ModalItem onCloseModal={orderConfirm.setOpenOrderConfirm}>
          <OrderConfirm />
        </ModalItem>
      )}
    </Context.Provider>
  );
}

export default App;
