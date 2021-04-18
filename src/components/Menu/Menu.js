import { Layout, ListItem, Offer } from 'components';
import { MenuWrap, Title, Section } from './Menu.style';

const Menu = ({ setOpenItem, dbMenu }) => {
  return (
    <MenuWrap>
      <Offer />
      <Layout>
        {dbMenu ? (
          <>
            <Section id="menu">
              <Title>Бургеры</Title>
              <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
            </Section>
            <Section>
              <Title>Напитки / Сетты</Title>
              <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
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
