// 单例模式
// class SingleObject {
//     login() {
//         console.log('login...');
//     }
// }

// // 静态方法
// SingleObject.getInstance = (function () {
//     let instance

//     return function () {

//         // 单例模式的实现思想：有就直接返回，没有就初始化
//         if (!instance) {
//             instance = new SingleObject();
//         }

//         return instance;
//     }
// })()

// let obj1 = SingleObject.getInstance();
// obj1.login();

// let obj2 = SingleObject.getInstance();
// obj2.login();

// console.log(obj2 === obj1) // true 单例模式中所有的login都是一样的，只有一个



// 登录
class LoginForm {
    constructor() {
        this.state = 'hide'
    }

    show() {
        if (this.state === 'show') {
            console.log('已经显示');
            return;
        }

        this.state = 'show';
        console.log('显示成功')
    }

    hide() {
        if (this.state === 'hide') {
            console.log('已经隐藏');
            return;
        }

        this.state = 'hide';
        console.log('隐藏成功');
    }
}

//登录的单例
LoginForm.getInstance = (function() {
    let islogin

    return function () {
        // if (!islogin) {
        //     islogin = new LoginForm()
        // }
        // return islogin
        return islogin || (islogin = new LoginForm())
    }
})()

// 测试

let login1 = LoginForm.getInstance();
login1.show();

let login2 = LoginForm.getInstance()
login2.show();

console.log(login2 === login1)