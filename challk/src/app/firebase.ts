// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Check if we are in a client-side environment
const isClient = typeof window !== 'undefined';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzTx4y5v0Zo-VyzkxrYIHeuBTRV4EZGbw",
  authDomain: "challk-9870f.firebaseapp.com",
  projectId: "challk-9870f",
  storageBucket: "challk-9870f.appspot.com",
  messagingSenderId: "101409895233",
  appId: "1:101409895233:web:9ece90db2f7d916f7427c0",
  measurementId: "G-8358YZFK9M"
};

// Initialize Firebase
let app;
let auth;

if (isClient) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth();
  
  // Initialize Firebase Analytics if we are in the client environment
  if (isClient) {
    const { getAnalytics } = require("firebase/analytics");
    getAnalytics(app);
  }
}

export { auth, app };
