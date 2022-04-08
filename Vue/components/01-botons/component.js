Vue.component ("my-button", {
    template: `<div><button @click="onAdd2">botó component {{count}}</button></div>`,
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      onAdd2() {
        this.count += 1;
      },
    },
  });

  Vue.component ("compon", {
    template: `<div>{{message}}</div>`,
    data(){
      return {
        message: "bon dia a la vila del pingüí",
      }
    }
  })