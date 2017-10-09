import Vuex from 'vuex'
import vue from 'vue'

vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		mapState:'how to use mapState',
		mapAction:'how to use mapAction',
		getter: 10,
		payload:0,
		action:100
	},
	//这个方法必须是同步函数，不能存在回调函数，或者异步函数，应为这样数据是不可追踪的。
	mutations: {
		increment (state){
			state.count++
		},
		cgetter(state){
			state.getter++
		},
		newpay (state,n){
			state.payload+=n
		},
		asyaction (state,n){
			state.action+=n
		}
	},
	actions: {
		changeActions(state,n) {
			return new Promise((resolve, reject) => {
			setTimeout(()=>{
				state.commit('asyaction',n);
				//代表这个装态执行完毕
				 resolve();
			},1000)
		 })
		}
	},
	getters: {
		changeGetter:state=>{
			return state.getter*10
		}
	}
})