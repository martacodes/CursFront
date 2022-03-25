// 2. Donada la següent promesa.
// Crida a la promesa aplicarDescuento.
// Recordar capturar l’error dins de la promesa: 'No se pudo aplicar el descuento'
function calculDescuento() {
  console.log("Aplicando el Descuento...");
  return true;
}
const aplicarDescuento = new Promise((resolve, reject) => {
  if (calculDescuento()) {
    resolve("Descuento Aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});
//en aquest cas la promesa no té cap valor que li has de posar.
aplicarDescuento //per cridar promeses no es posa cap valor entre parentesis. 
  .then(function (result) {
    console.log("funciona " + result);
  })
  .catch(function (error) {
    console.log("hi ha un error");
  });
