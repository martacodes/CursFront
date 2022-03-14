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
    const result = movies.filter(function(film){
        return film.director === element;
    })
    return result;}

    //3. dins del reduce s'han de fer calculs. reduce parametre per inicialitzar a 0. //obligatori