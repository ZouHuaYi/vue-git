import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/vuestore'

Vue.config.productionTip = false;
//通过这样绑定到Vue的原型上面，在组件中通过事件触发来实现数据的更变
//参考store/vuestore.js来书写数据的格式
Vue.prototype.$store=store;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  //这个data的数据就是全局的了。
  data: {
    privateState: {},
    sharedState: store.state
  }
})
