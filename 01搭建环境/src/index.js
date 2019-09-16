class Adaptee {
    specificRequest() {
        return '德国标准插头'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specificRequest();
        return `${info} -- 转换器 -- 中国标准插头 `
    }
}

let target = new Target();
let res = target.request();
console.log(res)

// 还有如vue中的计算属性也是使用的适配器模式