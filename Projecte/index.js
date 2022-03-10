function buy(id) {
   for (let i = 0; i < products.length; i++) {
       const element = products[i];
       if(element.id === id){
           cart.push(element)
       }
   }
};