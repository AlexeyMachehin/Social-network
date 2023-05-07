import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyCBOQ5o-yICuU8tJWAeaK46-FHw9-7mMiU',
//   authDomain: 'vkontaktedb-e3904.firebaseapp.com',
//   projectId: 'vkontaktedb-e3904',
//   storageBucket: 'vkontaktedb-e3904.appspot.com',
//   messagingSenderId: '686961907815',
//   appId: '1:686961907815:web:c04b04f162e41196135cc2',
//   measurementId: 'G-LY5DXGRXX2',
// };

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);


