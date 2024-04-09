// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANJku7e80xoIv9mhma0MfNcX-5U8usjNA",
  authDomain: "user-authentication-8960e.firebaseapp.com",
  projectId: "user-authentication-8960e",
  storageBucket: "user-authentication-8960e.appspot.com",
  messagingSenderId: "612430530595",
  appId: "1:612430530595:web:a2b7a4a5bbf9c3b6c9c996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth