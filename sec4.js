var X = (function () {
    function X() {
    }
    return X;
})();
var x = new X();
x.a = 123;
x.b = 456;
alert(x.a + ' : ' + x.b);
// X.a = 123;
// var x = new X();
// x.b = 456;
// alert(X.a + ' : ' + x.b);
// X.a = 1;
// x.b = 4;
// alert(x.a + ' : ' + x.b);
