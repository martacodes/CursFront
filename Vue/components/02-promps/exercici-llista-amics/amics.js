//component
Vue.component("user-details", {
  template: `    <span>
  <h2>{{name}}</h2>
  <button @click="toggleMostrar">Show Details</button>
  <ul v-show="mostrar">
    <li><strong>Phone:</strong>{{tel}}</li>
    <li><strong>Email:</strong>{{email}}</li>
  </ul>
</span>`,
  data() {
    return {
      mostrar: true,
    };
  },
  methods: {
    toggleMostrar: function () {
      this.mostrar = !this.mostrar;
    },
  },
  props: ["name", "tel", "email"],
});
