// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmBxEkTNrtNqyNi-Z9hfGdDCE5Y9jjXx0",
  authDomain: "whole-store.firebaseapp.com",
  projectId: "whole-store",
  storageBucket: "whole-store.appspot.com",
  messagingSenderId: "113155543527",
  appId: "1:113155543527:web:83bad7991d5329a76c6d42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;