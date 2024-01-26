/*
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
*/

function resetActive(){
  const centerp = document.querySelectorAll('.center p');
  centerp.forEach(element => element.classList.remove('active'));
}

function switchOnglet(parametre1) {
  const centerp = document.querySelectorAll('.center p');
  switch(parametre1) {
    case 'achat' :
      resetActive();
      centerp[0].classList.add('active');

      //total.classList.add('movetotal');
      break;
    case 'vendre' :
      resetActive();
      centerp[1].classList.add('active');

      //total.classList.add('movetotal');
      break;
    case 'renovation' :
      resetActive();
      centerp[2].classList.add('active');

      //total.classList.add('movetotal');
      break;
    default :
      resetActive();
      centerp[0].classList.add('active');

      break;
  }
  }

function init (parametre1) {
    const selects = document.querySelectorAll('#monselect option');
    selects.forEach((select) => {
      select.removeAttribute('selected')
      if (select.value === parametre1) {
        select.setAttribute("selected", "selected");
        console.log(parametre1)
        switchOnglet(parametre1);
      }
        })

  }


/* onglets*/
var url = new URL(window.location.href);
var parametre1 = url.searchParams.get("parametre1");
init(parametre1);

const centerp = document.querySelectorAll('.center p');
const h2 = document.querySelectorAll('.offre-header h2');
const h2span = document.querySelectorAll('.offre-header h2 span');
const selector = document.querySelector('#monselect ');


switchOnglet(parametre1);



selector.addEventListener('change', (e) =>{
  console.log(e);
  const selects = document.querySelectorAll('#monselect option');
  console.log(selects);
  selects.forEach((select) => {
    select.removeAttribute('selected')
    if (select.value === selector.value) {
      select.setAttribute("selected", "selected")
      switchOnglet(selector.value);
    }
      })
});


/* onglets click*/
