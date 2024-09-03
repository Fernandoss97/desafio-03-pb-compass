import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcEEBFFJqJqNqfhzZpJiY3K2D0695sgJU",
  authDomain: "desafio-03-8b2a7.firebaseapp.com",
  projectId: "desafio-03-8b2a7",
  storageBucket: "desafio-03-8b2a7.appspot.com",
  messagingSenderId: "1054193945585",
  appId: "1:1054193945585:web:dbf465a9b592974ba3d250",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };
