var Piyo = (function () {
    function Piyo(name, age) {
        this.name = name;
        this.age = age;
    }
    //    public name: string;
    //    public age: number;
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
