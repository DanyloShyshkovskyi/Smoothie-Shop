// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm2kH9t-G9xeMKxlo-StT5iSb4q4QlMrA",
    authDomain: "smoothie-shop-a7227.firebaseapp.com",
    projectId: "smoothie-shop-a7227",
    storageBucket: "smoothie-shop-a7227.appspot.com",
    messagingSenderId: "788507812966",
    appId: "1:788507812966:web:a6f3ecdddb7e89dff279a7",
    measurementId: "G-01YVWBE2LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleAuth = new GoogleAuthProvider();
export const facebookAuth = new FacebookAuthProvider();