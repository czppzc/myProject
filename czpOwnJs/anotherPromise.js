const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const that = this;
    that.value = null;
    that.state = PENDING;
    that.resolveCallBack = [];
    that.rejectedCallBack = [];
    var resolve = function(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.value = value;
            console.log(that.resolveCallBack)
            that.resolveCallBack.forEach(cb => cb(that.value))
        }
    }
    var reject = function(value) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;
            that.rejectedCallBack.forEach(cb => cb(value))
        }
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    if (that.state === PENDING) {
        that.resolveCallBack.push(onFulfilled);
        that.rejectedCallBack.push(onRejected);
    } else if (that.state === RESOLVED) {
        onFulfilled(that.value);
    } else {
        onRejected(that.value);
    }
}
new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    }, 1000)
}).then(res => console.log(res))