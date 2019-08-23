var arr = [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
function getMaxOne(data) {
    var temp = 0;
    var max = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i] == 2 && data[i] == data[i + 1]) {
            temp++
        } else {
            if (temp > max) {
                max = temp;
            }
            temp = 0
        }
    }
    return max + 1
}
console.log(getMaxOne(arr))
function deepClone(data) {
    if (typeof data == 'object' && data) {
        var obj = Array.isArray(data) ? [] : {};
        for (let prop in data) {
            obj[prop] = deepClone(data[prop])
        }
        return obj
    } else {
        return data
    }
}
//层叠上下文就是因为没有设置z-index导致看起来区域是一块一块重叠的
Function.prototype.mybind = function (thisArg, ...arg) {
    var that = this;
    var fn = function (...args) {
        var _this = this instanceof fn ? this : thisArg;
        return that.apply(_this, arg.concat(args))
    }
    fn.prototype = Object.create(this.prototype);
    fn.prototype.constructor = this;
    return fn
}
Function.prototype.myapply = function (context) {
    var res;
    context = context || {};
    context.fn = this;
    if (arguments[1]) {
        res = context.fn(...arguments[1])
    } else {
        res = context.fn()
    }
    delete context.fn
    return res
}
var obj = { id: 3 }
function test(a, b, c) {
    console.log(a, b, c)
    console.log(this.id)
}
var PENDING = 'pending';
var RESOLVED = 'resolved';
var REJECTED = 'rejected';
function MyPromise(fn) {
    this.state = PENDING;
    this.value = null;
    this.err = null;
    this.resolveCallback = [];
    this.rejectCallback = [];
    var that = this;
    var resolve = function (val) {
        if (that.state == PENDING) {
            that.state = RESOLVED;
            that.value = val;
            that.resolveCallback.length && that.resolveCallback.forEach(callback => {
                callback(val)
            });
        }
    }
    var reject = function (err) {
        if (that.state == PENDING) {
            that.state = REJECTED;
            that.err = err;
            that.rejectCallback.length && that.rejectCallback.forEach(callback => {
                callback(err)
            })

        }
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        throw e
    }
}
MyPromise.prototype.then = function (resolveFn, rejectFn) {
    var that = this;
    resolveFn = typeof resolveFn === 'function' ? resolveFn : v => v;
    rejectFn = typeof rejectFn === 'function' ? rejectFn : err => { throw err };
    var collectFn = function (resolveColl, rejectColl) {
        if (that.state === RESOLVED) {
            resolveColl(that.val)
        } else if (that.state === REJECTED) {
            rejectColl(that.err)
        } else {
            that.rejectCallback.push(resolveFn);
            that.rejectCallback.push(rejectColl);
        }

    }
    return new MyPromise((resolve, reject) => {
        collectFn(val => {
            resolve(resolveFn(val))
        },err => {
            reject(rejectFn(err))
        })
    })
}
