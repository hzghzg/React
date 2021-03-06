//继承  
class Lives {
    constructor(name) {
        this.name = name
    }  
    say() {
        console.log('这是实例方法')
    }
}
//--------------------------------  
//class基本使用
function Person(name) {
    this.name = name
}
Person.prototype.say = function () {//直接挂到内存上防止每个对象都创建一次
    console.log('这是一个实例方法')
}
const p1 = new Person('test')
Person.info = 'aaa'//直接挂载给类的叫做静态属性
Person.show = function () {//静态方法
    console.log('这是person类的静态方法')
}
console.log(p1)
console.log(p1.name)//通过new出来的实例访问属性叫做实例属性  
p1.say()
Person.show()

//-----------------------------------------------------
//继承
class Animal extends Lives {
    static info = 'aaa'
    static show() {
        console.log('这是animal的静态方法')
    }
}
const a1 = new Animal('test animal')
console.log(a1)
a1.say()
Animal.show()
class Plant extends Lives {
}
const pl1 = new Plant('test plant')
console.log(pl1)
pl1.say()