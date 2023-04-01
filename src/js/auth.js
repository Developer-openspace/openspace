
import {signInWithGoogle,signout} from '../firebaseConfig.js';
//sign in
const signup=document.querySelector('#bn-signup');
signup.addEventListener('click',()=>{
   signInWithGoogle();
});
const signup1=document.querySelector('#bn-signup1');
signup1.addEventListener('click',()=>{
   signInWithGoogle();
});
//logout
const logout=document.querySelector('#logout');
logout.addEventListener('click',()=>{
   signout();
})
const logout1=document.querySelector('#logout1');
logout1.addEventListener('click',()=>{
   signout();
})



