
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIp3fmMZFLknmwH3Ik2MP0ea0lOzee-8g",
  authDomain: "log-auth2-c0ffa.firebaseapp.com",
  projectId: "log-auth2-c0ffa",
  storageBucket: "log-auth2-c0ffa.firebasestorage.app",
  messagingSenderId: "840000821714",
  appId: "1:840000821714:web:0e940e1c029d33d9ddd00b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');

export { auth, googleProvider, microsoftProvider };
