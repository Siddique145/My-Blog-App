// Import the necessary functions and modules from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Firebase Auth
import { getFirestore } from "firebase/firestore"; // Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKZr5uxhgU5hNO_CPJvjfdAGzQtR2VzHw",
  authDomain: "blogging-app-5e698.firebaseapp.com",
  projectId: "blogging-app-5e698",
  storageBucket: "blogging-app-5e698.firebasestorage.app",
  messagingSenderId: "278442747741",
  appId: "1:278442747741:web:1493ebc1626ebe54ba2ab4",
  measurementId: "G-SLP90C4P72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Export the required objects
export { auth, db }; // Export both auth and db
