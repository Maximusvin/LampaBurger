import { createAction } from '@reduxjs/toolkit';
import { dataBase } from 'services/firebase';

export const fetchMenuData = () => dispatch => {
  dispatch(setLoaded(false));
  dataBase
    .ref('goods')
    .on('value', snapshot => dispatch(setMenuData(snapshot.val())));
};

export const setMenuData = createAction('menuDB/setMenuData');
export const setLoaded = createAction('menuDB/setLoaded');
