import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpHV3oZ3gXlPdde728hgcvxWkCHUjI-sg",
  authDomain: "react-portfolio-23.firebaseapp.com",
  projectId: "react-portfolio-23",
  storageBucket: "react-portfolio-23.appspot.com",
  messagingSenderId: "391598958434",
  appId: "1:391598958434:web:fd3cb97f9aac4a6ff3ae3b",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
