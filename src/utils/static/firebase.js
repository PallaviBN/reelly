import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4NmhoCB3HVl8OFzcBkaD1sg2GpdRYXPU",
  authDomain: "reelly-1b941.firebaseapp.com",
  projectId: "reelly-1b941",
  storageBucket: "reelly-1b941.appspot.com",
  messagingSenderId: "313281503075",
  appId: "1:313281503075:web:83760e7165f9657d52fd56",
  measurementId: "G-0M7LYEZ17H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
