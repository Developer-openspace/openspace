export const db=getFirestore(app);


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