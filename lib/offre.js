
const blocks = document.querySelectorAll('.offre-controle-flex-block');
blocks.forEach((block) => {
  block.addEventListener('mouseover', (e) => {
    e.currentTarget.style.transform = "scale(1.2)";
    const newblocks =document.querySelectorAll('.offre-controle-flex-block');
    newblocks.forEach((newblock) => {
      if (newblock.style.transform !== "scale(1.2)") newblock.style.transform="scale(0.8)";
    })
  })
  block.addEventListener('mouseout', (e) => {
    const newblocks =document.querySelectorAll('.offre-controle-flex-block');
    newblocks.forEach((newblock) => {
        newblock.style.transform="scale(1)"
    })
  })
})


/* onglets*/
var url = new URL(window.location.href);
var parametre1 = url.searchParams.get("parametre1");
const centerp = document.querySelectorAll('.center p');
const h2 = document.querySelectorAll('.offre-header h2');
const li = document.querySelectorAll('.offre-header li');
const h2span = document.querySelectorAll('.offre-header h2 span');
console.log(h2);

switch(parametre1) {
  case 'achat' :
    centerp[0].classList.add('active');
    h2[0].classList.add('active');
    h2span[0].classList.add('activeinline');
    break;
  case 'renovation' :
    centerp[1].classList.add('active');
    h2[1].classList.add('active');
    h2span[1].classList.add('activeinline');
    break;
  case 'vendre' :
    onglets[2].classList.add('active');
    h2[2].classList.add('active');
    h2span[2].classList.add('activeinline');
    break;
  default :
    centerp[0].classList.add('active');
    h2[0].classList.add('active');
    h2span[0].classList.add('activeinline');
    break;
}
