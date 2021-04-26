import { useContext } from 'react';
import { Context } from 'Functions';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import { totalPriceItem, formatCurrency } from 'Functions';
import CountItem from '../../CardProduct/CountItem/CountItem';
import { useCount } from 'hooks';

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

const OrderListItem = ({ order, onDelete, index }) => {
  const { setOpenItem } = useContext(Context);

  const { name, url, choice, topping, shortcode, weight, count } = order;
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

          <div>
            <Button onClick={() => setOpenItem({ ...order, index })}>
              <CreateIcon />
            </Button>
            <Button onClick={() => onDelete(index)}>
              <CloseIcon />
            </Button>
          </div>
        </BottomLine>
      </Description>
    </OrderItem>
  );
};

export default OrderListItem;
