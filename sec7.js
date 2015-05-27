var Piyo = (function () {
    // b
    // constructor(n: string, a: number) {
    //     this.name = n;
    //     this.age = a;
    // }
    // 以下だと a, b の箇所不要。
    // 但し、アクセシビリティ付き引数で受け取る値は、interface で定義されていなくてもエラーにならない。
    function Piyo(name, ages) {
        this.name = name;
        this.ages = ages;
    }
    Piyo.prototype.getName = function () {
        return this.name;
    };
    Piyo.prototype.getAge = function () {
        return this.age;
    };
    return Piyo;
})();
var p = new Piyo('LFO', 47);
alert(p.getName());
