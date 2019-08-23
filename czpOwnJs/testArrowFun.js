
/* function test(){
    var age=10;
   var child=function(){
    console.log(this)
       console.log(this.age)
   } 
   child()
   var arrowChild=() => {
       console.log(this)
    console.log(this.age)
   }
   arrowChild()
   console.log(100)
}
let obj={
    age:18
}
test.bind(obj)() */
 function test(){

}
test.prototype={
    name:function(){
        console.log(name)
    },
    age:18
}

//console.log((new Test()).p)

Function.prototype.mybind=function(thisArg,...arg){
    var _this=this;
    var fn=function(...args){
        return _this.apply(this instanceof _this ?this:thisArg,[...arg,...args])
    }
    var proto=deepClone(this.prototype);
    console.log(proto)
    for(var prop in proto){
        proto[prop]={value:proto[prop]}
    }
    fn.prototype=Object.create({},proto);
    fn.prototype.constructor=fn;
    return fn
}
function deepClone(data){
    if(typeof data =="object"&&data){
    var obj=Array.isArray(data)?[]:{};
    for(let prop in data){
        obj[prop]=deepClone(data[prop])
    } 
    return obj
    }else {
        return data
    }
}
console.log(test.mybind(null).prototype)
console.log(test.prototype)