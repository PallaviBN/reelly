// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKmoc85gZnAK4b0nTzXA0pK5AFXFMjUGI",
  authDomain: "netflixgpt-db568.firebaseapp.com",
  projectId: "netflixgpt-db568",
  storageBucket: "netflixgpt-db568.appspot.com",
  messagingSenderId: "952157354080",
  appId: "1:952157354080:web:c6f049678cfc74c6efeb05",
  measurementId: "G-9WTMT2TDB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();