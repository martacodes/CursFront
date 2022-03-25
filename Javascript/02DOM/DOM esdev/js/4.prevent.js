// Exercici 4, preventDefault
// <form action="/buscador" method="POST" class="formulario " id="formulario" >
// <input type="text" name="busqueda" class="busqueda" placeholder=" ">
// <input type="submit" value="Buscar" id="btn-submit">
// </form>
// Si li donem a Buscar intentará enviar el Formulari al servidor.
// Però hem d'evitar enviar-ho si no està validat, per això fem servir preventDefault
// Fes que al clickar buscar, no envii el formulari

let buscador = document.getElementById("formulario2"); 
console.log(buscador);
buscador.addEventListener("submit", prevenir); //desactiva tot el formulari.

function prevenir(e) {
    window.alert("entrar a la funció");
    e.preventDefault(); //mètode propi dels formularis
}