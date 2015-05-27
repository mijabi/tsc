// 引数の値で constructor で初期化するけど、引数がない場合も考慮する場合

class A {
    public message: string;
    constructor(m?: string) {
        if (m == undefined)
            this.message = 'no value';
        else
            this.message = m;
    }
}

var a = new A('Hi');
alert(a.message);
var b = new A();
alert(b.message);
