import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBfxub90DchjzCe9eZaR8M36-1GJN7UEJM",
  authDomain: "test-46415.firebaseapp.com",
  databaseURL: "https://test-46415-default-rtdb.firebaseio.com",
  projectId: "test-46415",
  storageBucket: "test-46415.appspot.com",
  messagingSenderId: "612333560674",
  appId: "1:612333560674:web:e207db5045a54679e5823b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };
