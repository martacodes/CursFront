<template>
  <nav>
    <router-link to="/">✦</router-link> |
    <router-link to="/about">qui soc?</router-link> |
    <router-link to="/web">altres</router-link> |
    <router-link to="/contact">contacte</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4A4A4A;
  padding: 0px 100px 0px 100px;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #4A4A4A;
}

nav a.router-link-exact-active {
  color: #FF8071;
}

</style>
