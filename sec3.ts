class A {}
class B extends A {
  public a() {
    alert('1');
  }
}
var x = new B();
x.a();

var y:A = new B();
