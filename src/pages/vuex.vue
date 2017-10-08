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
				this.$store.setMessageAction('change data not the hello')
			},
			clearData(){
				this.$store.clearMessageAction()
			}
		},
		created(){
			console.log(this.$root.$data);
			console.log(this.$store)
		}
	}
</script>
<style type="text/css" scoped>
	input{display: block;width: 80%;height: 60px;border: none;background: #09BB07;color: #fff;font-size: 20px;margin: 20px auto;}
</style>