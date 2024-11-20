// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-23f0a.firebaseapp.com",
  projectId: "mern-estate-23f0a",
  storageBucket: "mern-estate-23f0a.firebasestorage.app",
  messagingSenderId: "785468147398",
  appId: "1:785468147398:web:73b7a619a423aa55cf79c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);