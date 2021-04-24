import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// import { onLogInState, onLogOutState } from './registration';

const firebaseConfig = {
  apiKey: 'AIzaSyAqe_cY_1FKYax-5rTXC1leYLzR8m2OqWE',
  authDomain: 'lampaburger.firebaseapp.com',
  databaseURL: 'https://lampaburger-default-rtdb.firebaseio.com',
  projectId: 'lampaburger',
  storageBucket: 'lampaburger.appspot.com',
  messagingSenderId: '375009946141',
  appId: '1:375009946141:web:bbf2ad5cc2b39e201134f4',
};

export const fire = firebase.initializeApp(firebaseConfig);
export const authBase = firebase.auth;
export const dataBase = firebase.database();
