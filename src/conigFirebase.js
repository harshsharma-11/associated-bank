// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnmu3qFekZ2ZTTJGU7TpjbBA5g49gMv_8",
  authDomain: "sparks-bank-13780.firebaseapp.com",
  projectId: "sparks-bank-13780",
  storageBucket: "sparks-bank-13780.appspot.com",
  messagingSenderId: "359991060722",
  appId: "1:359991060722:web:829f36aa688cbb0894086b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);