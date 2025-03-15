
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
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  // If Firebase app already exists, use the existing one
  if (error.code === 'app/duplicate-app') {
    console.log('Firebase app already exists, using existing app');
    app = initializeApp(undefined, 'default');
  } else {
    console.error('Error initializing Firebase:', error);
    throw error;
  }
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');

// Add these scopes to request additional permissions
googleProvider.addScope('profile');
googleProvider.addScope('email');

// For Microsoft provider
microsoftProvider.addScope('user.read');
microsoftProvider.addScope('openid');
microsoftProvider.addScope('profile');
microsoftProvider.addScope('email');

// Set custom parameters for the providers
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

microsoftProvider.setCustomParameters({
  prompt: 'consent'
});

export { auth, googleProvider, microsoftProvider };
