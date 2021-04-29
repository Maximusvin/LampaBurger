import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import { totalPriceItem, formatCurrency } from 'Functions';
import OrderCountItem from '../OrderCountItem/OrderCountItem';
import { deleteItemInOrders } from 'redux/orders/ordersActions';
import { addOpenItemMenu } from 'redux/modals/modalsActions';

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

const OrderListItem = ({ order, index }) => {
  const dispatch = useDispatch();
  const { name, url, choice, topping, shortcode, weight } = order;
  const newOrder = useSelector(store => store.orders[index]);

  const costItem = formatCurrency(totalPriceItem(newOrder));

  const toppingCheck = topping
    .filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  return (
    <OrderItem>
      <ImageWrap>
        <Image src={url} alt={name} />
        <OrderCountItem index={index} />
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
            <Button
              onClick={() => dispatch(addOpenItemMenu({ ...order, index }))}
            >
              <CreateIcon />
            </Button>
            <Button onClick={() => dispatch(deleteItemInOrders(index))}>
              <CloseIcon />
            </Button>
          </div>
        </BottomLine>
      </Description>
    </OrderItem>
  );
};

export default OrderListItem;
