import { useContext } from 'react';
import { Context } from 'Functions';
import { Layout, ListItem, Offer } from 'components';
import { MenuWrap, Title, Section } from './Menu.style';

const Menu = () => {
  const { dbMenu, setOpenItem } = useContext(Context);

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
