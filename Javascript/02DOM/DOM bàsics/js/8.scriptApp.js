// Exercici 8: Crear un nou link en el menú de Navegació principal
// Amb appendChild crearem una nova opció de navegació en el menú principal

var newLink = document.createElement("a");

newLink.textContent = "Hola";
newLink.href = "#"; //assignar ruta
console.log("exercici 8:appendChild")
var nav = document.getElementsByClassName("navegacion")[0]; //cal indicar la posició perquè et mostri el que vols en el ClassName.
console.log(nav);
nav.appendChild(newLink);