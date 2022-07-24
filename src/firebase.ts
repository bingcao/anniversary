import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

import { Product } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyATstsP_I6LRxX5WGE35z09s1Tg4uenuNE",
  authDomain: "anniversary-ce251.firebaseapp.com",
  projectId: "anniversary-ce251",
  storageBucket: "anniversary-ce251.appspot.com",
  messagingSenderId: "452652347081",
  appId: "1:452652347081:web:ee83e264439dce0dd0e718",
  measurementId: "G-JHZ9Z4BL9D",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PRODUCT_PATH = "products";

export async function addProduct(product: Product): Promise<void> {
  await addDoc(collection(db, PRODUCT_PATH), product);
}

export async function fetchProducts(): Promise<Array<Product>> {
  const productsResponse = await getDocs(collection(db, PRODUCT_PATH));
  return productsResponse.docs.map((doc) => doc.data() as Product);
}
