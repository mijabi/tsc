var A = (function () {
    function A() {
        this.X = "I'm private";
        this.Y = "I'm public";
    }
    return A;
})();
var a = new A();
//var a: A = new A();
alert(a.X);
alert(a.Y);
