import { useSelector } from 'react-redux';
import { Menu } from 'components';

export const Home = () => {
  const dbMenu = useSelector(state => state.menuDB.menuData);

  return <Menu dbMenu={dbMenu} />;
};
