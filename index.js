const ajouter = document.getElementById("ajouter");
const nom = document.getElementById("nom");
const quantite = document.getElementById("quantite");
const prixAchatht = document.getElementById("prix-achat-ht");
const prixventeht = document.getElementById("prix-vente-ht");
const ventettc = document.getElementById("ventettc");
const degreAlcool = document.getElementById("degreAlcool");
const margeHt = document.getElementById("margeHt");
const tbody = document.getElementById("tbody");
const noAlcool = document.getElementById("n-a");
const alcool = document.getElementById("al");
const autre = document.getElementById("autre");
const infoProduct = document.getElementById("infoProduct");
const newligne = document.getElementById("newligne");
let array = [];
let count = 0;
let x = 0;
let idbtnplus = 0;
const template = document.getElementById("infoProduct");

function prixTTC(pventeHT, pachatHT) {
  let result = (pventeHT + pachatHT) * 0.2;

  return result;
}

function margeHT(pventeHT, pachatHT) {
  let result = pventeHT - pachatHT;

  return result;
}

ajouter.addEventListener("click", (e) => {
  e.preventDefault();

  prixTTC(prixventeht.value, prixAchatht.value);

  let pttc = prixTTC(prixventeht.value, prixAchatht.value);
  console.log(pttc);

  let mht = margeHT(prixventeht.value, prixAchatht.value);
  console.log(mht);

  count++;
  let btnplus = document.createElement("button");

  idbtnplus++;
  btnplus.id = `ajou${idbtnplus}`;

  btnplus.textContent = " +1";
  let btnmoin = document.createElement("button");
  btnmoin.id = "moin";

  let proto = {
    nom: `produit: ${nom.value}`,
    quantite: `quantite: ${quantite.value}`,
    prixAchatHt: `prix achat ht: ${prixAchatht.value}`,
    prixventeht: `prix vente ht: ${prixventeht.value}`,
    prixVenteTtc: `prix de vente ttc: ${pttc}`,
    degre: `degré: ${degreAlcool.value}`,
    marge: `marge: ${mht}`,
  };

  let monTableau = Object.values(proto);
  let p1 = document.createElement("ul");
  p1.id = ` produit${count}`;

  for (let i = 0; i < monTableau.length; i++) {
    x++;
    let li = document.createElement("li");
    li.textContent = monTableau[i];
    li.id = `case${x}`;
    p1.appendChild(li);
  }
  p1.appendChild(btnplus);
  newligne.appendChild(p1);
  console.log(newligne);
  console.log(monTableau);

  newligne.addEventListener("click", (e) => {
    console.log(e.target);
  });
});

btnplus.addEventListener("click", () => {
  let y = 1;
  y++;
  // p1.style.display = "none";
  let newQ = quantite.value++;
  console.log(newQ);
  let case1 = document.getElementById(`case${y}`);
  case1.textContent = newQ;
  console.log(quantite.value);
});
