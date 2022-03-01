/*1. Imagina’t que vols fer el pagament del carrito de la compra.
Donades 2 variables totalCarrito, cashDisponible, comprova si tens prou cash
per pagar el total del carret. 
2 condicions*/
let totalCarrito = prompt("Total carrito")
let cashDisponible = prompt("cashDisponible")

if(cashDisponible => totalCarrito)
{console.log("Pots pagar la teva compra")
} else {
    console.log("No tens suficients diners per pagar la compra.")
}

/*2. Imagina’t que en la teva botiga els usuaris poden tenir 3 roles:
• ADMIN: El Usuario puede editar, eliminar y ver toda la información
• EDITOR: El usuario solo puede editar sus registros
• AUTOR: El usuario solo puede registrar usuarios
• ANOMYMOUS: El Usuario es visitante, solo puede ver la información
Controla les accions que poden fer cadascún d’ells amb un if 
amb if anidado, if else if... un if dentro del else*/

let user;
user = "editor";
/*
if (user == "admin") {
    console.log("Vostè és administrador, pot editar, eliminar i veure la informació")
} if (user == "editor") {
    console.log("Vostè és editor, poot editar els registres")
} else { 
    console.log("Vostè és autor, pot registrar usuaris")
}*/

switch (user) {
    case "admin":
        console.log("Vostè és administrador, pot editar, eliminar i veure la informació");
        break;

    case "editor":
        console.log("Vostè és editor, pot editar els registres");
        break;
    case "autor":
        console.log("Vostè és autor, pot editar usuaris");
        break;
    case "anonymous":
        console.log("Vostè és visitant");
        break;
}

