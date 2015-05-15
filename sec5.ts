class A {
  private X: string = "I'm private";
  Y: string = "I'm public";
}

var a: A = new A();
//alert (a.X);
alert (a.Y);
