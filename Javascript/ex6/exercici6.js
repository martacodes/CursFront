/*1. Declara una variables anomenada esCorrecte, assigna-li true o false. Utilitza un
condicional per veure el seu valor. */
console.log("Exercici 1");
let esCorrecte = true
if (esCorrecte) {
    console.log("això és true!")
} else {
    console.log("això és false!")
}

/*2. Declara i assigna dos valors booleans. Programa els següent escenaris:
*/
console.log("Exercici 2");

let x = true;
let y = false;
/*a. Escenari 1: Si tots dos valors són certs, el resultat hauria de ser cert. En
la resta de casos ha de ser Fals. */
console.log("Escenari u amb &&")
if (x && y) {
    console.log("Això és true!")
} else {
    console.log("Això és false")
}
/*b. Escenari 2: Si un dels dos valors és cert, el resultat hauria de ser cert.
En la resta de casos ha de ser Fals. */
console.log("Escenari dos amb ||")
if (x || y) {
    console.log("Això és true!")}
 else {
    console.log("Això és false!")}

/*3. Analitza les següents expressions lògiques. Mostra per pantalla el seu valor i
raona el seu resultat. */
console.log("Exercici 3")

//a) 2 < 12
console.log("Part A: 2 < 12");

let a = 2 < 12;

if (a) {
    console.log("Això és true!")
} else {
    console.log("Això és false!")
}
//b) 2 < "12". Javascript tranforma el 12 string en un número.
console.log("Part B 2 < '12'");

let b = 2 < "12";

if (b) {
    console.log("Això és true!")
} else {
    console.log("Això és false!");
}
//c) "2" < "12" False perquè quan funciona amb strings es fixa amb el primer nombre.
// s'interpreta com a lletres i compara les primeres. <-- més senzill.
console.log("Part C '2' < '12'");

let c = "2" < "12";

if (c) {
    console.log("Això és true!")
} else {
    console.log("Això és false!");
}
//d) !("2" < "12") En aquest cas dona true, però perquè està negat. '2' < '12' dona fals perquè
//només es fixa en el primer nombre, és a dir el 1, i donaria fals, però amb ! dona true
console.log("Part D !('2' < '12')");
let d = !("2" < "12");

if (d) {
    console.log("Això és true!")
} else {
    console.log("Això és false!");
}
//e) ((2 < "12") && (2 == "2")). Les 2 són certes. És true. 
console.log("Part E ((2 < '12') && (2 == '2'))");
let e = ((2 < "12") && (2 == "2"))

if (e) {
    console.log("Això és true!")
} else {
    console.log("Això és false!");
}

//f) (("2" < "12") || (2 < 12)). True, perquè una de les condicions és certa.
console.log("Part F (('2' < '12') || (2 < 12))");
let f = (("2" < "12") || (2 < 12));
if (f) {
    console.log("Això és true!")
} else {
    console.log("Això és false!");
}

//g) (("2" < "12") && (2 < 12))
console.log("Part G ('2' < '12') && (2 < 12)")
let g = (("2" < "12") && (2 < 12));
if (g) {
    console.log("Això és true!")
} else {
    console.log("Això és false!");
} //és false perquè un dona incorrecte l'string, que compara el primer valor de cada un.