// Import the necessary Firebase modules using modular imports
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const config = {
    apiKey: "AIzaSyCwwAFo4-wlTgh5HPXogOLndScRGy5vOcw",
    authDomain: "cloth-db-bc56a.firebaseapp.com",
    projectId: "cloth-db-bc56a",
    storageBucket: "cloth-db-bc56a.appspot.com",
    messagingSenderId: "669721586662",
    appId: "1:669721586662:web:45ae2cabd48d95eb25c427"
};

// Initialize Firebase app
const app = initializeApp(config);

// Initialize and export auth and firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Set up Google Auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Export the Google sign-in function
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
