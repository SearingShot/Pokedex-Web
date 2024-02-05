import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhmO8KkI2CPpGWEDtwjqUJzj5_hqtrLJY",
  authDomain: "pokedex-22f79.firebaseapp.com",
  projectId: "pokedex-22f79",
  storageBucket: "pokedex-22f79.appspot.com",
  messagingSenderId: "187184722468",
  appId: "1:187184722468:web:8d3e63a17723a6e86a1eb1",
  measurementId: "G-L9WFD80PZ7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");

