import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClvJUUs6su9vdkvvYOFZxEKa2aWhfBghs",
  authDomain: "botanico-21161.firebaseapp.com",
  projectId: "botanico-21161",
  storageBucket: "botanico-21161.appspot.com",
  messagingSenderId: "769022982123",
  appId: "1:769022982123:web:7a623174e8dcfd9b8b4bae",
  measurementId: "G-MD05K98L3H",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
