<template>
  <div>
    <BonDia msg="ningú ho ha demanat" />
    <h2>Acudit del dia</h2>
{{ acudit }}
  </div>
</template>

<script>
import axios from "axios";
import BonDia from "../components/BonDia.vue";

export default {
  name: "AboutView",
  components: {
    BonDia,
  },
  data() {
    return {
      post:null,
      acudit: ""
    };
  },
  mounted() {
    console.log("entra");
    axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((response) => (this.acudit= response.data.value))
  },
};
</script>