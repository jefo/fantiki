import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAyCILEfC1rFOTVyxZ1As5EgP8m8Zk-JJQ",
  authDomain: "nft-generate-59f11.firebaseapp.com",
  projectId: "nft-generate-59f11",
  storageBucket: "nft-generate-59f11.appspot.com",
  messagingSenderId: "578447306846",
  appId: "1:578447306846:web:28cf9a14f10eef39ab84cf",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
