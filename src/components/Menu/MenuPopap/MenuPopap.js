import { useEffect, useRef, useState } from 'react';
import EjectRoundedIcon from '@material-ui/icons/EjectRounded';
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

const sortList = ['популярности', 'цене', 'алфавиту'];

const MenuPopap = () => {
  const [showPopap, setShowPopap] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const popapRef = useRef();
  const activeLabelName = sortList[activeItem];

  const handleOutsideClick = e => {
    if (!e.path.includes(popapRef.current)) {
      setShowPopap(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const getActiveItem = item => {
    setActiveItem(item);
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
                key={item + index}
                onClick={() => getActiveItem(index)}
                active={activeItem === index ? true : ''}
              >
                {item}
              </PopapItem>
            ))}
          </PopapList>
        </Popap>
      )}
    </PopapWrap>
  );
};

export default MenuPopap;
