
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyCtneB_I-qar2_Q_qTGDgBpdRUkQ0Kp4Rs",
//   authDomain: "event-explorer-a09.firebaseapp.com",
//   projectId: "event-explorer-a09",
//   storageBucket: "event-explorer-a09.appspot.com", 
//   messagingSenderId: "966811565561",
//   appId: "1:966811565561:web:f1fb2f63619f7a7f77d128"
// };


// const app = initializeApp(firebaseConfig);


// export const auth = getAuth(app);
// export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
