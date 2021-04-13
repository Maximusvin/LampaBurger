// import { Route } from 'react-router-dom';
import { NavBar, Menu, CardProduct, Order } from 'components';
import ModalItem from '../../UI/ModalItem/';
import { useOpenItem, useOrders } from 'hooks';
// import { AuthPage, ContactsPage, UseFulPage } from 'views';

function App() {
  const { openItem, setOpenItem } = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <NavBar />
      <Order {...orders} />
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
