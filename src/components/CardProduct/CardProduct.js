import CloseIcon from '@material-ui/icons/Close';
import CountItem from './CountItem/CountItem';
import Toppings from './Toppings/Toppings';
import Choices from './Choices/Choices';

import { ColorStyle } from 'components';
import { useCount, useToppings, useChoices } from 'hooks';
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
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const onAddToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  console.log('openItem.choices ', openItem.choices);
  console.log('order.choice ', order.choice);

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
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
        </div>

        <Control>
          <Button
            type="button"
            onClick={onAddToOrder}
            disabled={openItem.choices && !order.choice}
          >
            <FinalCost>{formatCurrency(totalPriceItem(order))}</FinalCost>
            <Add>Добавить к заказу</Add>
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
