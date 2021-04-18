import { useEffect } from 'react';

export const useTitle = openItem => {
  useEffect(() => {
    document.title = openItem
      ? `${openItem.name} - твой яркий вкус`
      : 'LampaBurger - твой яркий вкус';
  }, [openItem]);
};
