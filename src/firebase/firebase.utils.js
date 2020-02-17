import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

//take user auth object from auth library and store in DB:
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //create snapshot, the data, storing data in Firebase:
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup Google authentication:
const provider = new firebase.auth.GoogleAuthProvider();
// we always want to trigger the Google pop-up whenever we use Google auth provider for authentication and sign-in:
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
