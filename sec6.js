// 引数にアクセシビリティ（public とか）を付けると、引数をそのままメンバにすることができる
var A = (function () {
    function A(message) {
        this.message = message;
        if (message == undefined)
            this.message = 'no value';
    }
    return A;
})();
var a = new A('Hi');
alert(a.message);
var b = new A();
alert(b.message);
