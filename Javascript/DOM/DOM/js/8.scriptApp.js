// Exercici 8: Crear un nou link en el menú de Navegació principal
// Amb appendChild crearem una nova opció de navegació en el menú principal

var newLink = document.createElement("a");


newLink.href = "/nou enllaç"; //assignar ruta

var nav = document.getElementsByClassName(".navegacion");
console.log(nav);
// nav.appendChild(newLink);