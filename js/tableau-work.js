// Récupération des éléments HTML avec les selecteurs
const type1 = document.querySelector('#exp-btn-exp');
const type2 = document.querySelector('#exp-btn-form');

const bouton1 = document.querySelector('#work-choice-mysticode');
const bouton2 = document.querySelector('#work-choice-namastha');
const bouton3 = document.querySelector('#work-choice-bluebuddy');
const bouton4 = document.querySelector('#work-choice-psj');
const bouton5 = document.querySelector('#work-choice-ensmv');
const bouton6 = document.querySelector('#work-choice-e42');
const bouton7 = document.querySelector('#work-choice-opcr');
const bouton8 = document.querySelector('#work-choice-cfdi');


const div1 = document.querySelector('#work-txt-mysticode');
const div2 = document.querySelector('#work-txt-namastha');
const div3 = document.querySelector('#work-txt-bluebuddy');
const div4 = document.querySelector('#work-txt-psj');
const div5 = document.querySelector('#work-txt-ensmv');
const div6 = document.querySelector('#work-txt-e42');
const div7 = document.querySelector('#work-txt-opcr');
const div8 = document.querySelector('#work-txt-cfdi');


type1.addEventListener('click', () => {
  // On affiche la div1 et on masque les autres divs
  bouton1.style.display = 'block';
  bouton2.style.display = 'block';
  bouton3.style.display = 'block';
  bouton4.style.display = 'block';
  bouton5.style.display = 'block';
  bouton6.style.display = 'none';
  bouton7.style.display = 'none';
  bouton8.style.display = 'none';
});

type2.addEventListener('click', () => {
  // On affiche la div1 et on masque les autres divs
  bouton1.style.display = 'none';
  bouton2.style.display = 'none';
  bouton3.style.display = 'none';
  bouton4.style.display = 'none';
  bouton5.style.display = 'none';
  bouton6.style.display = 'block';
  bouton7.style.display = 'block';
  bouton8.style.display = 'block';
});



// Ajout d'un événement clic sur chaque bouton
bouton1.addEventListener('click', () => {
  // On affiche la div1 et on masque les autres divs
  div1.style.display = 'block';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div5.style.display = 'none';
  div6.style.display = 'none';
  div7.style.display = 'none';
  div8.style.display = 'none';
});

bouton2.addEventListener('click', () => {
  // On affiche la div2 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'block';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div5.style.display = 'none';
  div6.style.display = 'none';
  div7.style.display = 'none';
  div8.style.display = 'none';
});

bouton3.addEventListener('click', () => {
  // On affiche la div3 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'block';
  div4.style.display = 'none';
  div5.style.display = 'none';
  div6.style.display = 'none';
  div7.style.display = 'none';
  div8.style.display = 'none';
});

bouton4.addEventListener('click', () => {
  // On affiche la div4 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'block';
  div5.style.display = 'none';
  div6.style.display = 'none';
  div7.style.display = 'none';
  div8.style.display = 'none';
});

bouton5.addEventListener('click', () => {
  // On affiche la div4 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div5.style.display = 'block';
  div6.style.display = 'none';
  div7.style.display = 'none';
  div8.style.display = 'none';
});

bouton6.addEventListener('click', () => {
  // On affiche la div4 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div5.style.display = 'none';
  div6.style.display = 'block';
  div7.style.display = 'none';
  div8.style.display = 'none';
});

bouton7.addEventListener('click', () => {
  // On affiche la div4 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div5.style.display = 'none';
  div6.style.display = 'none';
  div7.style.display = 'block';
  div8.style.display = 'none';
});

bouton8.addEventListener('click', () => {
  // On affiche la div4 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div5.style.display = 'none';
  div6.style.display = 'none';
  div7.style.display = 'none';
  div8.style.display = 'block';
});


document.addEventListener("DOMContentLoaded", function() {
  var type1 = document.getElementById("exp-btn-exp");
  var bouton1 = document.getElementById("work-choice-mysticode");
  var div1 = document.getElementById("work-txt-mysticode");

  type1.classList.add("active");
  bouton1.classList.add("active");
  div1.classList.add("active");
  
  type1.addEventListener('click', () => {
    type1.classList.add("active");
    type2.classList.remove("active");
  });

  type2.addEventListener('click', () => {
    type2.classList.add("active");
    type1.classList.remove("active");
  });
});
