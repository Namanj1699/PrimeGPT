// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD-_BoKoOcK2IOb4J4TqVw4cFUzJWR20E",
  authDomain: "primegpt-4a0b5.firebaseapp.com",
  projectId: "primegpt-4a0b5",
  storageBucket: "primegpt-4a0b5.appspot.com",
  messagingSenderId: "918083714785",
  appId: "1:918083714785:web:6a02212b41b9771b7741a0",
  measurementId: "G-C557S5KDTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);