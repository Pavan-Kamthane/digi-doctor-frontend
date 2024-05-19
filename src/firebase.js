// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDolbNnTRIq7pZN0tx9zhmpGb3erUBVZFk",
  authDomain: "digi-doctor-79687.firebaseapp.com",
  projectId: "digi-doctor-79687",
  storageBucket: "digi-doctor-79687.appspot.com",
  messagingSenderId: "295932259369",
  appId: "1:295932259369:web:4e6d6d6886c09efc3c0038",
  measurementId: "G-2JCNSESMWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
