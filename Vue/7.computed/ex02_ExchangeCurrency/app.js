const vm = new Vue({
  el: "#databinding",
  data: {
    name: "marta",
    currencyfrom: [{
        name: "USD",
        desc: "US Dollar"
      },
      {
        name: "EUR",
        desc: "Euro"
      },
      {
        name: "INR",
        desc: "Indian Rupee"
      },
      {
        name: "BHD",
        desc: "Bahraini Dinar"
      },
    ],
    convertfrom: "INR", //inicialitzar variable a INR
    to: "USD", //inicialitzar variable to a USD
    amount: 0,
  },
  computed: {
    convertTo: function () {
      var to = this.to;
      var from = this.convertfrom;
      var result;
      switch (from) {
        case "INR":
          switch (to) {
            case "USD":
              result = this.amount * 0.014;
              break;
            case "EUR":
              result = this.amount * 0.013;
              break;
            case "BHD":
              result = this.amount * 0.0037;
              break;
          }

          case "USD":
            switch (to) {
              case "INR":
                result = this.amount * 74.5;
                break;
              case "EUR":
                result = this.amount * 0.91;
                break;
              case "BHD":
                result = this.amount * 0.37;
                break;
            }

            case "EUR":
              switch (to) {
                case "INR":
                  result = this.amount * 74.5;
                  break;
                case "USD":
                  result = this.amount * 1.35;
                  break;
                case "BHD":
                  result = this.amount * 0.37;
                  break;
              }
              case "BHD":
                switch (to) {
                  case "INR":
                    result = this.amount * 74.5;
                    break;
                  case "USD":
                    result = this.amount * 1.35;
                    break;
                  case "EUR":
                    result = this.amount * 0.91;
                    break;
                }
      }
      return result;
    }
  }
},
);