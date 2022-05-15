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


  