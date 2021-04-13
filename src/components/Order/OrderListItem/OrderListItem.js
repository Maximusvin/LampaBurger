import CloseIcon from '@material-ui/icons/Close';
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
          <TopLineOrder>
            {/* {totalPriceItems(price, count).toFixed(2)} ₴ */}
            {price} грн
          </TopLineOrder>
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
