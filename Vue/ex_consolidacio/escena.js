Vue.component("escena", {
  template: `<p> “Así es cómo se gana una guerra. No luchando contra lo que odias, sino salvando lo que
    amas”, Roste Tico. </p>
    <h2>{{frases}}</h2>`,
  props: {
    frases: Array
  },
});
