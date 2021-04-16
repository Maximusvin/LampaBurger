import CloseIcon from '@material-ui/icons/Close';
import { totalPriceItem, formatCurrency } from 'Functions';
import CountItem from '../../CardProduct/CountItem/CountItem';
import { useCount, useOrders } from 'hooks';

import {
  OrderItem,
  ImageWrap,
  Image,
  Description,
  TopLine,
  TopLineTitle,
  TopLineOrder,
  BottomLine,
  Small,
  Button,
} from './OrderListItem.style';

const OrderListItem = ({ order, onDelete }) => {
  const { name, url, choice, topping, id, shortcode, weight, count } = order;
  const counter = useCount(count);

  const newOrder = { ...order, count: counter.count };

  const costItem = formatCurrency(totalPriceItem(newOrder));

  const toppingCheck = topping
    .filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  return (
    <OrderItem>
      <ImageWrap>
        <Image src={url} alt={name} />
        <CountItem {...counter} />
      </ImageWrap>

      <Description>
        <TopLine>
          <TopLineTitle>{name}</TopLineTitle>
          <TopLineOrder>{costItem}</TopLineOrder>
        </TopLine>
        <BottomLine>
          {toppingCheck && <Small>{toppingCheck}</Small>}
          {choice && <Small>{choice}</Small>}

          {!toppingCheck && !choice && (
            <Small>
              {shortcode} {weight}
            </Small>
          )}

          <Button onClick={() => onDelete(id)}>
            <CloseIcon style={{ color: '#f7cc10' }} />
          </Button>
        </BottomLine>
      </Description>
    </OrderItem>
  );
};

export default OrderListItem;
