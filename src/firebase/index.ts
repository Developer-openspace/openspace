  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import {getAuth, GoogleAuthProvider, signInWithPopup,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
  import{getFirestore,collection,getDocs,addDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCXpmSlILMaKyAUCAEGXe7aO3V4rkHce3w",
    authDomain: "charity-5a2c8.firebaseapp.com",
    projectId: "charity-5a2c8",
    storageBucket: "charity-5a2c8.appspot.com",
    messagingSenderId: "1004201424415",
    appId: "1:1004201424415:web:b9acc529e2f6444d73c72a",
    measurementId: "G-80CLLFDVQR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const provider= new GoogleAuthProvider();
  const db=getFirestore(app);
  
export{
  auth,
  getAuth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  db,
  collection,
  getDocs,
  addDoc
}