// import { Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar, Menu, CardProduct, Order } from 'components';
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
// import { AuthPage, ContactsPage, UseFulPage } from 'views';

const firebaseConfig = {
  apiKey: 'AIzaSyAqe_cY_1FKYax-5rTXC1leYLzR8m2OqWE',
  authDomain: 'lampaburger.firebaseapp.com',
  databaseURL: 'https://lampaburger-default-rtdb.firebaseio.com',
  projectId: 'lampaburger',
  storageBucket: 'lampaburger.appspot.com',
  messagingSenderId: '375009946141',
  appId: '1:375009946141:web:bbf2ad5cc2b39e201134f4',
};

firebase.initializeApp(firebaseConfig);

function App() {
  const { openItem, setOpenItem } = useOpenItem();
  const orders = useOrders();
  const auth = useAuth(firebase.auth);
  const dataBase = firebase.database();
  const dbMenu = useDatabase(dataBase);
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
      <Order />
      <Menu />

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
