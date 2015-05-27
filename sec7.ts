interface Ihoge {
    name: string;
    age: number;
    getName(): string;
    getAge(): Number;
}

class Piyo implements Ihoge {
// a
//    public name: string;
    public age: number;
    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
    // b
    // constructor(n: string, a: number) {
    //     this.name = n;
    //     this.age = a;
    // }
    // 以下だと a, b の箇所不要。
    // 但し、アクセシビリティ付き引数で受け取る値は、interface で定義されていなくてもエラーにならない。
    constructor(public name: string, public ages: number) {
    }



}

var p: Piyo = new Piyo('LFO', 47);
alert(p.getName());
