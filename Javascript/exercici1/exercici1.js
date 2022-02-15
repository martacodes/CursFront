//1
let ein = 11;
let zwei = 22;

let result = ein + zwei;

console.log(result);

//2
let i = "I'm = I am"
let you = "You're = You are"

console.log(i);
console.log(you);

let i1 = 'I\'m\ = I am';
let you1 = 'You\'re\ = You are';

window.alert(i1 +" \n" + you1)

//3 programa que comprovi si són números les següents variables.
let a = +prompt ("introdueix un valor o lletra");


//sempre els valors inserits són strings per js.
//parseInt 
//mirar Nan funció. per validar si una variable es NAN fem servir isNan()

typeof a

console.log(typeof a);

window.alert(typeof a);

//4 promt windows.  informar pantalla si es major o menor... if.
var d = prompt ("introdueix un número");
var e = prompt ("introdueix un altre número");

if (d==e) {window.alert( "el primer i el segon són iguals")
} else 
if  (d>e) {
window.alert("el primer és major")}
else {
    window.alert("el segon és major")
};

//5 fer servir algoritme saber si número es parell o senar.
var b = prompt ("introdueix un número enter")
var total = b % 2
/* si la resta de la divisió és 0 es parell si no, senar
*/
if (total == 0) {
    window.alert(b + " és parell");
} else {
    window.alert(b + " és senar");
}


//6 alt i pes i IMC i mostrar per pantalla
var pes = prompt ("escriu el teu pes en kg");
var alcada = prompt ("escriu la teva alçada en m");

let imc = pes / (alcada ^ 2);

console.log(imc);
window.alert("El teu índex de massa corporal és " + imc);

//7 let marca=total+16+4 total 20

let marca = "total " + (16 + 4);
console.log(marca);