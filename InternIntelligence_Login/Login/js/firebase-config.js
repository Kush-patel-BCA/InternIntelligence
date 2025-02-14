// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCPQn7AOxEGHlOvtdAZNkSQSL_JM5klzQ",
    authDomain: "api-for-firebase-5bb2c.firebaseapp.com",
    projectId: "api-for-firebase-5bb2c",
    storageBucket: "api-for-firebase-5bb2c.firebasestorage.app",
    messagingSenderId: "984756845710",
    appId: "1:984756845710:web:5382c51499b05db8a29ddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export authentication instance
export { auth };
