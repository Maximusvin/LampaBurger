import CloseIcon from '@material-ui/icons/Close';
import CountItem from './CountItem/CountItem';
import { ColorStyle } from 'components';
import { useCount } from 'hooks';
import { totalPriceItem, formatCurrency } from 'Functions';
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
  ButtonClose,
} from './CardProduct.style';

const CardProduct = ({ openItem, setOpenItem, orders, setOrders }) => {
  const { name, url, weight, description } = openItem;
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
      <ButtonClose onClick={() => setOpenItem(null)}>
        <CloseIcon style={{ color: '#f7cc10' }} />
      </ButtonClose>
      <DescrProduct>
        <div>
          <Title>{name}</Title>
          <Description>
            {description} <ColorStyle color={yellow}>{weight}</ColorStyle>
          </Description>
        </div>

        <Control>
          <Button type="button">
            <FinalCost>{formatCurrency(totalPriceItem(order))}</FinalCost>
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
