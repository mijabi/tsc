interface Ihoge {
    name: string;
    age: number;
    getName(): string;
    getAge(): Number;
}

class Piyo implements Ihoge {
//    public name: string;
//    public age: number;
    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
    constructor(public name: string, public age: number) {
    }
}

var p: Piyo = new Piyo('LFO', 47);
alert(p.getName());
