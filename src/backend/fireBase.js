import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8kiJ7z37xnbJYZ3iWQK0ScKdralcapU8",
  authDomain: "fooddeliveryapp-41110.firebaseapp.com",
  projectId: "fooddeliveryapp-41110",
  storageBucket: "fooddeliveryapp-41110.firebasestorage.app",
  messagingSenderId: "1018670290562",
  appId: "1:1018670290562:web:68aa4b5765469cca05869b"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, set, get, storageRef, uploadBytesResumable, getDownloadURL };