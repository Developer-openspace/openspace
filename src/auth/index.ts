import {signInWithGoogle,signout} from '../firebase/index.js';
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
 //signin
 export  const signInWithGoogle=()=>{
    signInWithPopup(auth, provider).then((result:ResultType)=>{
      const name=result.user.displayName;
      const email= result.user.email;
      const pic=result.user.photoURL;

      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
      localStorage.setItem("pic",pic)
      showNotification();
      window.Location.reload();
    }).catch(()=>{
      showNotificationErr()
    })
}
  //logOut
  export const signout=()=>{
    signOut(auth).then(()=>{
      showNotificationSignout()
    }).catch((err:any)=>{
      console.log(err.message)
    })
  }

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



//listening to user auth status change 
import {setupUI} from './js/init.js'
import { ResultType } from "../types/types";
 auth.onAuthStateChanged((user)=>{
     //going to controll what users see if logged in or out
     if(user){
       //console.log('user is logged in', user)
       //acount details
        const account =document.querySelector('.account-details');
        let html='';
          const li =`
            <h4>
            <p>${localStorage.getItem('name')}</p>
            <p>${localStorage.getItem('email')}</p>
            <img src='${localStorage.getItem('pic')}' />
            </h4>
          `
         
        account.innerHTML =  html += li;

        setupUI(user)
     } else {
       //console.log('user is logged outer',user)
       const account =document.querySelector('.account-details');
        account.innerHTML = [];
       setupUI()
     }
   })