import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAG37XBUEQKNTQrOT63snGgsTXvznHLIdY",
    authDomain: "decode-studentapp.firebaseapp.com",
    databaseURL: "https://decode-studentapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "decode-studentapp",
    storageBucket: "decode-studentapp.appspot.com",
    messagingSenderId: "899383550517",
    appId: "1:899383550517:web:5c7c688da1f148c10cc77c",
    measurementId: "G-DQ07NVJW6B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const projectsDB = getFirestore(app);

export { app, auth, projectsDB };

