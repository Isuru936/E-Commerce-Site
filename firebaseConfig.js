import { initializeApp as initialize } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfwcPLWiKK7qafIAA0MXGXEsxFNbbWPvc",
  authDomain: "palerimo-pizza.firebaseapp.com",
  projectId: "palerimo-pizza",
  storageBucket: "palerimo-pizza.appspot.com",
  messagingSenderId: "140652307212",
  appId: "1:140652307212:web:f83c8f810e97dd34e51f29",
  measurementId: "G-D3VRRRHRE4",
};

const app = initialize(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
