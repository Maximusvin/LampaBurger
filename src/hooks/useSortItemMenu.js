export const useSortItemMenu = (dbMenu, activeTypePopap) => {
  const localMenuDb = [...dbMenu];

  const sortList = (menuList, by) => {
    return menuList.sort((a, b) => a[by] - b[by]);
  };

  const sortListByName = menuList => {
    return menuList.sort((a, b) => a.name.localeCompare(b.name));
  };

  let sortItemList = null;

  switch (activeTypePopap) {
    case 'popular': {
      sortItemList = sortList(localMenuDb, 'rating');
      break;
    }
    case 'alphabet': {
      sortItemList = sortListByName(localMenuDb);
      break;
    }
    case 'price': {
      sortItemList = sortList(localMenuDb, 'price');
      break;
    }
    default:
      return;
  }

  return sortItemList;
};
