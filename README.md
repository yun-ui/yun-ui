#YunUI 前端技术大纲 v1.0
##版本：v1.0 时间：2016-10-17

##Overview

本文将介绍YunUI的安装方式和基本的使用方法。

###基础技术框架
1. [Vue.js](https://vuejs.org/)
2. [Lerna.js](https://lernajs.io/)
3. ECMAScript 2015
4. [Webpack](https://webpack.github.io/docs/)
5. [ESLint](http://eslint.org/)

###文件目录结构
``` bash
CloudHubUI/							##根目录
	build/						    ##webpack构建配置目录
	config/							##环境配置文件目录
	demo/							##demo源文件
	dist/							##构建后的文件
		|_ demo/					##构建后的demo文件
		|_ yun/						##构建后的各个组件代码
	node_modules/					##第三方依赖包
	packages/						##lerna拆分的组件包源文件
	src/							##其他基础公共源文件
	static/							##静态资源文件（图片图标等）
		|_ demo/					##demo的静态资源文件
		|_ yun/						##YunUI组件的静态资源文件
	test/							##测试代码源文件
	.babelrc						##babel配置文件
	.editorconfig					##编辑器配置文件
	.eslintignore					##eslint忽略检查的文件
	.eslintrc						##eslint配置文件
	.gitignore						##git忽略文件的配置
	index.html						##总入口文件
	lerna.json						##lerna配置文件
	package.json					##依赖包声明
	README.md						##read me
```

##Getting Started

####I.	Install

**npm安装** *(TODO)*

推荐使用npm的方式安装，它能更好地与Webpack等构建工具结合使用。

``` bash
npm install yunui
```

**CDN** *(TODO)*

可以从静态资源服务器获取最新的资源文件。

####II. Start

**引入Yun UI**

你可以引入整个Yun UI组件库，或者根据需要引入部分组件。

#####完整引入

在你的工程目录入口js文件中，写入以下内容：

``` javascript
main.js ->

import Vue from 'vue'
/* 引入组件库js文件 */
import Yun from '../dist/yun/'
/* 引入组件库样式文件 */
import '../dist/yun/index.css'

Vue.use(Yun)

const app = new Vue({}).$mount('#app')

---------------
example.vue ->

<!-- 在vue的template中直接引用即可 -->
<template>
    <div>
        <yun-toast></yun-toast>
        <yun-button></yun-button>
    </div>
</template>

```

#####按需引入

你可以只安装你需要的组件。这里以安装YunUI的button组件为例：

``` bash
npm install yun-button --save-dev
```
安装后在所需的vue文件中进行声明和使用：

``` javascript
<template>
    <div>
        <yun-button></yun-button>
    </div>
</template>

<script>
    import yunButton from 'yunui/button/'

    export default {
        components: {
            yunButton
        }
    }
</script>

```

###增加组件

**I.	开发**

目前在`package.json`中声明了多个脚本模式，可以通过`npm run xxx`的方式进行运行，各个命令启动服务如下：

``` bash
dev-demo: 
启动demo的本地开发模式，监听http://localhost:8090/
dev:
启动组件库的本地开发模式，监听http://localhost:8080/
build:
编译打包组件库，输出文件目录为：dist/yun/
build-demo:
编译打包demo页面，可发布并通过http(s)访问，输入文件目录：dist/demo/
lint:
执行eslint检查
unit:TODO
e2e:TODO
test:TODO
```

**II. 测试**

*TODO*

**III. 构建**

构建demo页面：

``` bash
npm run build-demo
```
demo构建后的文件在`dist/demo`目录下。

构建完整组件库代码：

``` bash
npm run build
```
完整组件库构建后的文件在`dist/yun`目录下。


**IV. 发布**
请提交[Pull Request](https://git-scm.com/docs/git-request-pull)。

###代码规范

请参考 [ESLint](http://eslint.org/) standard 规范进行书写，并执行`npm run lint`进行代码检查。

###Tips

如果你使用的是Webstorm，请在运行`npm install`之前，在`Preferences | Editor | File Types | Ignore files and folders`中增加`node_modules`，避免循环依赖造成的死循环。