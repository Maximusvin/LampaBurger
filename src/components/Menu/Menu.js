import { Layout, ListItem, Offer, MenuPopap } from 'components';
import { MenuWrap, Title, Section, TitleWrap } from './Menu.style';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Menu = ({ dbMenu }) => {
  return (
    <MenuWrap id="menuWrap">
      <Offer />
      <Layout>
        <Section id="burgers">
          <TitleWrap>
            <Title>Бургеры</Title>
            <MenuPopap />
          </TitleWrap>
          {dbMenu ? (
            <ListItem itemList={dbMenu.burger} />
          ) : (
            <Loader type="ThreeDots" color="#ffd900" height={100} width={100} />
          )}
        </Section>
        <Section id="sets">
          <TitleWrap>
            <Title>Напитки / Сетты</Title>
            <MenuPopap />
          </TitleWrap>
          {dbMenu ? (
            <ListItem itemList={dbMenu.other} />
          ) : (
            <Loader type="ThreeDots" color="#ffd900" height={100} width={100} />
          )}
        </Section>
      </Layout>
    </MenuWrap>
  );
};

export default Menu;
