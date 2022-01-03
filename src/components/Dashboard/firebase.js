// Import the functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClvJUUs6su9vdkvvYOFZxEKa2aWhfBghs",
  authDomain: "botanico-21161.firebaseapp.com",
  databaseURL:
    "https://botanico-21161-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "botanico-21161",
  storageBucket: "botanico-21161.appspot.com",
  messagingSenderId: "769022982123",
  appId: "1:769022982123:web:7a623174e8dcfd9b8b4bae",
  measurementId: "G-MD05K98L3H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
