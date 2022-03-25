// modificar  card dinàmicament.
document.addEventListener("DOMContentLoaded", printCard()); 
 //afegir listener i acció a fer.
function printCard() {
    products.forEach(product => {
    const card = document.getElementById("card" + product.id);
    card.querySelector("img").setAttribute("src", product.img);
    card.querySelector(".h3").textContent= product.name;
    card.querySelector("p").textContent= product.type;
    card.querySelector(".card-body ul li i").textContent= product.price;
})
}