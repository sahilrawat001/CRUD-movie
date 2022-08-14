// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy_1fMR77a1YMWKDV3nnjtjKofxEgL27A",
  authDomain: "movie-e2760.firebaseapp.com",
  projectId: "movie-e2760",
  storageBucket: "movie-e2760.appspot.com",
  messagingSenderId: "339593059530",
  appId: "1:339593059530:web:33915adfcc8e4feb006833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);