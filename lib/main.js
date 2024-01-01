const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
const croix= document.querySelector('.croix');


hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  menuMobile.style.transition = "transform 0.5s ease-in-out";
  menuMobile.style.transform = "translateX(0%)" ;
 })

croix.addEventListener('click', (e) => {
  e.preventDefault();
  menuMobile.style.transition = "transform 0.3s ease-in-out";
  menuMobile.style.transform = "translateX(-150%)" ;
 })
