import CloseIcon from '@material-ui/icons/Close';
import { totalPriceItem } from '../../../Functions/totalPriceItem';
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
  const { name, url, price, weight, shortcode } = order;

  return (
    <OrderItem>
      <ImageWrap>
        <Image src={url} alt={name} />
        {/* <CounterProducts {...counter} /> */}
      </ImageWrap>

      <Description>
        <TopLine>
          <TopLineTitle>{name}</TopLineTitle>
          <TopLineOrder>{totalPriceItem(order)} ₴</TopLineOrder>
        </TopLine>
        <BottomLine>
          <Small>
            {shortcode} {weight}
          </Small>
          <Button>
            <CloseIcon style={{ color: '#f7cc10' }} />
          </Button>
        </BottomLine>
      </Description>
    </OrderItem>
  );
};

export default OrderListItem;
