<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 class="h1">Vue.js</h1>
    <h2>{{$root.$data.sharedState.direction}}</h2>
    <router-link to='/vuex'>vuex</router-link>
    <router-link to='/trans'>transition</router-link>
    <router-link to='/render'>render</router-link>
    <router-link to='/router/one/one'>router</router-link>
    <router-link to='/object'>object</router-link>
     <router-link to='/vuexload'>vuexload</router-link>
    <transition :name="'route-'+$root.$data.sharedState.direction">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
     
    }
  },
  created(){
    
  }
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
  position: relative;
}
.h1{border-bottom: 2px solid red}
.route-out-enter-active,
.route-out-leave-active,
.route-in-enter-active,
.route-in-leave-active {
  will-change: transform;
  transition: all 1000ms;
  height: 100%;
  top: 270px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.route-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.route-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.route-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.route-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
