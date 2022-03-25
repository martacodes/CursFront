// Exercici 9: Crear una Nova card
// Amb appendChild crearem una nova card, amb el següent contingut html:
// <div class="card">
//      <img src="img/hacer2.jpg">
//      <div class="info">
//          <p class="categoria concierto">concierto</p>
//          <p class="titulo">Concierto de Rock</p>
//          <p class="precio">$800 por persona</p>
//      </div>
// </div>

//un és el pare (div) i els altres 2 els fills i un altre div un altre pare.

//primer div.
var novaCardDiv = document.createElement("card");
novaCardDiv.classList.add = "card";

//imatge
var imgDiv = document.createElement("img");
imgDiv.src = "img/hacer2.jpg";

//segon div.
var novaInfoDiv = document.createElement("div");
novaInfoDiv.classList.add = "info";

//p1
var p1 = document.createElement("p");
p1.classList.add = "categoria";
p1.classList.add = "concierto";
p1.textContent = "Concierto";

//p2
var p2 = document.createElement("p");
p2.classList.add = "titulo";
p2.textContent = "Concierto de Rock";

//p3
var p3 = document.createElement("p");
p3.classList.add = "precio";
p3.textContent = "$800 por persona";

var contenedor = document.getElementsByClassName("contenedor-cards")[0]; //lloc on pujarà tota la card (parar atenció)
console.log(contenedor);
novaInfoDiv.appendChild(p1);
novaInfoDiv.appendChild(p2);
novaInfoDiv.appendChild(p3);
novaCardDiv.appendChild(imgDiv);
novaCardDiv.appendChild(novaInfoDiv);
contenedor.appendChild(novaCardDiv);



