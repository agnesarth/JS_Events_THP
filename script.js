// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

let footer = document.getElementsByTagName('footer')[0];

let count = 1
let onFooterClick = function() {
  console.log("clic n°" + count)
  count += 1
};

footer.addEventListener('click', onFooterClick);


// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus

// Fonctionnalité 2 : toggle burger
let navElmt = document.getElementById('navbarHeader');
let navTogglerElmt = document.getElementsByClassName('navbar-toggler')[0];
let onNavbarClick = function() {
  navElmt.classList.toggle("collapse");
};

navTogglerElmt.addEventListener('click', onNavbarClick);


// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

let btnEdit = document.getElementsByClassName('btn-sm btn-outline-secondary')[0];
let cardText = document.getElementsByClassName('card-text')[0];
let onBtnEditClick = function() {
  cardText.style.color = "red";
}
btnEdit.addEventListener('click', onBtnEditClick);


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


// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher…

let bootstrap = document.getElementsByTagName('header')[0];
let link = document.getElementsByTagName('link')[0];
console.log(bootstrap)
console.log(link)
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


//T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.
//La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

let reduceCard = document.getElementsByClassName("card-img-top")[2];
let btnView = document.getElementsByClassName('btn btn-sm btn-success')[2];
let removeCardText = document.getElementsByClassName('card-text')[2];
let onBtnView = function() {
  reduceCard.style.width = "20%"; 
  reduceCard.style.height = "20%";
  removeCardText.innerHTML = "";
}
btnView.addEventListener('mouseover', onBtnView); 


