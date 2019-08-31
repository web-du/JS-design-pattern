//1.继承
// 父类
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} eat something`)
    }

    speak() {
        console.log(`My name is ${this.name}, age ${this.age}`)
    }
}

// 子类
class Student extends Person {
    constructor(name, age, number) {
        // super:执行父类的构造方法
        super(name, age)
        this.number = number
    }
    study() {
        console.log(`${this.name} study`)
    }
}


//实例
let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.study()
console.log(xiaoming.number)
xiaoming.eat()

let xiaohong = new Student('xiaohong', 11, 'A2')
xiaohong.study()
xiaohong.speak()



// jq

class jQuery {
    constructor(seletor) {
        let slice  = Array.prototype.slice;
        // 伪数组转真数组
        let dom = slice.call(document.querySelectorAll(seletor))
        let len = dom ? dom.length : 0
        for (let i = 0; i < len ; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.seletor = seletor || ''
    }
    append(node) {

    }
    addClass(name) {
    }
    html(data) {

    }
}

window.$ = function(seletor) {
    return new jQuery(seletor)
}

var p = $('p');
console.log(p.constructor)