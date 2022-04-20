<template>
  <img alt="analog photograhy" src="./assets/img1.jpg" style="width: 600px">
  <HelloWorld msg="Marta Farré"/>
  <first-component />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import firstComponent from './components/firstComp.vue'

export default {
  name: 'App',
  components: {
   //HelloWorld
    firstComponent
  }
}
</script>

<style>
#app {
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
