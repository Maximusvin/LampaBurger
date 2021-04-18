// import { Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar, Menu, CardProduct, Order } from 'components';
import ModalItem from '../../UI/ModalItem/';
import { useOpenItem, useOrders, useAuth } from 'hooks';
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

  return (
    <>
      <NavBar {...auth} />
      <Order
        {...orders}
        {...auth}
        firebaseDatabase={firebase.database}
        openItem={openItem}
        setOpenItem={setOpenItem}
      />
      <Menu setOpenItem={setOpenItem} />

      {openItem && (
        <ModalItem openItem={openItem} onCloseModal={setOpenItem}>
          <CardProduct
            openItem={openItem}
            setOpenItem={setOpenItem}
            {...orders}
          />
        </ModalItem>
      )}
    </>
  );
}

export default App;
