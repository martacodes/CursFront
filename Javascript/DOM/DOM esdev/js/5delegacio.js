// Exercici 5
// Com hem vist, la següent variable recull información de la primera card
// const cardDiv = document.querySelector('.card');
// Dins de la card tenim:

// Captura l’event click, per cada una de les classes: categoria concierto, titulo, precio.
// Fe servir les delegacions, per controlar els events de cada categoría.

const cardDiv = document.querySelector(".card"); //només en mostar un, el primer
console.log(cardDiv);

cardDiv.addEventListener("click", classe); //primer l'acció, després la funció.

function classe(event) {
  let element = event.target.className;
  switch (element) {
    case "categoria concierto":
        console.log("categoria concierto");
        event.stopPropagation()
      break;
    case "precio":
        console.log("precio");
        event.stopPropagation()
      break;
    case "titulo":
        console.log("titulo");
        event.stopPropagation()
      break;
  }
}
