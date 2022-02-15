//1. Fes un programa on es forci el resultat NaN i es mostri per pantalla.
let a = "f";
let b = parseInt(a)
console.log(b)

//2. Fes un programa per convertir un String nombre a nombre.
let c = prompt("introdueix un número");
console.log("El número és " + parseInt(c));

//3. Fes un programa per validar que no es un número.
let d = prompt("3. introdueix un número o una lletra");
let res = Number(d);
if (res) {
    document.write(d + " is a number");
} else {
   document.write(d + " is not a number");
}