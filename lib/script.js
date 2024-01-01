
let onglets = document.querySelectorAll('.conseil-onglet ul li a');
let textOnglets = document.querySelectorAll('.conseil-descriptif > div');
var url = new URL(window.location.href);

// Récupère les paramètres
var parametre1 = url.searchParams.get("parametre1");

switch(parametre1) {
  case 'particulier' :
    onglets[0].classList.add('active');
    textOnglets[0].classList.add('display');
    break;
  case 'investisseur' :
    onglets[1].classList.add('active');
    textOnglets[1].classList.add('display');
    break;
  case 'pro' :
    onglets[2].classList.add('active');
    textOnglets[2].classList.add('display');
    break;
  case 'exterieur' :
    onglets[1].classList.add('active');
    textOnglets[1].classList.add('display');
    break;
  case 'interieur' :
    onglets[0].classList.add('active');
    textOnglets[0].classList.add('display');
    break;
  default :
    onglets[0].classList.add('active');
    textOnglets[0].classList.add('display');
    break;
}

// on itere sur tout les onglets.
// si on clique et deja active ==> on fait rien
// si on clique et non active ==> on recupere son id
  // on efface tout les active
  // on met en active les onglets concernes a partir de l'id recupere

  onglets.forEach((onglet, idx) => {
    onglet.addEventListener('click', (e) => {
      e.preventDefault();
      if (!onglet.classList.contains('active')){
        resetActive(onglets, textOnglets);
        onglets[idx].classList.add('active');
        textOnglets[idx].classList.add('display');
      }
    });
  });

  function resetActive(onglets, textOnglets){
    onglets.forEach(onglet => onglet.classList.remove('active'));
    textOnglets.forEach(textOnglet => textOnglet.classList.remove('display'));
  }
