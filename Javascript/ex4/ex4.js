/* 1 Calcula els milisegons que falten fins al dia del teu aniversari.
Mirar amb el Date.now que no em queda clar.
*/
let an = new Date(2023,01,05);
let ac = new Date();

let mil = an.getMilliseconds();
console.log("milisegons fins laniversari" + mil);
let mila = ac.getMilliseconds();
console.log("resultat futur" + mila);

let resta = (ac-an);
console.log("milisegons que falten " + resta);

/* 2.
Crea un objecte de tipus Date amb la data i hora actual. 
Què passa si s’assigna amb el mètode setHours el valor 26? 
Què passa si s’assigna amb el mètode setMinutes el valor 65? 
Què passa si s’assigna com a dia de mes 35?
*/

let aca = new Date();
var hores = aca.setHours(26);
console.log(hores);

var minu = aca.setMinutes(65);
console.log(minu);

var dat = aca.setDate(35);
console.log(dat);
//dona bé, ens continua donant a milisegons, llavors no li importa si hi ha més o menys.
//3 Demana la data de naixement a un usuari, i mostra l’edat en anys, mesos, dies, segons i milisegons.

let dia = prompt("Introdueix el teu any de naixement (YYYY-MM-DD");
dia = new Date(dia);

let totalMilisegons = Date.now() -  dia.getTime();





