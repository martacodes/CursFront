Vue.component("blog-post", {
  props: ["post"],
  data: function () {
    return {
      valor: 1,
    };
  },
  template: `
    <div class="blog-post">
    <h3>{{ post.title }}</h3>
    Valor del text <input v-model="valor">
    <button v-on:click="$emit('enlarge-text', valor)"> Agrandar texto </button> <!--quan es fa clic, es produex l'emit-->
    <button v-on:click="enviarPadre()"> Agrandar texto </button> <!--quan es fa clic, es produex l'emit-->
    </div>
    `,
  methods: {
    enviarPadre: function () {
      this.$emit("enlarge-text", this.valor);
    },
  },
});
