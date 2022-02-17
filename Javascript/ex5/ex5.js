/* 1. Donat el següent string:
const producto = ' Monitor 20 Pulgadas ';
Elimina tot */
let producto = 'Monitor 20 Pulgadas ';
producto.trim();
console.log(producto.trim().length);//per saber la llargada de l'string
console.log(producto.trim());

/*2. Practicarem amb: .replace , .slice i repeat
const producto = 'Monitor 20 Pulgadas';
b. Extreu en una nova variable la següent part de la frase: 40 '.
c. Extreu en una nova variable la següent part de la farase: nitor 20.
d. Declara una variable i assignali el teu Nom. Mostra la primer lletra d’aquesta variable.
*/
//a 
let canvi = producto.replace("Pulgadas", "'");
console.log("canvi de Pulgadas per ' " + canvi);

let canvi2 = producto.replace("20", "40");
console.log("aquest és el canvi 2 20 per 40= " + canvi2);
 
//b
let res = producto.replace("Pulgadas","'").replace
("20","40");
console.log("hauria de sortir 40 '" + res);
let m = res.indexOf("M");
let r = res.indexOf(" ");
console.log("busco la M, està a la posició " + m);
console.log("busco la posició de l'espai post Monitor =" + r);

let res2 = res.slice(m,r);
console.log("hi ha de sortir 40' " + res2); 

//c 
console.log("exercici c")
let one = producto.indexOf("M");
console.log("exercici b " + one);
let two = producto.indexOf("o");
console.log("lloc segona paraula" + two);
let retalla = producto.slice(one,two);
console.log("resultat b " + retalla);

//c
let nom = "Marta";


/*3. Practicarem amb Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
Separa variable actividad, tenint en compte espai en blanc.
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
Ara fes-ho tenint en compte la coma.
*/
let activitat = "Estic aprenent Javascript Modern";
console.log(activitat.split(" "));

let hobbies = "Llegir, caminar, escoltar música, escriure, aprendre a programar";
console.log(hobbies.split(", "));

/*4. Canvia el següent text tot a majúscula. 
const producto = 'Monitor 24 pulgadas ';
 */
console.log(producto.toUpperCase());

/* 5 Realitzar la cerca d'un string en un string origen. 
Cal ingressar una frase o text (font) i després la clau a cercar. 
En cas de trobar-la, imprimir la posició, altrament una llegenda 
que indiqui que no hi és.
 
let font = prompt ("redacta un text");
let paraula = prompt ("la paraula a cercar");
let on = font.indexOf(paraula);
console.log("on és? " + on);
if (on == -1) {
    document.write("la paraula cercada no està en el text")
} else {
    document.write("la paraula està a la posició " + on);
} 
*/