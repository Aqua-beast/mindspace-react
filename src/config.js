// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDqHpiP86IViANPrtxUSgEHDnxqs6VeaI",
  authDomain: "mindspace-e488e.firebaseapp.com",
  projectId: "mindspace-e488e",
  storageBucket: "mindspace-e488e.appspot.com",
  messagingSenderId: "772880784354",
  appId: "1:772880784354:web:417a0b5173f20393faf7bb",
  measurementId: "G-2EE5T6LP72"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);

export default FirebaseApp;