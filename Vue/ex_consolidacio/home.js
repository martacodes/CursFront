Vue.component("home", {
  template: `<escena>
  <p> “Así es cómo se gana una guerra. No luchando contra lo que odias, sino salvando lo que
  amas”, Roste Tico. </p>
  <h2>{{frases}}</h2>
  </escena>`,
  data() {
    return {
      frases: [
        {
          frase: `“Así es cómo se gana una guerra. No luchando contra lo que odias, sino salvando lo
        que amas”, Roste Tico.`,
        },
        {
          frase: `“¿Quién es más loco: el loco o el loco que sigue al loco?”, Obi-Wan.`,
        },
        {
          frase: `“La guerra no lo hace a uno más grandioso”, Yoda a Luke Skywalker.`,
        },
        {
          frase: `“Concéntrate en el momento. Siente, no pienses, usa tu instinto”, Qui-Gon Jinn a
Anakin Skywalker.`,
        },
        {
          frase: `“El miedo es el camino hacia el Lado Oscuro. El miedo lleva a la ira, la ira lleva al
odio, el odio lleva al sufrimiento. Percibo mucho miedo en ti”, Maestro Yoda.`,
        },
        {
          frase: `“No. No lo intentes. Hazlo, o no lo hagas, pero no lo intentes”, Maestro Yoda.`,
        },
      ],
    };
  },
});
