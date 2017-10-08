<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="h1">Vue.js</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body,h1,h2,h3,p,ul,li{margin: 0px;padding: 0px;}
body{font-size: 20px}
li{list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.h1{border-bottom: 2px solid red}
</style>
