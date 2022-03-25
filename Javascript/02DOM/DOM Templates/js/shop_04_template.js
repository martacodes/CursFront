const cards = document.getElementById('cards') //el lloc on aniran els elements nous
const templateCard = document.getElementById("template-card").content; //lloc d'on agafa el template
const fragment = document.createDocumentFragment()// el fragment auxiliar de suport

function pintarCardsProducts() { //funcio que es cridarà quan es carregui la pàgina
    products.forEach(item => {
        templateCard.querySelector(".cardProduct").setAttribute("id", "card" + item.id); //
        templateCard.querySelector("ul .cardAdd").setAttribute("data-id", item.id);
        templateCard.querySelector("ul .cardRemove").setAttribute("data-id", item.id);

    })

    
}