document.addEventListener('DOMContentLoaded', function(){
  //parallax
  const parallax=document.querySelectorAll('.parallax');
  M.Parallax.init(parallax);
  //nav menu
  const menu=document.querySelector('.sidenav');
  M.Sidenav.init(menu, {edge:'right'});
  //modal
  const modals=document.querySelectorAll('.modal');
  M.Modal.init(modals);
  //collapsible
  const collapsibles=document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles)
  //carousel
  //const elems = document.querySelectorAll('.carousel.carousel-slider');
  //M.Carousel.init(elems, {fullWidth: true,
    //  indicators: true});
     
  }) 
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

  