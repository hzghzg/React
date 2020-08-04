//接收成员的名字必须这么写
import React from 'react'//创建组件、虚拟dom元素
import ReactDom from 'react-dom'//把创建好的组件和虚拟dom放到页面上展示
console.log('hello react')
//webpack-dev-server打包好的的main.js是放到内存中的，文件家中是看不到的  

//创建虚拟dom元素  
//参数1：创建元素的类型，字符串，表示元素的名称  
//参数2：一个对象或者是null，表示当前dom的属性  
//参数3..n:子节点
const myh1 = React.createElement('h1', { id: 'myh1', title: '这是一个标题' }, 'Hello React element!')

//使用ReactDom把虚拟dom渲染到页面上  
//参数1：要渲染的那个虚拟dom元素  
//参数2：指定页面上一个容器
ReactDom.render(myh1, document.getElementById('app'))
