import { useContext } from 'react';
import { Context } from 'Functions';
import { useDispatch } from 'react-redux';
import { addOpenItemMenu } from 'redux/openItemMenu/openItemMenuActions';

import { List, Item, Header, Title, Сost, Image } from './ListItem.style';
import { formatCurrency } from 'Functions';
import { useSortItemMenu } from 'hooks';

const ListItem = ({ itemList, activeItem }) => {
  const dispatch = useDispatch();
  const { setOpenItem } = useContext(Context);
  const sortItemList = useSortItemMenu(itemList, activeItem);

  return (
    <List>
      {sortItemList.map(product => (
        <Item
          key={product.id}
          onClick={() => dispatch(addOpenItemMenu(product))}
        >
          {/* <Item key={product.id} onClick={() => setOpenItem(product)}> */}
          <Header>
            <Title>{product.name}</Title>
            <Сost>{formatCurrency(product.price)}</Сost>
          </Header>
          <Image src={product.url} alt={product.name} />
        </Item>
      ))}
    </List>
  );
};

export default ListItem;
