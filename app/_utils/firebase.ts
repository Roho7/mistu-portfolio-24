import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAnc3_aPl6Y1OtY6q1_hu19sWuultNxBT8",
  authDomain: "mistu-portfolio-v1.firebaseapp.com",
  projectId: "mistu-portfolio-v1",
  storageBucket: "mistu-portfolio-v1.appspot.com",
  messagingSenderId: "912975765274",
  appId: "1:912975765274:web:e48d8f8eaacec6b75e16a3",
  measurementId: "G-YZWTG2R7JD"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
