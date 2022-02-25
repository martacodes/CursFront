/*1. Imagina’t que vols fer el pagament del carrito de la compra.
Donades 2 variables totalCarrito, cashDisponible, comprova si tens prou cash
per pagar el total del carret. 
2 condicions pots posar parseInt
*/
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