//1

function buy(id) {
  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    if (element.id === id) {
      cart.push(element);
    }
  }
}
//també es pot fer amb un find.
/* 
productBuy */

//2
function cleanCart() {
  cart.splice(0, cart.length);
  return cart;
}
//més eficient sense res més.
//carList.length = 0

function subtotal2() {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].type === "grocery") {
      subtotal.grocery.value += cart[i].price; //+ subtotal.grocery.value;
    }
    if (cart[i].type === "beauty") {
      subtotal.beauty.value += cart[i].price; // subtotal.beauty.value;
    }
    if (cart[i].type === "clothes") {
      subtotal.clothes.value += cart[i].price; //+ subtotal.clothes.value;
    }
  }
  return subtotal;
  //console.table(subtotal)
}

function calculateTotal() {
  for (let i = 0; i < subtotal.length; i++) {
    totalGrocery = subtotal.grocery.value + total;
  }
  return total;
}
