// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyAh9811oArvBlWIdSa0Gh-rGKwCvT_n78Q",
  authDomain: "social-media-app-ee364.firebaseapp.com",
  projectId: "social-media-app-ee364",
  storageBucket: "social-media-app-ee364.appspot.com",
  messagingSenderId: "397393342467",
  appId: "1:397393342467:web:66317a292e21bd203d5e36"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);