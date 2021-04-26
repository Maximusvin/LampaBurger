import { useSelector, useDispatch } from 'react-redux';
import { Layout, ListItem, Offer, MenuPopap } from 'components';
import { MenuWrap, Title, Section, TitleWrap } from './Menu.style';
import ListItemSkeleton from './ListItemSceleton/ListItemSkeleton';
import { setSortByBurger, setSortByOther } from 'redux/sort/sortActions';

const Menu = () => {
  const dbMenu = useSelector(state => state.menuDB.menuData);
  const localMenuDb = { ...dbMenu };
  const isLoaded = useSelector(state => state.menuDB.isLoaded);
  const activeItemBurger = useSelector(state => state.sort.sortBurger);
  const activeItemOther = useSelector(state => state.sort.sortOther);
  const dispatch = useDispatch();

  const getActiveTypeBurger = type => {
    dispatch(setSortByBurger(type));
  };

  const getActiveTypeOther = type => {
    dispatch(setSortByOther(type));
  };

  return (
    <MenuWrap id="menuWrap">
      <Offer />
      <Layout>
        <Section id="burgers">
          <TitleWrap>
            <Title>Бургеры</Title>
            <MenuPopap
              activeItem={activeItemBurger}
              getActiveType={getActiveTypeBurger}
            />
          </TitleWrap>

          {isLoaded ? (
            <ListItem
              itemList={localMenuDb.burger}
              activeItem={activeItemBurger}
            />
          ) : (
            <ListItemSkeleton />
          )}
        </Section>
        <Section id="sets">
          <TitleWrap>
            <Title>Напитки / Сетты</Title>
            <MenuPopap
              activeItem={activeItemOther}
              getActiveType={getActiveTypeOther}
            />
          </TitleWrap>
          {isLoaded ? (
            <ListItem
              itemList={localMenuDb.other}
              activeItem={activeItemOther}
            />
          ) : (
            <ListItemSkeleton />
          )}
        </Section>
      </Layout>
    </MenuWrap>
  );
};

export default Menu;
