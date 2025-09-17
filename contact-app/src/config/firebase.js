// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQF3y_mr7pulJoXm4Cv1CA_Kbc84u8oHk",
    authDomain: "contact-app-1dfdf.firebaseapp.com",
    projectId: "contact-app-1dfdf",
    storageBucket: "contact-app-1dfdf.firebasestorage.app",
    messagingSenderId: "1055114468110",
    appId: "1:1055114468110:web:9bc86bd74c8666c257555f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);