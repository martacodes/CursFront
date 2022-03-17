// Exercici 4: QuerySelector
// Mostra per consola:
// • La primera .card
// • L’element de la classe info del contenidor premium
// • La segona card de hospedaje
// • El formulari per id
// • El primer menú de navegació <nav>

let element2;

console.log("--- .card ---");
element2 = document.querySelector(".card");
console.log(element2);

console.log("--- .card ---");
element2 = document.querySelector('.premium .info'); //com a CSS, 2 selectors.
console.log(element2); //info dins de premium

console.log("--segona card hospedaje---");
element2 = document.querySelectorAll('.hospedaje .card')[1]; //se selecciona el que coincideix amb .card .hospedaje de class i el 2 pk comença amb 1
console.log(element2);

console.log("--formulari per id--");
element2 = document.querySelectorAll("#formulario");
console.log(element2);

console.log("--primer menú de nav--");
element2 = document.querySelector("nav");
console.log(element2);