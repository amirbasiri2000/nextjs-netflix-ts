// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4127glUWUlVCwoLimQ-cSuss1NhdPw0E",
  authDomain: "xenon-muse-329408.firebaseapp.com",
  projectId: "xenon-muse-329408",
  storageBucket: "xenon-muse-329408.appspot.com",
  messagingSenderId: "160295055376",
  appId: "1:160295055376:web:4dd34011b882b1b6659a95"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig):getApp()
const db = getFirestore();
const auth = getAuth(); 

export default app
export { auth , db }