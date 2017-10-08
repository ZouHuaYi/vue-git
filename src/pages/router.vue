<template>
	<div class="container">
		<h3>这里是router的主要部分</h3>
		<ul class="ul-li">
			<li v-for="item in list" @click="showName(item);routes(item)">{{item}}</li>
		</ul>
		<transition name="route-out">
			<router-view class='p-name'></router-view>
		</transition>
	</div>
</template>
<script type="text/javascript">

	export default{
		data(){
			return{
				list:['one','two','three','four','fire'],
				name:''
			}
		},
		methods:{
			showName(val){
				this.name=val
			},
			routes(val){
				let rt='/router/'+val+'/one'
				this.$router.push(rt)
			}
		},
		beforeRouteEnter (to, from, next) {
			console.log(to.path)
    		next()
        },
	}
</script>
<style type="text/css" scoped>
	.ul-li{height: 50px;}
	.ul-li li{float: left;padding: 10px;margin-left: 10px;border: 1px solid red}
	.p-name{background: #ccc;height: 100px;}
.route-out-enter-active,
.route-out-leave-active,
.route-in-enter-active,
.route-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
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
