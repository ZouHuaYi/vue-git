import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/vuestore'
import vuex from './store/vuexdata'

Vue.config.productionTip = false;
//通过这样绑定到Vue的原型上面，在组件中通过事件触发来实现数据的更变
//参考store/vuestore.js来书写数据的格式
Vue.prototype.$stores=store;

/* eslint-disable no-new */
const history = window.sessionStorage

history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach((to,from,next)=>{
	const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)

    if(toIndex){
    	if(!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')){
    		store.directionAction ('in');
    	}else{
    		store.directionAction ('out');
    	}
    }else {
    	++historyCount
    	history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
    	store.directionAction ('in');
    }
    if (/\/http/.test(to.path)) {
	    let url = to.path.split('http')[1]
	    window.location.href = `http${url}`
	} else {
	    next()
	}

})

new Vue({
  el: '#app',
  router,
  store:vuex,
  template: '<App/>',
  components: { App },
  //这个data的数据就是全局的了。
  data: {
    privateState: {},
    sharedState: store.state
  }
})
