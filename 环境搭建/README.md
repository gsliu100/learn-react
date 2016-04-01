###首先来看一下项目的目录结构（这里只是一个简单实验）

* js文件目录下存放我们使用JSX语法编写的React组件
* bulid目录下是经过编译后的React组件
* index.html为展示页

###一，直接在浏览器端编译JSX语法

1. 需要在HTML head文件引入引入如下的script文件
```javascript
<script src='react.js'></script>//React核心文件，提供React.createClass()方法
<script src="react-dom.js"></script>//ReactDom文件，提供ReactDom.render()方法
```

2. 引入browser.js文件
`browser.min.js` 是[`babel`](https://babeljs.io/)提供的能将JSX语法转换为js的插件 。
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```

3. 之后就是引入自己写的React组件所在的js文件，在这里文件名为`myComponent.js`。
```javascript
<script src="js/myComponent" type="text/babel"></script>
```
其中的type值需要设为"text/babel"以便browsers对其编译。

`需要注意的是在浏览器端编译JSX语法的方式，需要将整个项目放在服务器中运行，不能直接在浏览器中打开index.html,在chrome中会有跨域访问的安全错误`

###二，将JSX语法的组件预先编译，在浏览器端直接引入编译后的js文件即可(本例采用这种方式)

需要用到`npm`包管理器，请安装`nodejs`

1. 首先安装`babel-cli`模块（[babel的使用](https://babeljs.io/)）
`npm install -g babel-cli//全局安装babel命令行工具`

2. 安装`babel-preset-react`模块
`npm install babel-preset-react//在项目下安装即可，该模块用于编译JSX语法`

3. 如果使用js6编写react组件，还需要安装babel-preset-es2015模块用于将es2015转换为es5
`npm install babel-preset-es2015`

4. 之后开始编译用JSX语法写好的React组件（这里没有用es2015）
`babel --presets react src --watch --out-dir dir`
其中src为需要编译的js文件这里文件名为js/myComponent.js,dir为编译后文件的输出目录这里为build,设置--watch用于监视myComponent.js文件,当文件发生变化是会自动编译输出（babel使用）
`示例： babel --presets react js/myComponent.js --watch --out-dir bulid`

5. 将编译好的js文件像引入普通的js文件一样引入index.html即可
```javascript
<script src="bulid/myComponent"></script>
```








