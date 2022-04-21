<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img1.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  padding: 50px 100px 50px 100px;
  text-align: center;
  align-content: center;
  background-color: #FFDBD7;
}
img {
  width: 25%;
  height: 25%;
}
</style>