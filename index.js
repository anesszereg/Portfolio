// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2gYsu83bvBk4Lb5U7UTTajOvvjCmiiUU",
  authDomain: "aness-zereg-portfolio.firebaseapp.com",
  projectId: "aness-zereg-portfolio",
  storageBucket: "aness-zereg-portfolio.appspot.com",
  messagingSenderId: "718422532165",
  appId: "1:718422532165:web:719734b4322da8ec5f032c",
  measurementId: "G-M7NXXVRZGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);