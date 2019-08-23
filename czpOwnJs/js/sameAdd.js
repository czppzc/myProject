//实现a===a+(常量)
var b=3;
var obj={a:4};
Object.defineProperty(obj,'a',{
    get(){
        b=b-2;
        return b
    },
    set(val){
        return val
    }
})
console.log(obj.a===obj.a+2) //第二次触发get先减去一个常量后加上一个常量，相当于没有变，所以比较为true
console.log(obj.a===obj.a+2)
console.log(obj.a)