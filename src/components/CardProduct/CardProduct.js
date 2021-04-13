import { ColorStyle } from 'components';
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
} from './CardProduct.style';

const CardProduct = ({ openItem, setOpenItem, orders, setOrders }) => {
  const { id, name, url, weight, price, shortcode, description } = openItem;

  const order = {
    id,
    name,
    url,
    weight,
    price,
    shortcode,
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
          <div>
            <button
              type="buttton"
              // disabled={counter.count <= 1}
              // onClick={() => counter.setCount(counter.count - 1)}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="100"
              // value={counter.count < 1 ? 1 : counter.count}
              // onChange={counter.onChange}
            />
            <button
              type="buttton"
              // onClick={() => counter.setCount(counter.count + 1)}
            >
              +
            </button>
          </div>
        </div>

        <Control>
          <Button type="button">
            <FinalCost>{price} грн.</FinalCost>
            <Add onClick={onAddToOrder}>Добавить к заказу</Add>
          </Button>
        </Control>
      </DescrProduct>

      <Image src={url} alt={name} />
    </ProductCard>
  );
};

export default CardProduct;
