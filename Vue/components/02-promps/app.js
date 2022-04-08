const app = new Vue({
  el: "#my-app",
  data: {
    name: "Hola classe, això és un exemple de COMPONENT",
    count: 0,
    benvinguda: "",
    firstname: "Marta",
    lastname: "Farré"
  },
  methods: {
    onAdd() {
      this.count += 1;
    },
  },
  props: ["first","last"]
});
