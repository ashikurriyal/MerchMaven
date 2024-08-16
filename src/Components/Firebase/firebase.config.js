// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiTQW3RA7l-U2bHcHKElV8G6bO924AN-E",
  authDomain: "merch-maven.firebaseapp.com",
  projectId: "merch-maven",
  storageBucket: "merch-maven.appspot.com",
  messagingSenderId: "1068613949078",
  appId: "1:1068613949078:web:fbfcd9dcc12250591bd4b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;