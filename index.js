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

const template = document.getElementById("infoProduct");

ajouter.addEventListener("click", (e) => {
  e.preventDefault();
  count++;
  let btnplus = document.createElement("button");
  btnplus.id = "plus";
  btnplus.textContent = " +1";
  let btnmoin = document.createElement("button");
  btnmoin.id = "moin";

  let proto = {
    nom: `produit: ${nom.value}`,
    quantite: quantite.value,
    prixAchatHt: `prix achat ht: ${prixAchatht.value}`,
    prixventeht: `prix vente ht: ${prixventeht.value}`,
    prixVenteTtc: `prix de vente ttc: ${ventettc.value}`,
    degre: `degré: ${degreAlcool.value}`,
    marge: `marge: ${margeHt.value}`,
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

  btnplus.addEventListener("click", () => {
    // p1.style.display = "none";
    let newQ = quantite.value++;
    console.log(newQ);
    let case1 = document.getElementById(`case${y}`);
    case1.textContent = newQ;
    console.log(quantite.value);
  });

  newligne.addEventListener("click", (e) => {
    console.log(e.target);
  });
  // monTableau[0] = `nom:${nom.value}`;
  // monTableau[1] = quantite.value.value;
  // monTableau[2] = prixAchatht.value;
  // monTableau[3] = prixventeht.value;
  // monTableau[4] = ventettc.value;
  // monTableau[5] = degreAlcool.value;
  // monTableau[6] = margeHt.value;

  // monTableau.join("    ");
  // console.log(monTableau.join("    "));
  // for (let i = 0; i < monTableau.length; i++) {

  // monTableau.forEach((element) => {
  //   let i = 0;
  //   i++;
  //   let para = document.createElement("p");
  //   para.id = monTableau[i];

  //   para.textContent = monTableau[i];

  //   let newDiv = document.createElement("div");
  //   newDiv.id = `produit${count}`;
  //   newDiv.appendChild(para);
  //   newligne.appendChild(newDiv);
  //   console.log(newDiv);
  // });
  // // let para = document.createElement("p");

  // para.textContent = monTableau[i];
  // let newDiv = document.createElement("div");
  // newDiv.id = `produit${count}`;
  // newDiv.appendChild(para);
  // newligne.appendChild(newDiv);
  // console.log(newDiv);
  // }

  // count++;
  // let para = document.querySelector("p");
  // para.style.background = Number(count % 2 === 0) ? "blue" : "white";

  // let clone = template.content.cloneNode(true);
  // let proto2 = Object.create(proto);
  // array.push(proto2);
  // console.log(clone);
  // let p1 = document.createElement("p");
  // clone.getElementById("nom1").textContent = nom.value;
  // newligne.appendChild(clone);
  // // let p2 = document.createElement("p");
  // p2.textContent = proto.quantite;
  // clone.getElementById("quantite1").textContent = proto.quantite;
  // console.log(clone);
  // // let p3 = document.createElement("p");
  // p3.textContent = proto.prixAchatHt;
  // // let p4 = document.createElement("p");
  // p4.textContent = proto.prixventeht;
  // // let p5 = document.createElement("p");
  // p5.textContent = proto.prixVenteTtc;
  // // let p6 = document.createElement("p");
  // p6.textContent = proto.degre;
  // // let p7 = document.createElement("p");
  // p7.textContent = proto.arge;
  // console.log(p1.textContent);

  // let nom1 = document.getElementById("nom1");

  // clone.appendChild(p1);

  // let quantite1 = document.getElementById("quantite1");

  // quantite1.appendChild(p2);
  // let aHT = document.getElementById("aHT");

  // aHT.appendChild(p3);
  // let vHT = document.getElementById("vHT");

  // vHT.appendChild(p4);
  // let vTTC = document.getElementById("vTTC");

  // vTTC.appendChild(p5);
  // let mHT = document.getElementById("mHT");

  // newligne.appendChild(infoProduct);

  // let type = document.getElementById("type");

  // let degree = document.getElementById("degree");
  // degree.appendChild(p6);
  // let btnDelete1 = document.createElement("button");
  // btnDelete1.id = "delete";
  // let delete2 = clone.getElementById("delete");
  // console.log(btnDelete1);
  // let info = clone.getElementById("info");
  // console.log(array);
  // background();
  /*  let modifier = document.createElement("button");
  modifier.id = "modifier";
  let modif = clone.getElementById("modifier");

  modif.addEventListener("click", () => {
      console.log("ok");
      
  }); */

  //   btnDelete1.textContent = "effacer";
  //   delete2.addEventListener("click", () => {
  //     info.style.display = "none";
  //     console.log("ok");
  //     delete2.style.display = "none";
  //   });
  //   let result = prixventeht.value + prixAchatht.value * 0.2;

  //   nom1.textContent = nom.value;
  //   quantite1.textContent = quantite.value;
  //   aHT.textContent = prixAchatht.value;
  //   vHT.textContent = prixventeht.value;
  //   ventettc.textContent = `le prix de vente TTC est de: ${result} €`;
  //   vTTC.textContent = result;
  //   mHT.textContent = margeHt.value;
  //   type.textContent = degree = degreAlcool.value;

  //   tbody.append(clone);
  //   console.log(result);
  //   console.log(clone);
});
