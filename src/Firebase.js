import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCyNtoajk0E8nOHbD6f-CEDiLrIX1hgVK0",
  authDomain: "ssip-e39a2.firebaseapp.com",
  projectId: "ssip-e39a2",
  storageBucket: "ssip-e39a2.appspot.com",
  messagingSenderId: "806315061394",
  appId: "1:806315061394:web:e7a45536069d61a8db764b",
  measurementId: "G-2NCWL8LF28"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };
