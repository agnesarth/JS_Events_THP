//Fonctionnalité 1
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

let footer = document.getElementsByTagName('footer')[0];

let count = 1
let onFooterClick = function() {
  console.log("clic n°" + count)
  count += 1
};

footer.addEventListener('click', onFooterClick);


// Fonctionnalité 2
// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus

let navElmt = document.getElementById('navbarHeader');
let navTogglerElmt = document.getElementsByClassName('navbar-toggler')[0];
let onNavbarClick = function() {
  navElmt.classList.toggle("collapse");
};

navTogglerElmt.addEventListener('click', onNavbarClick);


//Fonctionnalité 3
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

let btnEdit = document.getElementsByClassName('btn-sm btn-outline-secondary')[0];
let cardText = document.getElementsByClassName('card-text')[0];
let onBtnEditClick = function() {
  cardText.style.color = "red";
}
btnEdit.addEventListener('click', onBtnEditClick);


//Fonctionnalité 4
//On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

let btnEdit2 = document.getElementsByClassName('btn-sm btn-outline-secondary')[1];
let cardText2 = document.getElementsByClassName('card-text')[1];

let onBtnEditClick2 = function() {
  cardText2.style.color = "green";
  btnEdit2.addEventListener('click', onBtnEditClick3);
  btnEdit2.removeEventListener('click', onBtnEditClick2)
}
let onBtnEditClick3 = function() {
  cardText2.style.color = "";
  btnEdit2.addEventListener('click', onBtnEditClick2);
  btnEdit2.removeEventListener('click', onBtnEditClick3)
}
btnEdit2.addEventListener('click', onBtnEditClick2);


//Fonctionnalité 5
// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher…

let bootstrap = document.getElementsByTagName('header')[0];
let link = document.getElementsByTagName('link')[0];

let onHeaderClick = function() {
  link.href = "";
  bootstrap.addEventListener('dblclick', onHeaderClick2);
  bootstrap.removeEventListener('dblclick', onHeaderClick)
}
let onHeaderClick2 = function() {
  link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  bootstrap.addEventListener('dblclick', onHeaderClick);
  bootstrap.removeEventListener('dblclick', onHeaderClick2)
}
bootstrap.addEventListener('dblclick', onHeaderClick); 


//Fonctionnalité 6
//T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.
//La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

let btnView = document.getElementsByClassName('btn btn-sm btn-success');

Array.prototype.forEach.call(btnView, button => {
  let reduceCard = button.parentNode.parentNode.parentNode.parentNode.firstChild.nextElementSibling;
  let removeCardText = button.parentNode.parentNode.parentNode.firstChild.nextElementSibling;

  var onBtnView = function() {
    reduceCard.style.width = "20%"; 
    reduceCard.style.height = "20%";
    removeCardText.style.display = "none";
    button.addEventListener('mouseover', onBtnView2);
    button.removeEventListener('mouseover', onBtnView);
  }
  var onBtnView2 = function() {
    reduceCard.style.width = "100%"; 
    reduceCard.style.height = "100%";
    removeCardText.style.display = '';
    button.addEventListener('mouseover', onBtnView);
    button.removeEventListener('mouseover', onBtnView2);
  }
  button.addEventListener('mouseover', onBtnView); 
}
); 


//Fonctionnalité 7
let btnLoop = document.getElementsByClassName('btn btn-secondary my-2')[0];
let parentCard = document.getElementsByClassName('row')[1];

let onBtnLoopClick = function() {
  parentCard.insertBefore(parentCard.lastElementChild, parentCard.firstElementChild)
}
btnLoop.addEventListener('click', onBtnLoopClick);


//Fonctionnalité 8
let btnLoopReverse = document.getElementsByClassName('btn btn-primary my-2')[0];

let onBtnLoopReverseClick = function() {
  btnLoopReverse.removeAttribute("href")
  parentCard.insertBefore(parentCard.firstElementChild, parentCard.lastElementChild.nextElementSibling)
  //lastCard.nextSibling
}
btnLoopReverse.addEventListener('click', onBtnLoopReverseClick);


//Fonctionnalité 9
let logoNav = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
let logoText = document.getElementsByTagName("strong")[0];
let navBarChange = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
let mainChange = document.getElementsByTagName("main")[0];
let footerChange = document.getElementsByTagName('footer')[0];
let body = document.body

let onLogoNav = function (e) {
  if (e.key === "a") {
    body.className = ''
    body.classList.add("col-4");
    body.style.padding = "0px 0px 0px 0px";
  } else if (e.key === "y") {
    body.className = ''
    body.classList.add("col-4");
    body.classList.add("offset-md-4");
    body.style.padding = "0px 0px 0px 0px";
  } else if (e.key === "p") {
    body.className = ''
    body.classList.add("offset-md-8");
    body.style.padding = "0px 0px 0px 0px";
  } else if (e.key === "b") {
    body.className = ''
  }
  
}
logoNav.addEventListener('keypress', onLogoNav)