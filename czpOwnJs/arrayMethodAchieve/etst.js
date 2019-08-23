exports.func = () => {
    console.log(100)
}
Function.prototype.myBind = function (thisArg, ...presetArg) {
    var that = this;
    //fn作为构造函数，this的指向不能改
    var fn = function (...arg) {
        var _this = this instanceof fn ? this : thisArg;
        return that.apply(_this, presetArg.concat(arg))
    }
    fn.prototype = Object.create(that.prototype)
    fn.prototype.constructor = that;
    return fn
}
//传一个数组
//context就是要改变的指向的对象，也就是上下文
Function.prototype.myApply = function (context, params) {
    context = context || {};
    var res;
    context.fn = this;
    //var params=[].slice.call(arguments,1);
    console.log(params)
    if (params) {
        res = context.fn(...params)
    } else {
        res = context.fn()
    }
    delete context.fn
    return res
}
Function.prototype.myCall = function (context, ...arg) {
    context = context || {};
    var res;
    context.fn = this;
    console.log(args)
    if (arg.length) {
        res = context.fn(...arg)
    } else {
        res = context.fn()
    }
    delete context.fn
    return res

}
function testApply(a, b, c, d) {
    return this.num + a + b + c + d
}
function testBind(a, b, c, d) {
    console.log(a, b, c, d, this.num)
    return this.num + a + b + c + d
}
testBind.prototype.getName = function () {
    console.log('我是构造函数')
}