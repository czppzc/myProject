Function.prototype.Mybind = function(thisArg, ...arr) {
    var that = this;
    var mybind = function(...args) {
        //如果mybind这个函数作为构造函数的时候，那么目标函数的this应该指向的是实例对象
        //如果这个函数不是作为构造函数，那么this还是指向thisArg
        var bindThis = this instanceof mybind ? this : thisArg; //这样写比较好，下面哪种写法虽然结果差不多
        //var bindThis = this instanceof that ? this : thisArg;
        //
       return  that.apply(bindThis, arr.concat(args))
    }
    mybind.prototype = Object.create(that.prototype);
    mybind.prototype.constructor = that;
    return mybind
}
var obj = {
    name: '小刚'
}
var testFun = function(value, value1) {
    console.log(this.name);
    console.log(value, value1)
}
testFun.prototype.mytest = function() {
        console.log(100)
    }
    //testFun.Mybind(obj, '小明')('小花')

Function.prototype.MyApply = function(context) {
    context = context || window;
    context.fn = this;
    var result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
Function.prototype.MyCall = function(context) {
    context = context || window;
    context.fn = this;
    var arrList = [].slice.apply(arguments, [1])
    if (arrList.length > 0) {
        result = context.fn(...arrList)
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
var testBind = testFun.Mybind(obj, '小明', '小花')
testBind()
    /* console.log(testBind.prototype) */
    //testFun.MyCall(obj, '小明', '小花')