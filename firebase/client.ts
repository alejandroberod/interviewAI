import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuaPmC0whSPZWaXnrrUlM_QliBbEdxNh0",
  authDomain: "intervai-5d06f.firebaseapp.com",
  projectId: "intervai-5d06f",
  storageBucket: "intervai-5d06f.firebasestorage.app",
  messagingSenderId: "49644075845",
  appId: "1:49644075845:web:2d1e5dfe97d9a83d525c2c",
  measurementId: "G-NKMQ2VY1LV",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
