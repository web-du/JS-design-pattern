// 工厂模式

class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log('init');
    }
    func1() {
        console.log('func1');
    }
    func2() {
        console.log('func2')
    }
}


class Create {
    create(name) {
        return new Product(name)
    }
}


// 测试
let creator = new Create();
let p = creator.create('p1');
p.init();
p.func1();


//场景

// jQuery - $('div');
// React.createElement
// vue 异步组件