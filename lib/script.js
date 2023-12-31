let onglets = document.querySelectorAll('.conseil-onglet ul li a');
let textOnglets = document.querySelectorAll('.conseil-descriptif > div');
console.log(onglets)


onglets.forEach((onglet) => {
   onglet.addEventListener('click',(event) => {
    event.preventDefault();
    if (!onglet.classList.contains("active")) {
      onglet.classList.add('red');
    }
   })
 });
