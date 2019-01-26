这是前端文件夹

#############################


更新了一下加入了release小模块


目前前端遇到的问题是怎么办可以一直横向扩展？考虑是加入另一个gridlayout（没办法上了贼船了，先回家再说）


release 的解决方法考虑是放入layout中和card 区分开，依旧放入到同一个layout中，然后根据属性分开。





## 问题解决（1.19）

### 1.解决：Invalid character found in method name. HTTP method names must be tokens
 
	1.1 前端config 配置 target 网址 

	2.1 tomcat serve 增加maxHttpHeaderSize字段 8192

	3.1 https和http 要统一
 
### 2.Required String parameter 'newMapDesc' is not present
 
  	2.1.参数要匹配


### 3.前后端 传递数组通过JSON 的方式进行传递

	3.1 前端config index.js 要配置target 网址  通过url的方式进行数据传递
  	3.2 前端要用到axios 和qs包 （注 qs.stringfy()里边要加{}）
    3.3 后端还需要跨域配置 不知道有没有有用  先加上再说假如不好使的话
	
	@Configuration
	public class CORSConfig implements WebMvcConfigurer {
	    @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**")
	                .allowedOrigins(ALL)
	                .allowedMethods(ALL)
	                .allowedHeaders(ALL)
	                .allowCredentials(true);
	    }
	}
### 4.解决前端的颜色可以单独变化 同时把card 数组具体化，里边包括card 的基本上所有信息

### 5.目前前端还有的问题是： 横向拓展、release 、以及卡片的位置选择问题

## 问题解决（1.26）

### 1.Failed to mount component: template or render function not defined.
	1.1 http://www.jianshu.com/p/4d61f71de95a
    router 文件 中 component 和components  的问题
	
### 2.Uncaught (in promise) TypeError: Cannot read property 'protocol' of undefined
	2.1 https://blog.csdn.net/weixin_42470791/article/details/82936957
    ok 到这部错误是全部都消除了，但是页面没东西。。。。。
### 3 ok 最后找见bug 了 
    3.1
 	import showmap from '../components/showmap'  
    import showmap from '../components/showmap.vue'
    默认import js 文件 需要加上.vue 表示很呵呵，浪费了不少时间 
### 4 关于this.$axios 中作用域问题
   	 可以增加这句话 let that = this 来解决
### 5 关于vue 数组和jsonarray 之间的转化问题

### 6 连接数据库
    navicat 输入 连接的IP 端口号3306 以及用户名和密码 
### 7 vue 页面跳转传参数的小坑
    router.push() 里边 把path 换成name 就传成功了 
	
	即：{name:'页面的名字'，params：{参数名：参数值}}
    
	获取页面通过 router.params.参数名就可以获取了 
### 8 考虑页面回退缓存问题 以及好多细节问题 ，对页面进行美化
	 
      

