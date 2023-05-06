import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCBOQ5o-yICuU8tJWAeaK46-FHw9-7mMiU',
  authDomain: 'vkontaktedb-e3904.firebaseapp.com',
  projectId: 'vkontaktedb-e3904',
  storageBucket: 'vkontaktedb-e3904.appspot.com',
  messagingSenderId: '686961907815',
  appId: '1:686961907815:web:c04b04f162e41196135cc2',
  measurementId: 'G-LY5DXGRXX2',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

connectAuthEmulator(auth, 'http://localhost:5173/');

export const loginEmailPassword = async (
  loginEmail: string,
  loginPassword: string,
) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    loginEmail,
    loginPassword,
  );

  console.log(userCredential.user);
};
