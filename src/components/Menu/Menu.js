import { Layout, ListItem } from 'components';

import { MenuWrap, Title, Section } from './Menu.style';
import dbMenu from './db-menu';

const Menu = () => {
  return (
    <MenuWrap>
      <Layout>
        <Section>
          <Title>Бургеры</Title>
          <ListItem itemList={dbMenu.burger} />
        </Section>
        <Section>
          <Title>Напитки / Сетты</Title>
          <ListItem itemList={dbMenu.other} />
        </Section>
      </Layout>
    </MenuWrap>
  );
};

export default Menu;
