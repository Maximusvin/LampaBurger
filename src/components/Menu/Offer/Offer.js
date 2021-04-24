import { Layout, ColorStyle } from 'components';
import { OfferWrap, Description, Title, SubTitle, Button } from './Offer.style';
import { yellow } from '../../../assets/colors/index';

const Offer = () => (
  <OfferWrap>
    <Layout>
      <Description>
        <Title>
          <ColorStyle color={yellow}>Lampa</ColorStyle>
          Бургер - твой яркий вкус!
        </Title>
        <SubTitle>
          Доставка <ColorStyle color={yellow}>БУРГЕРОВ</ColorStyle> в Виннице до
          29 минут или самый яркий{' '}
          <ColorStyle color={yellow}>БУРГЕР</ColorStyle> в подарок!
        </SubTitle>
        <Button href="#burgers">Меню</Button>
      </Description>
    </Layout>
  </OfferWrap>
);

export default Offer;
