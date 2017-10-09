<template>
	<div class="vuex">
		<h1>vuex-new-load</h1>
		<p>{{count}}</p>
		<p>{{done}}</p>
		<button @click="add">click change</button>
		<p>{{mapState}}</p>
		<p>{{mapAction}}</p>
		<p>{{changeGetter}}</p>
		<button @click="adds">click change</button>
		<p>{{payload}}</p>
		<button @click="addpay">click change</button>
		<br/>
		<br/>
		<p>{{action}}</p>
		<button @click="addaction">click action</button>
	</div>
</template>
<script type="text/javascript">
import {mapState,mapAction,mapGetters} from 'vuex'
	export default{
		data(){
			return{

			}
		},
		computed:{
			...mapState({
				count: state=>state.count,
				mapState: state=>state.mapState,
				mapAction: state=>state.mapAction,
				payload: state=>state.payload,
				action: state=>state.action,
			}),
			...mapGetters({
				'changeGetter':'changeGetter'
			}),
			done:function(){
				return this.count*100
			}
		},
		created(){
			console.log(this)
		},
		methods:{
			add(){
				//再次强调，我们通过提交 mutation 的方式，而非直接改变 store.state.count
				this.$store.commit('increment')
			},
			adds(){
				//这个getters在做过滤查找一些东西的时候是非常的好用的。
				//不用每个组件都要使用computed这个计算属性来书写
				this.$store.commit('cgetter')
			},
			addpay(){
				this.$store.commit('newpay',20)
			},
			addaction(){
				this.$store.dispatch("changeActions",10).then(()=>{
					alert("完成了兄弟们promise")
				})
			}
		}
	}
</script>