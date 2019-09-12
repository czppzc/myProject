var path = require('path');
var PENDING = 'pending';
var RESOLVED = 'fulfilled';
var REJECTED = 'rejected';
function MyPromise(fn) {
    this.state = PENDING;
    this.err = null;
    this.val = null;
    this.resolveCallback = [];
    this.rejectCallback = [];
    var that = this;
    var resolve = function (val) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.val = val;
            that.resolveCallback.length && that.resolveCallback.forEach(cb => {
                cb(val)
            });
        }
    }
    var reject = function (err) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.err = err;
            that.rejectCallback.length && that.rejectCallback.forEach(cb => { cb(err) })
        }
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        throw e
    }

}
MyPromise.prototype.then = function (fulCb, rejCb) {
    var that = this;
    fulCb = typeof fulCb === 'function' ? fulCb : v => v;
    rejCb = typeof rejCb === 'funciton' ? rejCb : err => { throw err };
    var collectFn = function (colFulCb, colRejCb) {
        if (that.state === PENDING) {
            that.resolveCallback.push(colFulCb)
            that.rejectCallback.push(colRejCb)
        } else if (that.state === RESOLVED) {
            colFulCb(that.val)
        } else {
            colRejCb(that.err)
        }
    }
    return new MyPromise((resolve, reject) => {
        collectFn(val => {
            resolve(fulCb(val))
        }, err => {
            reject(rejCb(err))
        })
    })
}
MyPromise.all = function (fnArr) {
    var i = 0;
    var data = [];
    return new MyPromise((resolve, reject) => {
        handleFn()
        function handleFn() {
            var fn = fnArr[i];
            console.log(typeof fn, 'test')
            fn().then(res => {
                data.push(res);
                i++;
                if (i < fnArr.length) {
                    handleFn()
                } else {
                    resolve(data)
                }

            })
        }
    })
}
function test1() {
    return new MyPromise((resolve, reject) => {
        resolve('第一个值')
    })
}
function test2() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('第二个值')
        }, 2000)
    })
}
function test3() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('第三个值')
        }, 100)
    })
}
//var data=MyPromise.all([test1,test2,test3])
/* data.then(res => {
    console.log(res)
}) */
console.log(path.resolve(__dirname,'../../build'))