import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import { fetchMenuData } from 'redux/menuDB/menuDBActions';
import { NavBar } from 'components';
import { Home, Cart, Modals } from 'views';
import { Context } from 'Functions';
import { authBase } from 'services/firebase';

import { useAuth, useTitle } from 'hooks';

function App() {
  const dispatch = useDispatch();
  const auth = useAuth(authBase);
  const openItem = useSelector(state => state.openItemMenu);
  useTitle(openItem);

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
