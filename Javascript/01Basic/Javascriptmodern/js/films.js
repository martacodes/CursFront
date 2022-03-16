//funció getAllDirectors();
// Ajuda: hauràs d'implementar un map que recorri tot l'array de pel·lícules, extraient
// només el camp director de cadascuna (no oblidis que cada pel·lícula és un objecte, que
// conté el camp que ens interessa "director").

function getAllDirectors(array) {
  let result = movies.map(function director(movie) {
    return movie.director; //tot el que surti al map es quedarà al return. són 2 funcions.
  });
  console.table(result);
}

// Una altra funcionalitat necessària és mostrar les pel·lícules per a un determinat director/ora.
// Per a això, hauràs de crear una funció getPelisFromDirector().
// Aquesta funció ha de rebre com a paràmetre el/la director/ora per al qual es volen buscar
// les seves pel·lícules, i retorna l'array de pel·lícules que ha dirigit.
function getPelisFromDirector(element) {
  const pelis = movies.filter(function (film) {
    return film.director === element;
  });
  return pelis;
}

//3. dins del reduce s'han de fer calculs. reduce parametre per inicialitzar a 0. //obligatori
// Per a tenir més informació d'aquest director, es demana calcular la mitjana de les
// puntuacions de les seves pel·lícules.
// Per a això, hauràs d'implementar la funció pelisAverage(), la qual rep un array de pel·lícules
// i retorna la nota mitjana, amb dos decimals.
//
function pelisAverage(director) {
  const pelis = movies.filter(function (film) {
    return film.director === director;
  });
  console.log(pelis);
  const scores = pelis.reduce(function (comptador, film) {//funciona com un foreach i compta cada valor de cada peli)
    return comptador + film.score;
  },0);
  console.log(scores);
  const average1 = (scores / pelis.length);
  console.log(average1);
  return average1;
}

// //4. Ara implementaràs la lògica per a ordenar les pel·lícules, part fonamental en qualsevol eina
// de visualització de dades.
// En aquest apartat, hauràs de crear una funció, que rebent un array de pel·lícules, el retorni
// ordenat alfabèticament per títol. Només s'han de retornar les 20 primeres pel·lícules
// ordenades..
//és fa amb el sort. primer ordenar alfabeticament i posteriorment no.
function sortAl(movie1, movie2) {
const ordre = movies.sort(movie1,movie2)
return movie1 - movie2};

