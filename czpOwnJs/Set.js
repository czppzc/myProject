/* var arr=[1,2,3,4,4,5];
var handleArr=[...new Set(arr)]//...解构运算符 可以用于数组和set数组结构 数组去重
//或者 Array.from(new Set( ))
console.log(handleArr)
var obj={id:100,name:'小明'}
console.log([...obj]) */
var PENDING = 'pending';
var RESOLVED = 'fulfilled';
var REJECTED = 'rejected'

function MyPromise(fn) {
    this.state = PENDING;
    this.resolveCallback = [];
    this.rejectedCallback = [];
    this.returnData = '';
    var that = this;
    var resolve = function (data) {
        if (that.state == 'pending') {
            that.returnData = data;
            that.state = RESOLVED;
            that.resolveCallback.forEach(callback => {
                callback(data)
            });
        }
    }
    var reject = function (data) {
        if (that.state == 'pending') {
            that.returnData = data;
            that.state = REJECTED;
            that.rejectedCallback.forEach(callback => {
                callback(data)
            });
        }
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        throw e
    }
}
MyPromise.prototype.then = function (success, fail) {
    if (this.state == 'fulfilled') {
        success(this.returnData)
    } else if (this.state == 'rejected') {
        fail(this.returnData)
    } else {
        this.rejectedCallback.push(fail);
        this.resolveCallback.push(success)
    }
    var that = this;
    return new MyPromise((resolve, reject) => {
        if (that.state == 'fulfilled') {
            resolve(success(that.returnData))
        }
    })
}
MyPromise.prototype.catch = function (fn) {
    console.log(this,'test')
    fn(this.returnData)
}
new MyPromise((resolve, reject) => {
    resolve(1)
}).then(res => {
    console.log(res, "测试")
}, e => {
    throw new Error(e)
}).catch(e => {
    if(e)
    {console.log(e)}
})