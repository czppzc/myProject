Function.prototype.mybind = function(thisArg, ...arr) {
    var _this = this;
    var arrs = arr || [];
    var func = function(...temps) {
        //判断一下是不是用于构造函数了
        var bindThis = this instanceof func ? this : thisArg;
        return _this.apply(bindThis, arrs.concat(temps))
    }
    func.prototype = Object.create(this.prototype);
    func.prototype.constructor = this;
    return func
}
var obj = {
    id: 100
}

function test(name) {
    console.log(this.id)
    console.log(name)
}
test.prototype.mytest = function() {
    console.log(100)
}
test.mybind(obj,...arg)
/**手写一个new函数 */
function Mynew(fn,...arg){
    var obj={}
    obj=Object.create(fn.prototype)
    fn.apply(obj,arg);
    console.log(obj)
    //obj.__proto__=fn.prototype
    return obj
}
function Cons(name,age){
    this.name=name;
    this.age=age;
}
Cons.prototype.test=function(){
    console.log(this.name)
}
var testObj=Mynew(Cons,"小明",18)
console.log(testObj)
function deepclone(data){
    if(typeof data ==="object"&&data){
     let obj=Array.isArray(data)?[]:{};
     for(let prop in data){
         obj[prop]=deepclone(data[prop])
     }
     return obj
    }else {
        return data
    }
}
var a=1;
for(var i=1;i<=10000;i++){
a=a*i
}
console.log(a)