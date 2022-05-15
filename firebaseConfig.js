
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import {getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
  import{getFirestore} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  export const auth=getAuth(app);
  export const db=getFirestore(app);

  const provider= new GoogleAuthProvider();

  export  const signInWithGoogle=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      console.log(result)
    }).catch((err)=>{
      console.log(err)
    })
  }