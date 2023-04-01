//setupUI for logged in and logged out users
const loggedinLink=document.querySelectorAll('.logged-in')
const loggedoutLink=document.querySelectorAll('.logged-out')
export const setupUI=(user)=>{
  if(user){
    loggedinLink.forEach(item=>item.style.display='block')
    loggedoutLink.forEach(item=>item.style.display='none')
  }else{
    loggedinLink.forEach(item=>item.style.display='none')
    loggedoutLink.forEach(item=>item.style.display='block')
  }
}

//checking and asking permission
if(Notification.permission === 'granted'){
    //showNotification();
 }else if(Notification.permission !== 'denied'){
     Notification.requestPermission().then(permission =>{
         if(permission === "granted"){
             //showNotification();
         }
     });
 };
 
 //geolocation
const successCallback=(position)=>{
    //get position then store it in firestore
    //console.log(position.coords)
    const {latitude, longitude}= position.coords;
}
const errorCallback=(error)=>{
    console.error(error);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
