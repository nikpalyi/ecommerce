import firebase from 'firebase/app';
import firebase from 'firebase/firestore';
import firebase from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB6LkdMyPP5bVw4xDNy6hv9mZvX_A_xZ4A',
  authDomain: 'ecommerce-db-4ddd9.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-4ddd9.firebaseio.com',
  projectId: 'ecommerce-db-4ddd9',
  storageBucket: 'ecommerce-db-4ddd9.appspot.com',
  messagingSenderId: '506637895169',
  appId: '1:506637895169:web:bd3edee2178cd42ae6e200',
  measurementId: 'G-7CVEQ85M01'
};

firebase.initializeApp(config);
