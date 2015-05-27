//引数の値で constructor で初期化する場合

class A {
    public message: string;
    constructor(m: string) {
        this.message = m;
    }
}

var a = new A('Hi');

