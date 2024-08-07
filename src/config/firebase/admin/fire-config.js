import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { IS_CANARY, IS_PROD } from "../../environment";
// import 'firebase/auth';
// import { firebaseConfig } from '../../config/constants';

//firebase.initializeApp(firebaseConfig);
let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

if (IS_PROD || IS_CANARY) {
  firebaseConfig = {
    ...firebaseConfig,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
}
console.log("FIRE", firebaseConfig);
export const FIREBASE_CONFIG = firebaseConfig;

// !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

const app = initializeApp(firebaseConfig);
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
