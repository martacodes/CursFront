// Exercici 1: Accedint al document
// Mostra per consola els següent element DOM:
// • document
// • body
// • id del formulari
// • el links
// • el className d’algun dels links
// • totes les imatges

let elemento;

console.log("------ Documento ------------");
elemento = document;
console.log(elemento);

console.log("------ body ------------");
elemento = document.body;
console.log(elemento);

console.log("------ Form ------------");
elemento = document.forms[0].id;
console.log(elemento);

console.log("------ Links ------------");
elemento = document.links;
console.log(elemento);

console.log("------ Classname 4t Link ------------");
elemento = document.links[4].className;
console.log(elemento);

console.log("------ Images ------------");
elemento = document.images;
console.log(elemento);







