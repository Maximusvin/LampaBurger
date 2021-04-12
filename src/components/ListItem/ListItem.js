import { List, Item, Header, Title, Сost, Image } from './ListItem.style';

const ListItem = ({ itemList }) => (
  <List>
    {itemList.map(({ id, name, url, price, description, weight, toppings }) => (
      <Item key={id}>
        <Header>
          <Title>{name}</Title>
          <Сost>
            {price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'UAH',
            })}
          </Сost>
        </Header>
        <Image src={url} alt={name} />
      </Item>
    ))}
  </List>
);

export default ListItem;
