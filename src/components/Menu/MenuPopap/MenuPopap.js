import { useEffect, useRef, useState } from 'react';
import DetailsIcon from '@material-ui/icons/Details';

import {
  PopapWrap,
  PopapTextWrap,
  Popap,
  PopapItem,
  PopapList,
  SortText,
  PopapActiveItem,
} from './MenuPopap.style';

const sortList = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const MenuPopap = ({ activeItem, getActiveType }) => {
  const [showPopap, setShowPopap] = useState(false);
  const popapRef = useRef();

  const activeLabelName = sortList.find(item => item.type === activeItem).name;

  const handleOutsideClick = e => {
    const path =
      e.path ||
      (e.composedPath && e.composedPath()) ||
      e.composedPath(e.target);
    if (!path.includes(popapRef.current)) {
      setShowPopap(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const getActiveItem = type => {
    getActiveType(type);
    setShowPopap(!showPopap);
  };

  const toggleVisiblePopap = () => {
    setShowPopap(!showPopap);
  };

  const styleIcon = () => {
    return {
      transform: showPopap ? 'rotate(180deg)' : null,
      fontSize: '12px',
    };
  };

  return (
    <PopapWrap ref={popapRef} id="popapWrap">
      <DetailsIcon style={styleIcon()} />
      <PopapTextWrap>
        <SortText>Сортировка по:</SortText>
        <PopapActiveItem onClick={toggleVisiblePopap}>
          {activeLabelName}
        </PopapActiveItem>
      </PopapTextWrap>

      {showPopap && (
        <Popap>
          <PopapList>
            {sortList.map((item, index) => (
              <PopapItem
                key={item.type + index}
                onClick={() => getActiveItem(item.type)}
                active={activeItem === item.type ? true : ''}
              >
                {item.name}
              </PopapItem>
            ))}
          </PopapList>
        </Popap>
      )}
    </PopapWrap>
  );
};

export default MenuPopap;
