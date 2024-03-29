/* var a = 1;
(function memo() {
    a = 10;
    console.log(a)
}())
console.log(a, 'test') */
var foo = 1;
(function foo() {
    foo = 10  //foo在这个里面是只读属性 
    console.log(foo)
}())
//匿名函数
console.log(foo)
/* var foo = 1;
function foo1() {
    foo = 10
    console.log(foo,"test")
}
foo1()
console.log(foo) */
let onWatch = (obj, setBind, getLogger) => {
    let handler = {
      get(target, property, receiver) {
        getLogger(target, property)
        return Reflect.get(target, property, receiver);
      },
      set(target, property, value, receiver) {
        setBind(value);
        return Reflect.set(target, property, value);
      }
    };
    return new Proxy(obj, handler);
  };
  
  let obj = { a: 1 }
  let value
  let p = onWatch(obj, (v) => {
    value = v
  }, (target, property) => {
    console.log(`Get '${property}' = ${target[property]}`);
  })
  p.a = 2 // bind `value` to `2`
  p.a // -> Get 'a' = 2