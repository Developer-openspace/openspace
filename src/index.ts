import { Err, geoPostion } from "./types/types.js"

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
const successCallback=(position:geoPostion)=>{
    //get position then store it in firestore
    const {latitude, longitude}= position.coords;
    console.log(latitude,longitude)
}
const errorCallback=(error:Err)=>{
    console.error(error.message);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
