//es7的includes
var a=[1,2,4];
var b=[2,6,8];
//并集
var c=a.concat(b.filter(v => !a.includes(v)))
//交集
var d=a.filter(v => b.includes(v));
//差集
var e=a.filter(v => !b.includes(v)).concat(b.filter(v => !a.includes(v)));
//a和b的差集就是a中有b中没有的元素
var e1=a.concat(b).filter(v => a.includes(v)&&!b.includes(v))
console.log(c);
console.log(d);
console.log(e)
console.log(e1,'测试')
//es6的set结构
var f=new Set(a.concat(b));
console.log([...f])
console.log(Array.from(f))
//es5的filter和indexOf，缺点就是indexof(NaN)永远都会负一