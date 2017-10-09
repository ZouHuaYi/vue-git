<template>
	<div class="test-object">
		<h1>test-object</h1>
		<h2 >{{abs.b}}</h2>
		<button @click="change">add</button>
		<p v-for="item in list">{{item}}</p>
		<button @click="del">delete</button>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				list:{'a':'one','b':'two','c':'three','d':'four','e':'fire'}
			}
		},
		created(){
			//这里是不允许动态的添加响应式的数据在对象里面；
			//方法就是在data里面的设置对应的值来实现对应的效果
			this.abs={"b":"oldValue"}
		},
		methods:{
			change(){
				//这里使用的是Object.assign()的方法动态的添加对应的值
				this.list = Object.assign({}, this.list, { 'h':'newValue' })
				//通过使用this.$set可以响应式的改变这个，这里使用的是对象
				//这里就实现了动态的添加对应的值
				this.$set(this.abs,'b','has change new all data');
			},
			del(){
				//删除对象的时候响应式的删除数据的方法
				this.$delete(this.list,'a')
			}
		}
	}
</script>