if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js')
    .then(()=>console.log('sw registered'))
    .catch((err)=>console.log('sw not registerd', err))
}