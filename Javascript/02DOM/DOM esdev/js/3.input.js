// Exercici 3, Event al formulari: input
// a) Afegeix un event perquè ens mostri un alert cada vegada que escrivim una lletra al buscador
// b) Afegeix un event perquè ens mostri un alert cada vegada que escrivim la lletra a al buscador
// c) El mateix que l'exercici 2, però ara fes servir una funció.

let buscador1 = document.getElementsByClassName("busqueda")[0];
console.log(buscador1);

function anyLetter(letter) {
    window.alert("You have written a letter!");
};

function theLetter(e) {
    console.log(e);
    if (e.key == "a") { //aquí entra al que estem escrivint a input. el target.value o data.
        window.alert("Has escrit la lletra a!")
    };
};

buscador1.addEventListener("keydown", anyLetter);
buscador1.addEventListener("keydown", theLetter);