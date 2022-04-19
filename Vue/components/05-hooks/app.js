let vm = new Vue({
  el: "#app",
  data: {
    message: "hola",
  },
  mounted() {
    console.log("El component s'ha muntat");
    let fondodiv = this.$refs.fonsdiv;
    console.log(fondodiv);
    (fondodiv.style.backgroundImage =
      "url('http://aran.hostaler.org/wp-content/uploads/sites/5/fons-verd.gif')"),
      (fondodiv.style.height = "500px"),
      (fondodiv.style.backgroundRepeat = "no-repeat");

      console.log(document.body);
    let body = document.body;
    (body.style.backgroundImage =
      "url('https://metode.cat/wp-content/uploads/2013/05/80-46-subs%C3%B2l.jpg')"),
      (body.style.height = "1000px"),
      (body.style.backgroundRepeat = "no-repeat");
  },
});
