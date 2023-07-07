// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC4FrILbmYTG8E09yxwsEglkIo1bzd62M",
  authDomain: "carefinder-9550b.firebaseapp.com",
  projectId: "carefinder-9550b",
  storageBucket: "carefinder-9550b.appspot.com",
  messagingSenderId: "491766936964",
  appId: "1:491766936964:web:1aaf92e1ff78db95c359d1",
  measurementId: "G-7N9V4BH7ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);