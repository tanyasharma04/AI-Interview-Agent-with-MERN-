
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-d63b9.firebaseapp.com",
  projectId: "interview-d63b9",
  storageBucket: "interview-d63b9.firebasestorage.app",
  messagingSenderId: "879700821534",
  appId: "1:879700821534:web:66a356ce7513c4f40b500f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}