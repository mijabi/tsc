//引数の値で constructor で初期化する場合
var A = (function () {
    function A(m) {
        this.message = m;
    }
    return A;
})();
var a = new A('Hi');
