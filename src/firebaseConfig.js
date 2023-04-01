
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
  export const db=getFirestore(app);
 
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
        window.Location.reload();
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

//firestore collectionref and getting docs
const collRef= collection(db,'notifications')
getDocs(collRef).then((snapshot)=>{
  const noticelist=(snapshot.docs)
  noticelist.forEach(doc => {
     const notice=doc.data();
     //console.log(notice)
     const title=notice.title
     const body=notice.body
     localStorage.setItem("title",title);
     localStorage.setItem("body",body)
  });
        showNotification1();
}).catch(err=>
  console.log(err)
  );
function showNotification1(){
   const notification= new Notification(localStorage.getItem('title'),{
       body:localStorage.getItem("body"),
       icon:'https://lh3.googleusercontent.com/a-/AOh14Gg0c810dgdHu_E1PKGw_I7Rl21eJgLKMX-Yle6zNA=s96-c',
       requireInteraction:true
 });
   notification.onclick=function(){
     window.parent.focus();
     this.close();
   };
} 
  

//Events data from firestore
const collRefEvent=collection(db,'events')
const account =document.querySelector('#event-detail');
getDocs(collRefEvent).then((snapshot)=>{
  setAccount(snapshot.docs)
})
const setAccount=(data)=>{
  let html=''
  data.forEach(doc=>{
    const useraccount=doc.data();
    const li =`
      <h5 class="center">${useraccount.title}</h5>
      <p class="light">${useraccount.body}</p>
    `
    html += li;
  })
  account.innerHTML = html;  
}
 //riddles to firestore
 const collRefanswer= collection(db, 'answers')
 const question =document.querySelector('#question');
getDocs(collRefanswer).then((snapshot)=>{
  riddle(snapshot.docs)
})
const riddle=(data)=>{
  let html=''
  data.forEach(doc=>{
    const useraccount=doc.data();
    const li =`
      ${useraccount.question}
    `
    html += li;
    const answer=useraccount.answer;
    localStorage.setItem('answer', answer);
  })
  question.innerHTML = html;  
}


 

//firestore adding doc
const joinGroup=document.querySelector('#group-form');
joinGroup.addEventListener('submit',(e)=>{
  e.preventDefault()
   const collRefgroup= collection(db, 'group');
   addDoc(collRefgroup,{
    userdata:[localStorage.getItem('name'),
    localStorage.getItem('email'),
    localStorage.getItem('pic')],
       name: joinGroup.username.value,
       number: joinGroup.number.value
     }).then(()=>{
      joinGroup.reset();
       const modal=document.querySelector('#modal-group')
       M.Modal.getInstance(modal).close();
     })
   })

const answerForm=document.querySelector('#answer-form');
const feedback=document.querySelector('.error')
answerForm.addEventListener('submit',(e)=>{
  e.preventDefault()
    if(answerForm.answer.value === localStorage.getItem('answer')){
        const collRefanswer= collection(db, 'answers')
        addDoc(collRefanswer, {
          userdata:[localStorage.getItem('name'),
          localStorage.getItem('email'),
          localStorage.getItem('pic')],
          name: answerForm.answer.value
          }).then(()=>{
          answerForm.reset();
          //const modal=document.querySelector('#modal-answer')
          //M.Modal.getInstance(modal).close();
        })  
      const next =`
        <h5 class="green-text center align light">correct answer<i class="material-icons">done</i></h5><br/>
        <h5 class="light">Now wait for the next riddle. <i class="material-icons"></i></h5>
        `
        feedback.innerHTML= next;
    }else{
      const next =`
      <h5 class="pink-text center-align light">incorrect answer <i class="material-icons">close</i></h5>
      `
      feedback.innerHTML= next;
      answerForm.reset();
    }
   })

/*const addEvent=document.querySelector('#create-form');
addEvent.addEventListener('submit',(e)=>{
  e.preventDefault()
   const collRefanswer= collection(db, 'events')
     addDoc(collRefanswer, {
       userdata:[localStorage.getItem('name'),
       localStorage.getItem('email'),
       localStorage.getItem('pic')],
       title: addEvent.title.value,
       body: addEvent.content.value
       }).then(()=>{
        addEvent.reset()
       const modal=document.querySelector('#modal-create')
       M.Modal.getInstance(modal).close();
     })
   })
*/
 //listening to user auth status change 
 import {setupUI} from './js/init.js'
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
