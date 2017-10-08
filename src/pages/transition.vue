<template>
	<div id="animated-number-demo">
  	<input v-model.number="number" type="number" step="20" max="50" min="-50">
    <p>{{ animatedNumber }}</p>
    <p><label>Sides: {{ sides }}</label></p>
    <input id="abs" type="range"  min="0"  max="500"  v-model.number="sides">
	<div id="demo">
		<button @click="show=!show">Toggle</button>
		<transition name="fade" :duration="{ enter: 500, leave: 800 }">
			<p v-if="show">Hello World</p>
		</transition>
		<p>transition提供了强大的javascript的构子函数@before-enter,enter等8个构子函数</p>
		<p>绑定了8个类名的存在，在css中设置对应的值</p>
		<p>其实过渡状态就是两个帧，是enter和leave两个状态的存在{v-enter,v-enter-active,v-enter-to（结束了的状态）,leave---也是一样的}</p>
	</div>
	<div>
		<button @click="shuffle">shuffle</button>
		<transition-group name="flip" tag="ul">
			<li v-for="item in list" :key="item">{{item}}</li>
		</transition-group>
	</div>
</div>
</template>
<script type="text/javascript">
var TWEEN = require('@tweenjs/tween.js');
var _ = require('lodash');
	export default{
		data(){
			return{
				animatedNumber:0,
				number:0,
				sides:0,
				show:true,
				list:[1,2,3,4,5,6,7,8,9,10]
			}
		},
		methods:{
			shuffle: function () {
            this.list = _.shuffle(this.list)
          }
		},
		watch:{
			//数字过渡的，tweenjs是平滑过渡的小插件
			number: function(newValue, oldValue) {
			    var vm = this
			    function animate () {
			        if (TWEEN.update()) {
			          requestAnimationFrame(animate)
			        }
			    }
			    new TWEEN.Tween({ tweeningNumber: oldValue })
			        .easing(TWEEN.Easing.Quadratic.Out)
			        .to({ tweeningNumber: newValue }, 500)
			        .onUpdate(function () {
			        	vm.animatedNumber = this._object.tweeningNumber.toFixed(0)
			        })
			        .start()
			    animate()
		    }
		}
	}
</script>
<style type="text/css" scoped>
/*这是input 的range样式的修改是非常好使用的东西*/
input[type="range"] {
        outline: none;
    -webkit-box-shadow: 0 1px 0 0px #424242, 0 1px 0 #060607 inset, 0px 2px 10px 0px black inset, 1px 0px 2px rgba(0, 0, 0, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;
    margin-top: 2px;
    background-color: #272728;
    border-radius: 15px;
    width: 90%;
    -webkit-appearance: none;
    height:10px;
}
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: default;
    top: -5px;
    height: 30px;
    width: 20px;
    transform: translateY(-4px);
    background: none repeat scroll 0 0 #777;
    border-radius: 15px;
    -webkit-box-shadow: 0 -1px 1px black inset;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.flip-move {
  transition: transform 1s;
}
</style>