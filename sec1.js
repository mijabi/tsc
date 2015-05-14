var A = (function () {
    function A() {
        this.a = 'AA';
    }
    A.a = 'A';
    return A;
})();
console.log(A.a);
var x = new A();
console.log(x.a);
