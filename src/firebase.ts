import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { Makeup } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyATstsP_I6LRxX5WGE35z09s1Tg4uenuNE",
  authDomain: "anniversary-ce251.firebaseapp.com",
  projectId: "anniversary-ce251",
  storageBucket: "anniversary-ce251.appspot.com",
  messagingSenderId: "452652347081",
  appId: "1:452652347081:web:ee83e264439dce0dd0e718",
  measurementId: "G-JHZ9Z4BL9D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addMakeup(makeup: Makeup) {
  await addDoc(collection(db, "makeup"), makeup);
}
