// 引数にアクセシビリティ（public とか）を付けると、引数をそのままメンバにすることができる

class A {
    constructor(public message: string) {
        if (message == undefined) this.message = 'no value';
    }
}

var a = new A('Hi');
alert(a.message);
var b = new A();
alert(b.message);
