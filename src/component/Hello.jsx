import React from 'react'//创建组件、虚拟dom元素
import hellocss from '@/css/hello.css'
// function Hello(prop){
//     return <h6>This is a react component</h6>
// }
//-----------------------
//用class创建组件  
class Hello extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: '这是state里的数据'
        }
    }
    render() {
        // this.state.msg = '数据被改了'
        console.log(this.props.name)//用class创建的组件，可以不需要接受参数，可以直接通过this.props访问
        // return <h6 style={{color:'red'}}>This is a react component,{this.state.msg}</h6>
        //方式一绑定事件：
        // return <h6 className={hellocss.hclass} onClick={this.eventHandler}>This is a react component,{this.state.msg}</h6>
        //方式二绑定事件：
        return <h6 className={hellocss.hclass} onClick={() => this.eventHandler()}>This is a react component,{this.state.msg}</h6>
    }
    //方式一绑定事件：
    // eventHandler() {
    //     console.log(this)//这里的this是undefined的
    //     console.log('be click')
    //     this.state.msg='哈哈哈'
    // }
    //方式二绑定事件：这种方式是不会报错的
    eventHandler = () => {
        console.log(this)
        console.log('be click')
        // this.state.msg='哈哈哈'//这种写法是不会更新到页面上的 
        this.setState({ msg: '哈哈哈' })
    }
}


export default Hello