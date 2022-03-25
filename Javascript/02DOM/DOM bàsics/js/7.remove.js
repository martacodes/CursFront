// Exercici 7: Eliminar elements, removeChild
// a) Eliminem el primer Link que troba ... en aquest cas la opció de menú Vender
// b) Accedir a la class="navegacion" y eliminem la opció de menú Registro ́. Eliminem a
// partir del pare.

const primerEnlace = document.querySelector("a");
console.log(primerEnlace);
primerEnlace.remove(); //elimina l'enllaç.