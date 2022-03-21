// Exercici 6: Event Bubbling: stopPropagation
// Les següents variables recullen información de la primera card
// const cardDiv = document.querySelector('.card');
// const infoDiv = document.querySelector('.info');
// const titulo = document.querySelector('.titulo');
// Afegeix un eventListener, per tal de que capturi el click en cada un d’ells. Escriu en consola
// un missatge corresponent a cada event.
// Que pasa?, com ho podem evitar?

// //amb 3 funcions
// const cardDiv = document.querySelector(".card");
// cardDiv.addEventListener("click", (clicar1) => {
//   console.log("es mostra card");
//   clicar1.stopPropagation();
// });
// // console.log(cardDiv);

// const infoDiv = document.querySelector(".info");
// infoDiv.addEventListener("click", (clicar2) => {
//   console.log("es mostra info");
//   clicar2.stopPropagation();
// });
// // console.log(infoDiv);

// const titulo = document.querySelector(".titulo");
// titulo.addEventListener("click", (clicar3) => {
//   console.log("això és el títul");
//   clicar3.stopPropagation();
// });
// console.log(titulo);

//amb switch

const cardDiv1 = document.querySelector(".card");
console.log(cardDiv1);
cardDiv1.addEventListener("click", clicar);
function clicar(event) {
  let element = event.target.className;
  switch (element) {
    case "titulo":
      console.log("això és el titul");
      event.stopPropagation();
      break;
    case "info":
      console.log("això és la info");
      event.stopPropagation();
      break;
    case "card":
      console.log("això és la card");
      event.stopPropagation();
      break;
  }
}
// function clicar(e) {
//   //ha de ser amb 3 funcions. per separat.
//   let element = e.target.className;
//   console.log("es mostra " + element);
//   e.stopPropagation();
// }
