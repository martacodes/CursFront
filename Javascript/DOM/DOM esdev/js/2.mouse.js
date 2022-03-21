// Exercici 2, mouseenter, mouseout
// a) Al entrar al menú de navegació, canviarem el seu estil de backgroundColor= White
// b) Al sortir del menú de navegació, tornarem a deixar l'estil inicial (backgroundColor=transparent )

console.log("---mouseenter, mouseout---");
let nav = document.querySelector(".navegacion"); //si es fa servir byClassName cal posar posició
nav.addEventListener("mouseenter", mouseenter);
nav.addEventListener("mouseout", backChangeMain);
console.log(nav);

function mouseenter() {
    // let back = document.createElement("style");
    nav.style.backgroundColor = "white";
    // nav.appendChild(back);
}

function backChangeMain() {
    nav.style.backgroundColor = "transparent"; //o amb removeChild o nav.style = "none"
    window.alert("entra a backChangeMain");
}
