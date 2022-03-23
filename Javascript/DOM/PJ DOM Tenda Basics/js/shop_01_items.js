let card1 = document.getElementById("card1");
let idCard1 = card1.getAttribute("data-id");
console.log(idCard1);

card1.addEventListener("click", (e) => {
  if (e.target.classList.contains("cardAdd")) {
    alert("s'ha afegit al carro ");
    addToCart(idCard1);
  }
  if (e.target.classList.contains("cardRemove")) {
    alert("s'ha eliminar del carro ");
    removeFromCart(idCard1);
  }
});

let card2 = document.getElementById("card2");
let idCard2 = card2.getAttribute("data-id");

card2.addEventListener("click", (e) => {
  if (e.target.classList.contains("cardAdd")) {
    alert("s'ha afegit al carro ");
    addToCart(idCard2);
  }
  if (e.target.classList.contains("cardRemove")) {
    alert("s'ha eliminar del carro ");
    removeFromCart(idCard2);
  }
});

let card3 = document.getElementById("card3");
let idCard3 = card3.getAttribute("data-id");

card3.addEventListener("click", (e) => {
  if (e.target.classList.contains("cardAdd")) {
    addToCart(idCard3);
  }
  if (e.target.classList.contains("cardRemove")) {
    removeFromCart(idCard3);
  }
});

function addToCart(id) {
  alert("add to cart");
}

function removeFromCart(id) {
  alert("remove to cart");
}
