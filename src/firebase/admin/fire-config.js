import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { IS_PROD } from "../../config/environment";
// import 'firebase/auth';
// import { FIREBASE_CONFIG } from '../../config/constants';

//firebase.initializeApp(FIREBASE_CONFIG);
let FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// console.log("FIREBASE _LOG HERE: ", FIREBASE_CONFIG);
if (IS_PROD) {
  FIREBASE_CONFIG = {
    ...FIREBASE_CONFIG,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
}
// !firebase.apps.length
//   ? firebase.initializeApp(FIREBASE_CONFIG)
//   : firebase.app();

const app = initializeApp(FIREBASE_CONFIG);
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
