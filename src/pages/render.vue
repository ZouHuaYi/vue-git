<template>
	<div class="container">
		<h2 class="h2">Here is vue better template function render</h2>
		<box-render :level=3 >这是使用render函数渲染出来的h1标签</box-render>
		<ul-li :items="list"></ul-li>
		<mode-input @input="abs"></mode-input>
		<p>{{value}}</p>
	</div>
</template>

<script type="text/javascript">
import Vue from 'vue'	
	export default{
		components:{},
		data(){
			return{
				list:['one','two','three'],
				value:''	
			}
		},
		created(){
			
		},
		methods:{
			abs(val){
				this.value=val
			}
		}
	}

//这里渲染的是一个简单的h1-h6标签
	Vue.component('box-render',{
		render:function(createElement){
			return createElement(
				'h' + this.level,   // tag name 标签名称
	            {
					"class":"bar",
					"style":{
						backgroundColor:"#f00"
				    },
				    "on":{
				    	//事件
				    }
	            },
	            [
	            //这是子node的创建方法和参数传递的地方
					createElement('a', {
			          attrs: {
			            name: "headingId",
			            href: 'www.baidu.com'
			          }
			        }, this.$slots.default)
			     //  this.$slots.default 这是使用插槽的方式来显示文本节点 
			     //  也可以直接书写文字来实现我们的写法
	            ]
			)
		},
		props:{
			level:{
				type:Number,
				required: true
			}
		},
	});
//在render里面是不能使用v-if或v-for
Vue.component('ul-li',{
	render:function(createElement){
		if (this.items.length) {
		    return createElement('ul', this.items.map(function (item) {
		      return createElement('li', item)
		     }))
		    } else {
		     return createElement('p', 'No items found.')
		  }
		},
		props:{
			items:{
				type:Array,
				required: true
			}
    	}
})
//在render里面使用v-mode的约束
Vue.component('mode-input',{
  render: function (createElement) {
  var self = this;
  return createElement('input', {
    domProps: {
      value: self.value
    },
    on: {
      input: function (event) {
        self.value = event.target.value
        self.$emit('input', event.target.value)
      }
    },
  	style:{
    	height:"60px",
    	width:"100%",
    	"border":"2px solid red",
    	"fontSize":"30px"
    }
  })
  }
})
/**
注意这种组件的书写格式：
createElement('tag',{属性，事件，等等},[这里的是子node])
最后的一个参数是文字节点，可以写成 this.$slots.default默认插槽文字
render函数里面可以书写很多的js代码实现强大的效果，虽然没有template这么灵活但是却非常的灵活
如果要用渲染函数向子组件中传递作用域插槽，可以利用 VNode 数据中的 scopedSlots
.passive、.capture 和 .once事件修饰符
**/
</script>
<style type="text/css" scoped>
	.h2{border-bottom: 2px solid #ccc;padding-bottom: 20px;}
</style>