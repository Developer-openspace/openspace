console.log(Notification.permission);
//show notification
/*function showNotification(){
    const notification= new Notification('New message from Charitable',{
        body:'Hey mate, wanna catch up soon?',
        icon:'../img/icons/icon-72x72.png',
        timeout:3000
       
       
    });
    notification.onclick=()=>{
        //window.location.href="https://wa.me/+254754423664"
        const modal=document.querySelector('#modal-notification');
        M.Modal.getInstance(modal).open();
    }
    //setTimeout(()=>notification.close(),10*10)
    setTimeout(notification.close(),100);
}*/
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
    fetch(`https://api.opencagedata.com/geocode/v1/json?q={latitude}+{longitude}&key=7c4b09ec3720467eb60d9ffe0714c9c1`)
    .then(res=>
        res.json()
       )
        .then(console.log)
       
  
        
    
    }
const errorCallback=(error)=>{
    console.error(error);
}
 navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
 