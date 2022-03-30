// //EXEMPLE EN PROMESA --> passar a async, await.
// const calcula = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const sum = 4 + 5 + 6;
//     if (isNaN(sum)) {
//       reject("Error while calculating sum.");
//     } else {
//       resolve(sum);
//     }
//   }, 2000);
// });

// calcula
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// async function calcul() {
//   setTimeout(function () {
//     const sum = 4 + 5 + 6;
//     if (isNaN(sum)) {
//         console.log('Error while calculating sum.');
//         } else {
//         console.log(sum);
//     }
//   }, 2000);
// }

// async function inici() {
//   await calcul();
//   console.log("s'inicia la funció");
// }

// inici();
// console.log("funció acabada");

async function calcular() {
    new Promise (function(resolve, reject) {
        setTimeout(function () {
                const sum = 4 + 5 + 6;
                if (isNaN(sum)) {
                    console.log('Error while calculating sum.');
                    } else {
                    console.log(sum);
                }
              }, 2000);
            });
    };

async function iniciar() {
    await calcular();
    console.log("funció await + promise");
};

iniciar()
console.log("última funció");