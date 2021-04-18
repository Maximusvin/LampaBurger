import { Layout, ListItem, Offer } from 'components';

import { MenuWrap, Title, Section } from './Menu.style';
import { useFetch } from 'hooks';

const Menu = ({ setOpenItem }) => {
  const res = useFetch();
  const dbMenu = res.response;

  return (
    <MenuWrap>
      <Offer />
      <Layout>
        {res.response ? (
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
        ) : res.error ? (
          <div>Error</div>
        ) : (
          <div>Loading...</div>
        )}
      </Layout>
    </MenuWrap>
  );
};

export default Menu;
