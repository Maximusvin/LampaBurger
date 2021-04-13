import { List, Item, Header, Title, Сost, Image } from './ListItem.style';

const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(product => (
      <Item key={product.id} onClick={() => setOpenItem(product)}>
        <Header>
          <Title>{product.name}</Title>
          <Сost>
            {product.price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'UAH',
            })}
          </Сost>
        </Header>
        <Image src={product.url} alt={product.name} />
      </Item>
    ))}
  </List>
);

export default ListItem;
