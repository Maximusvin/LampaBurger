import { ColorStyle } from 'components';
import CountItem from './CountItem/CountItem';
import { useCount } from 'hooks';
import { totalPriceItem } from '../../Functions/totalPriceItem';
import { yellow } from '../../assets/colors/index';

import {
  ProductCard,
  DescrProduct,
  Title,
  Description,
  Image,
  Control,
  Button,
  FinalCost,
  Add,
  ImageWrap,
} from './CardProduct.style';

const CardProduct = ({ openItem, setOpenItem, orders, setOrders }) => {
  const { id, name, url, weight, price, shortcode, description } = openItem;
  const counter = useCount();

  const order = {
    ...openItem,
    count: counter.count,
  };

  const onAddToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <ProductCard>
      <DescrProduct>
        <div>
          <Title>{name}</Title>
          <Description>
            {description} <ColorStyle color={yellow}>{weight}</ColorStyle>
          </Description>
        </div>

        <Control>
          <Button type="button">
            <FinalCost>{totalPriceItem(order)} грн.</FinalCost>
            <Add onClick={onAddToOrder}>Добавить к заказу</Add>
          </Button>
        </Control>
      </DescrProduct>

      <ImageWrap>
        <Image src={url} alt={name} />
        <CountItem {...counter} />
      </ImageWrap>
    </ProductCard>
  );
};

export default CardProduct;
