// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpohlRvRqgB0q7nkyO_S5T_tUFrqUUheM",
  authDomain: "myaze-b4ccc.firebaseapp.com",
  projectId: "myaze-b4ccc",
  storageBucket: "myaze-b4ccc.appspot.com",
  messagingSenderId: "331847202858",
  appId: "1:331847202858:web:3dd2ee82e34d336dc16b53",
  measurementId: "G-BBM3WCHJ2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app,);
export default app;