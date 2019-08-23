class Demo {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        return this;
    }

    print() {
        console.log(this.a + ' ' + this.b);
        return 'sb'
    }
}
class Mydemo extends Demo {
    constructor(a, b, c, d) {
        super(a, b);
        this.c = c;
        this.d = d;
    }
    testMes() {
        return (this.print())
    }
    testAn() {
        console.log(this.c + '' + this.d)
        return (this.c + '' + this.d)
    }
}
ss
let newDemo = new Mydemo('hello', 'world', '你去', '死吧');
console.log(newDemo)
console.log(typeof newDemo)