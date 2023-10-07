
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALdhd8pCfmTZ4g73ePpmi9mXSHuKQgTHA",
  authDomain: "comision-reactjs.firebaseapp.com",
  projectId: "comision-reactjs",
  storageBucket: "comision-reactjs.appspot.com",
  messagingSenderId: "538676462842",
  appId: "1:538676462842:web:98fae2c85e7f5a78727543"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)