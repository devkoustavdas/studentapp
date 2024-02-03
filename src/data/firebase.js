// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAG37XBUEQKNTQrOT63snGgsTXvznHLIdY",
    authDomain: "decode-studentapp.firebaseapp.com",
    projectId: "decode-studentapp",
    storageBucket: "decode-studentapp.appspot.com",
    messagingSenderId: "899383550517",
    appId: "1:899383550517:web:5c7c688da1f148c10cc77c",
    measurementId: "G-DQ07NVJW6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);