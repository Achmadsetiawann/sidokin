// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9joHaRVhdPDSYKfmm9bG7xUv8Jja5y8M",
    authDomain: "sidokin-eea1d.firebaseapp.com",
    projectId: "sidokin-eea1d",
    storageBucket: "sidokin-eea1d.appspot.com",
    messagingSenderId: "991941689885",
    appId: "1:991941689885:web:dcfce0a07396343f677cf4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };