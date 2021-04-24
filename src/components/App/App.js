import { Switch, Route } from 'react-router';
import { NavBar, CardProduct } from 'components';
import { Home, Cart } from 'views';
import ModalItem from '../../UI/ModalItem/';
import { Context } from 'Functions';
import {
  useOpenItem,
  useOrders,
  useAuth,
  useTitle,
  useDatabase,
  useOrderConfirm,
} from 'hooks';
import OrderConfirm from 'components/Order/OrderConfirm/OrderConfirm';

import { authBase, dataBase } from 'services/firebase';

function App() {
  const auth = useAuth(authBase);
  const dbMenu = useDatabase(dataBase);
  const { openItem, setOpenItem } = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem);

  return (
    <Context.Provider
      value={{
        auth,
        dbMenu,
        openItem,
        setOpenItem,
        orders,
        orderConfirm,
        dataBase,
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
