import { Layout } from 'components';
import { OfferWrap, Description, Title } from './Offer.style';

const Offer = () => (
  <OfferWrap>
    <Layout>
      <Description>
        <Title>
          Lampa <span>Бургер</span> - твой яркий вкус!
        </Title>
        <p>
          У каждого есть идеальная пара. Иногда приходится путешествовать по
          миру в её поисках. И где бы ни был ваш идеальный бургер, он всегда
          будет рядом вместе с VinBurger.
        </p>
        <a href="#menu">Меню</a>
      </Description>
    </Layout>
  </OfferWrap>
);

export default Offer;
