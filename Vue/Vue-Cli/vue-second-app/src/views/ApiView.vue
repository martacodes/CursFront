<template>
  <div>
    <header-api />
    bon dia
 <section v-if="errored">
<p>
Lo sentimos, no es posible obtener la información en este momento, por
favor intente nuevamente mas tarde
</p>
</section>
<section v-else>
    <div>
      <ul>
        <li v-for="item in acudits" :key="item.id">{{ item.value }}</li>
      </ul>
    </div>
    <footer-api></footer-api>
  </section>
  </div>
</template>

<script>
import HeaderApi from "@/components/HeaderApi.vue";
import FooterApi from "@/components/FooterApi.vue";
import axios from "axios";

export default {
  name: "ApiView",
  components: {
    HeaderApi,
    FooterApi,
  },
  data() {
    return {
      post: null,
      acudits: [],
      errored: false,
    };
  },
  mounted() {
    console.log("entra");
    axios
      .get("https://api.chucknorris.io/jokes/search?query=cheese")
      .then((response) => {
        this.acudits = response.data.result;
      })
      .catch((error) => {
        this.errored = true;
        if (error.response) {
          console.log("El servidor respon amb missatge d'error");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("El servidor NO respon");
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("hi ha algun problema amb la request");
          console.log("Error", error.message);
        }
        console.log("Hi ha hagut un error en la configuració");
        console.log(error.config);
      });
  },
};
</script>

<style scoped>
section {
    background-color: aquamarine;
    border-radius: 25px;
}
</style>
