import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import imgSceleton from 'assets/images/img_sceleton.png';

import { List, Item, Header, Image } from './ListItemSkeleton.style';

const sceletonItem = Array(6).fill(0);

const ListItemSkeleton = () => {
  return (
    <List>
      {sceletonItem.map((_, index) => (
        <Item key={index}>
          <Header>
            <Loader type="ThreeDots" color="#fff" height={50} />
          </Header>
          <Image src={imgSceleton} alt="загрузка" />
        </Item>
      ))}
    </List>
  );
};

export default ListItemSkeleton;
