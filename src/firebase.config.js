import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwR0n2oO7BEiKoaKlGg9uq2DdWlXTx3bs",
  authDomain: "cyber-estate.firebaseapp.com",
  projectId: "cyber-estate",
  storageBucket: "cyber-estate.appspot.com",
  messagingSenderId: "347787783667",
  appId: "1:347787783667:web:5056e0088f4aadf8e87686",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
