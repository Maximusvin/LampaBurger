import { Layout, ListItem, Offer } from 'components';

import { MenuWrap, Title, Section } from './Menu.style';
import dbMenu from './db-menu';

const Menu = ({ setOpenItem }) => {
  return (
    <MenuWrap>
      <Offer />
      <Layout>
        <Section id="menu">
          <Title>Бургеры</Title>
          <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
        </Section>
        <Section>
          <Title>Напитки / Сетты</Title>
          <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
        </Section>
      </Layout>
    </MenuWrap>
  );
};

export default Menu;
