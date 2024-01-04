// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuEV_ZkWaMKhRfX_QW8or5doqaTydX38Q",
  authDomain: "tumaps-17113.firebaseapp.com",
  projectId: "tumaps-17113",
  storageBucket: "tumaps-17113.appspot.com",
  messagingSenderId: "1075708944149",
  appId: "1:1075708944149:web:1c0d2420d947988172931c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );