var PENDING = 'pending';
var RESOLVED = 'fulfilled';
var REJECTED = 'rejected';
function MyPromise(fn) {
    this.state = PENDING;
    this.resolveCallback = [];
    this.rejectCallback = [];
    this.val = null;
    this.err = null;
    var that = this;
    var resolve = function (val) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.val = val;
            that.resolveCallback.length && that.resolveCallback.forEach(callback => {
                callback(val)
            });

        }
    }
    var reject = function (err) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.err = err;
            that.rejectCallback.length && that.rejectCallback.forEach(callback => {
                callback(err)
            });
        }
    }
    try {
        fn(resolve, reject)
    }
    catch (e) {
        throw e
    }
}
MyPromise.prototype.then = function (resolveFn, rejectFn) {
    var that = this;
    var resolveFn = typeof resolveFn === 'function' ? resolveFn : v => v;
    var rejectFn = typeof rejectFn === 'function' ? rejectFn : err => { throw err };
    var handlerFn = function (resolveFn, rejectFn) {
        if (that.state === PENDING) {
            that.resolveCallback.push(resolveFn);
            that.rejectCallback.push(rejectFn);
        } else if (that.state === RESOLVED) {
            resolveFn(that.val)
        } else {
            rejectFn(that.err)
        }
    }
    return new MyPromise((resolve, reject) => {
        handlerFn(val => {
            resolve(resolveFn(val))
        }, err => {
            reject(rejectFn(err))
        })
    })
}
MyPromise.prototype.all = function (arr) {
    let aResult = [];    //用于存放每次执行后返回结果
    return new MyPromise((resolve, reject) => {
        let i = 0;
        next();    //开始逐次执行数组中的函数
        function next() {
            arr[i]().then(res => {
                aResult.push(res);    //执行后返回的结果放入数组中
                i++;
                if (i == arr.length) {    //如果函数数组中的函数都执行完，便把结果数组传给then
                    resolve(aResult);
                } else {
                    next();
                }
            })
        }
    })
}