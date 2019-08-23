function *show(){
    console.log('a');
    yield 12;
    console.log('b')
    yield
    console.log('c')
    return 25
}
let gen=show()
console.log(gen.next())
console.log(gen.next(18))
console.log(gen.next())
console.log(gen.next())
gen.next()
gen.next()
gen.next()
//generator其实跟async await差不多，await只是对generator做了一层封装 yield就相当于await