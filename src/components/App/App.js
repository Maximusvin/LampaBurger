import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { fetchMenuData } from 'redux/menuDB/menuDBActions';
import { NavBar } from 'components';
import { Home, Cart, Modals } from 'views';
import { Context } from 'Functions';
import { authBase } from 'services/firebase';
import { useAuth, useTitle } from 'hooks';
import { clearOrdersList } from 'redux/orders/ordersActions';
import { getTotalCount } from 'redux/orders/ordersSelector';

function App() {
  const dispatch = useDispatch();
  const openItem = useSelector(state => state.openItemMenu);
  useTitle(openItem);
  const auth = useAuth(authBase);
  const totalCountInCart = useSelector(state => getTotalCount(state));

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Minus' && totalCountInCart === 1) {
        dispatch(clearOrdersList());
      }
    },
    [dispatch, totalCountInCart],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  return (
    <Context.Provider value={{ auth }}>
      <NavBar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>

      <Modals />
    </Context.Provider>
  );
}

export default App;
