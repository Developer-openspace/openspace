
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import {getAuth, GoogleAuthProvider, signInWithPopup,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
  import{getFirestore,collection,getDocs,addDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
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
  const auth=getAuth(app);
   const db=getFirestore(app);
//Authentication
  const provider= new GoogleAuthProvider();
//signin
  export  const signInWithGoogle=()=>{
    signInWithPopup(auth, provider).then((result)=>{
      //console.log(result)
      const name=result.user.displayName;
      const email= result.user.email;
      const pic=result.user.photoURL;

      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
      localStorage.setItem("pic",pic)
      showNotification();
    }).catch(()=>{
      //console.log(err.message)
      showNotificationErr()
    })
 }
  //logOut
  export const signout=()=>{
    signOut(auth).then(()=>{
      showNotificationSignout()
    }).catch(err=>{
      console.log(err.message)
    })
  }

  //firestore collectionref and getting docs
  const collRef= collection(db,'notifications')
  getDocs(collRef).then((snapshot)=>{
    console.log(snapshot)
  });

  //firestore adding doc


   //signin notification
   function showNotification(){
    const notification= new Notification('Successfull Sign in',{
        body:localStorage.getItem("name"),
        icon:localStorage.getItem("pic"),
        timeout:3000,
  });
    notification.onclick=function(){
      window.parent.focus();
      this.close();
    };
}  //signin notification error
 function showNotificationErr(){
   const notification=new Notification('Unsuccessfull Sign in',{
     body:"Try again...",
     icon:'./img/icons/icon-72x72.png',
     timeout:3000
   });
   notification.onclick=function(){
     window.parent.focus();
     this.close();
   }
 } //signout notification
 function showNotificationSignout(){
   const notification =new Notification('You have Log out',{
     body:'Sad to see you go..Come back soon..they is more going around here',
     icon:'./img/icons/icon-72x72.png',
     timeout:2000
   });
   notification.onclick=function(){
     window.parent.focus();
     this.close();
   }
 }
 //listening to user auth status change 
 
   auth.onAuthStateChanged(user=>{
     //going to controll what users see if logged in or out
     if(user){
       console.log('user is logged in', user)
     } else {
       console.log('user is logged outer',user)
     }
   })
