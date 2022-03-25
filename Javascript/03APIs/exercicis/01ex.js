// 1. Donada la següent promesa.
// const paises = [];
// const nuevoPais = pais => new Promise( resolve => {
// setTimeout(() => {
// paises.push(pais);
// resolve(`Agregado: ${pais}`)
// }, 3000);
// });
// Fent servir promeses, agrega cada 3 segons un país: Alemania, Francia, Inglaterra,
// Italia. Capturar errors no controlats.

const paises = [];
const nuevoPais = pais => new Promise( resolve => {
setTimeout(() => {
paises.push(pais);
resolve(`Agregado: ${pais}`)
}, 3000);
});

nuevoPais("Alemania").then(function(result){
    console.log(result);
    return(nuevoPais("Francia"));
}).then(function(result) {
    console.log(result);
    return(nuevoPais("Inglaterra"))
}).then(function(result) {
    console.log(result);
    return(nuevoPais("Italia"))
})
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
});

// nuevoPais("Francia").then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });

// nuevoPais("Inglaterra").then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });

// nuevoPais("Italia").then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });

//la idea que el resultat d'un condicionés el següent, és a dir, que sortís un després de l'altre.