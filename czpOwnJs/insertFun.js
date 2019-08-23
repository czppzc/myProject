function getConsole(){ //这个函数是系统给的，肯定不能直接修改
   // console.log("我在前面执行")
    console.log("我在后面执行")
}
function getBefore(){
    console.log("我是在你前面执行的函数")
}
Function.prototype.before=function(fn){ //高阶函数：函数作为参数或者函数作为返回值
    var _that=this;
    return function(){
       fn()
      _that()
    }
}
//闭包：访问其他函数内部变量的函数
var newFunc=getConsole.before(getBefore) //返回一个函数的优点：可以预置参数ore(getBefore) //返回一个函数的优点：可以预置参数
newFunc()