// modificar primera card dinàmicament.

const card1 = document.getElementById("card1"); //busquem on està la card1
console.log(card1);

document.addEventListener("DOMContentLoaded", canviCard1());  //afegir listener i acció a fer.
function canviCard1() {
    card1.querySelector("img").setAttribute("src", products[0].img); //per posar imatge
    card1.querySelector(".h3").textContent="oli"; //nom producte
    card1.querySelector("p").textContent= "-luxe-"; //nom producte
    card1.querySelector(".card-body ul li i").textContent= "20"; //preu

};

