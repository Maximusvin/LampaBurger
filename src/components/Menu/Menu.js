import { Layout, ListItem, Offer, MenuPopap } from 'components';
import { useSelector } from 'react-redux';

import { MenuWrap, Title, Section, TitleWrap } from './Menu.style';

const Menu = () => {
  const dbMenu = useSelector(state => state.menuDB.menuData);

  return (
    <MenuWrap id="menuWrap">
      <Offer />
      <Layout>
        {dbMenu ? (
          <>
            <Section id="burgers">
              <TitleWrap>
                <Title>Бургеры</Title>
                <MenuPopap />
              </TitleWrap>
              <ListItem itemList={dbMenu.burger} />
            </Section>
            <Section id="sets">
              <TitleWrap>
                <Title>Напитки / Сетты</Title>
                <MenuPopap />
              </TitleWrap>
              <ListItem itemList={dbMenu.other} />
            </Section>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Layout>
    </MenuWrap>
  );
};

export default Menu;
