import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkou8ZrhD8sVJO4Uba0ncPFu0Goaf7Y5k",
  authDomain: "arkaconnection-5bec0.firebaseapp.com",
  projectId: "arkaconnection-5bec0",
  storageBucket: "arkaconnection-5bec0.firebasestorage.app",
  messagingSenderId: "696020602435",
  appId: "1:696020602435:web:20697a108d1ac403290ef6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
