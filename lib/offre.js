
const blocks = document.querySelectorAll('.offre-controle-flex-block');
blocks.forEach((block) => {
  block.addEventListener('mouseover', (e) => {
    e.currentTarget.style.transform = "scale(1.2)";
    const newblocks =document.querySelectorAll('.offre-controle-flex-block');
    newblocks.forEach((newblock) => {
      if (newblock.style.transform !== "scale(1.2)") {
        newblock.style.transform="scale(0.8)";
        newblock.style.opacity="0.4";
      }
    })
  })
  block.addEventListener('mouseout', (e) => {
    const newblocks =document.querySelectorAll('.offre-controle-flex-block');
    newblocks.forEach((newblock) => {
        newblock.style.transform="scale(1)";
        newblock.style.opacity="1";
    })
  })
})

function resetActive(){
  const centerp = document.querySelectorAll('.center p');
  const h2 = document.querySelectorAll('.offre-header h2');
  const h2span = document.querySelectorAll('.offre-header h2 span');


  centerp.forEach(element => element.classList.remove('active'));
  h2.forEach(element => element.classList.remove('active'));
  h2span.forEach(element => element.classList.remove('activeinline'));

}


function switchOnglet(parametre1) {
  switch(parametre1) {
    case 'achat' :
      resetActive();
      centerp[0].classList.add('active');
      h2[0].classList.add('active');
      h2span[0].classList.add('activeinline');
      //total.classList.add('movetotal');
      break;
    case 'renovation' :
      resetActive();
      centerp[1].classList.add('active');
      h2[1].classList.add('active');
      h2span[1].classList.add('activeinline');
      //total.classList.add('movetotal');
      break;
    case 'vendre' :
      resetActive();
      centerp[2].classList.add('active');
      h2[2].classList.add('active');
      h2span[2].classList.add('activeinline');
      //total.classList.add('movetotal');
      break;
    default :
      resetActive();
      centerp[0].classList.add('active');
      h2[0].classList.add('active');
      h2span[0].classList.add('activeinline');
      break;
  }
  }




/* onglets*/
var url = new URL(window.location.href);
var parametre1 = url.searchParams.get("parametre1");

const centerp = document.querySelectorAll('.center p');
const h2 = document.querySelectorAll('.offre-header h2');
const h2span = document.querySelectorAll('.offre-header h2 span');
const total = document.querySelector('.total');
const lis = document.querySelectorAll('.offre-header li');

switchOnglet(parametre1);

/* remove*/
function removeLi () {
const li = document.querySelectorAll('.offre-header li');
li.forEach((li) => {
  li.classList.remove("activeli");
  console.log('supre');
});
}
/* fin remove*/

lis.forEach((li) => {
  li.addEventListener('click', (e) => {
    e.preventDefault();
    removeLi ();
    e.currentTarget.classList.add('activeli');
    console.log((e.currentTarget.innerText).toLowerCase());
    switchOnglet((e.currentTarget.innerText).toLowerCase());
  })
});
/* onglets click*/
