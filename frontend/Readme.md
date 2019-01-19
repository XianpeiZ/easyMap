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

