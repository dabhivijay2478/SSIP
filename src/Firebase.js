import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA62pywhcA6QoGKx8eqa_Zo9ps_gxLTVAQ",
  authDomain: "ssip-58e47.firebaseapp.com",
  projectId: "ssip-58e47",
  storageBucket: "ssip-58e47.appspot.com",
  messagingSenderId: "119744069755",
  appId: "1:119744069755:web:adb1a797f922b414d422de",
  measurementId: "G-7Z26HL07L9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth, db };
