// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Corrected Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCtneB_I-qar2_Q_qTGDgBpdRUkQ0Kp4Rs",
  authDomain: "event-explorer-a09.firebaseapp.com",
  projectId: "event-explorer-a09",
  storageBucket: "event-explorer-a09.appspot.com", // ❗ corrected this line
  messagingSenderId: "966811565561",
  appId: "1:966811565561:web:f1fb2f63619f7a7f77d128"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth
export const auth = getAuth(app);
export default app;
