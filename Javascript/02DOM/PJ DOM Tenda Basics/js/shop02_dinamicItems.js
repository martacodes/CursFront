document.querySelectorAll(".cardProduct").forEach((element) => {
  element.addEventListener("click", (event) => {
    let dataId = element.getAttribute("data-id");
    {
      if (event.target.classList.contains("cardAdd")) {
        addToCart(dataId);
        console.log("s'ha afegit a la cistella " + dataId);
      }
      if (event.target.classList.contains("cardRemove")) {
        removeFromCart(dataId);
        console.log("s'ha tret de la cistella " + dataId);
      }
    }
  });
});

function addToCart(id) {
  alert("add to cart");
}

function removeFromCart(id) {
  alert("remove to cart");
}
