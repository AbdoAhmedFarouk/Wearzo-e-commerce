import { initializeApp } from 'firebase/app';
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB5YJluyfN8lM2uGx1wMrnyB78h6FPB5lU',
  authDomain: 'wearzo-ecommerce-19e56.firebaseapp.com',
  projectId: 'wearzo-ecommerce-19e56',
  storageBucket: 'wearzo-ecommerce-19e56.appspot.com',
  messagingSenderId: '42879330270',
  appId: '1:42879330270:web:b5e0897b363000b438df4f',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });

export const signIn = signInWithEmailAndPassword;
export const signUp = createUserWithEmailAndPassword;
export const logOut = signOut;
export const resetPassword = sendPasswordResetEmail;
export const authStateChange = onAuthStateChanged;

export default app;
