/*console.log(Notification.permission);
//show notification
function showNotification(){
    const notification= new Notification('New message from imrany',{
        body:'Hey mate, wanna catch up soon?',
        icon:'../img/icons/icon-72x72.png',
    
       
    });
    notification.onclick=()=>{
        window.location.focus()
        this.close();  
    }
    //setTimeout(()=>notification.close(),10*10)
    setTimeout(notification.close.bind, 500);
}
//checking and asking permission
if(Notification.permission === 'granted'){
   showNotification();
}else if(Notification.permission !== 'denied'){
    Notification.requestPermission().then(permission =>{
        if(permission === "granted"){
            showNotification();
        }
    });
};*/

//geolocation
/*const successCallback=(position)=>{
    //get position then store it in firestore
    console.log(position.coords)
}
const errorCallback=(error)=>{
    console.error(error);
}
 navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
 */