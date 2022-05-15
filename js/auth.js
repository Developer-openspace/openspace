
import {db,auth, signInWithGoogle} from '../firebaseConfig.js';
const signup=document.querySelectorAll('.bn-signup');
signup.addEventListener('click',()=>{
   signInWithGoogle()
})
