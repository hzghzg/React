import React from 'react'//创建组件、虚拟dom元素
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
        this.state.msg = '数据被改了'
        console.log(this.props.name)//用class创建的组件，可以不需要接受参数，可以直接通过this.props访问
        return <h6>This is a react component,{this.state.msg}</h6>
    }
}


export default Hello