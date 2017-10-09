<template>
	<div class="container">
		<h3>这里是router的主要部分</h3>
		<ul class="ul-li">
			<li v-for="item in list" @click="showName(item);routes(item)">{{item}}</li>
		</ul>
		<router-view class='p-name'></router-view>	
	</div>
</template>
<script type="text/javascript">

	export default{
		data(){
			return{
				list:['one','two','three','four','fire'],
				name:'',
				direction: ''
			}
		},
		methods:{
			showName(val){
				this.name=val
			},
			routes(val){
				let rt='/router/'+val+'/one'
				this.$router.push(rt);
				this.show=!this.show
			}
		},
		created(){
			this.direction=this.$root.sharedState.direction
		}
	}
</script>
<style type="text/css" scoped>
.ul-li{height: 50px;}
.ul-li li{float: left;padding: 10px;margin-left: 10px;border: 1px solid red}
.p-name{background: #ccc;height: 100px;}
</style>
