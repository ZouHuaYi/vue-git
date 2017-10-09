<template>
	<div class="contaniner">
		<h2>vuex study</h2>
		<p>父级的数据：{{$root.$data.sharedState.message}}</p>
		<input type="button" value="点击改变数据了" @click="changeData">
		<input type="button" value="点击清空数据了" @click="clearData">
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{
			changeData(){
				this.$stores.setMessageAction('change data not the hello')
			},
			clearData(){
				this.$stores.clearMessageAction()
			}
		},
		created(){
			console.log(this.$root.$data);
			console.log(this.$stores)
		}
	}
</script>
<style type="text/css" scoped>
	input{display: block;width: 80%;height: 60px;border: none;background: #2D892C;color: #480A0A;font-size: 20px;margin: 20px auto;}
</style>