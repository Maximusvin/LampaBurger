import CloseIcon from '@material-ui/icons/Close';
import { totalPriceItem, formatCurrency } from 'Functions';
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

const OrderListItem = ({ order }) => {
  const { name, url, weight, shortcode, topping } = order;
  const toppingCheck = topping
    .filter(item => item.checked)
    .map(item => item.name)
    .join(', ');

  return (
    <OrderItem>
      <ImageWrap>
        <Image src={url} alt={name} />
      </ImageWrap>

      <Description>
        <TopLine>
          <TopLineTitle>{name}</TopLineTitle>
          <TopLineOrder>{formatCurrency(totalPriceItem(order))}</TopLineOrder>
        </TopLine>
        <BottomLine>
          {toppingCheck && (
            <Small>
              {/* {shortcode}  */}
              {toppingCheck}
            </Small>
          )}

          <Button>
            <CloseIcon style={{ color: '#f7cc10' }} />
          </Button>
        </BottomLine>
      </Description>
    </OrderItem>
  );
};

export default OrderListItem;
