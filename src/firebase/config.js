// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClS0ZPYn4bRrXo6OXMr9V3mVwNiY5Vlz4",
  authDomain: "tienda-bf420.firebaseapp.com",
  projectId: "tienda-bf420",
  storageBucket: "tienda-bf420.appspot.com",
  messagingSenderId: "831015495088",
  appId: "1:831015495088:web:e1595ecb73878cdfd32275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
