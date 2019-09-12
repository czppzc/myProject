let PENDING = 'pending';
let FULFILLED = 'fulfilled';
let REJECTED = 'rejected'

function MyPromise(fn) {
    this.state = PENDING;
    this.value = null;
    this.err = null;
    this.resolveCallBack = [];
    this.rejectedCallBack = [];
    let that = this;
    const getThen = function (value) {
        if (typeof value == 'object' || typeof value == 'function') {
            return value.then ? value.then : null
        }
        return null
    }
    const resolve = function (value) {
        console.log(value,"测试")
        if (that.state === PENDING) {
            that.state = FULFILLED;
            that.value = value;
            that.resolveCallBack.length && that.resolveCallBack.forEach(cb => cb(that.value));
        }
    }
    const reject = function (err) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.err = err;
            that.rejectedCallBack && that.rejectedCallBack.forEach(cb => cb(that.err))
        }

    }
    //处理器在此判断一下value值
    //value值如果是thenable对象的话
    //取出thenable对象的value值
    function handler(fn) {
        fn((value) => {
            console.log(value,"test")
            let then = getThen(value)
            if (then) {
                //console.log("我执行了")
                return handler(then.bind(value))
            }
            resolve(value)
        }, err => {
            let then = getThen(value)
            if (then) {
                return handler.bind(then.bind(value))
            }
            reject(err)
        })
    }
    handler(fn)
}
MyPromise.prototype.then = function (onFulFilled, onRejected) {
    console.log("我也执行了",this)
    let that = this;
    const collectFn = function (onFulFilled, onRejected) {
        onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : r => {
            throw r
        }
        if (that.state === PENDING) {
            console.log(that.state,'状态')
            that.resolveCallBack.push(onFulFilled);
            that.rejectedCallBack.push(onRejected)
        } else if (that.state === FULFILLED) {
            onFulFilled(that.value)
        } else {
            that.catch(that.value)
        }
    }
    /**完成的功能：
  * 1.当then没有返回值
  * 2.当then有返回值，但是返回值为非promise对象
  * 3.当then有返回值，并且返回值是一个promise对象
  */
    /**
     * 关键点：then返回的新promise中的resolve一定要保证是在上一个promise执行完注册回调函数之后
     */
    return new MyPromise((resolve, reject) => {
        //稍微封装一下成功回调和失败回调函数
        collectFn((value) => {
            //这个地方是关键,把then中返回的promise的resolve写到上一个promise的执行成功回调里面
            //这样就保证只要上一个promise执行成功回调没有执行，下一个then中的传入函数也就不会执行
            //从而保证了链式调用的顺序执行性，从上往下
            if (typeof onFulFilled !== 'function') {
                resolve(value)
                return
            }
            resolve(onFulFilled(value))
        }, (err) => {
            if (typeof onRejected !== 'function') {
                reject(err)
                return
            }
            reject(onRejected(err))
        })
    })
}
MyPromise.all=function(arr){
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
new MyPromise((resolve, reject) => {
   resolve(new MyPromise((resolve,reject) => {
       setTimeout(() => {
           resolve(100)
       })
   }))
}).then(v => {
    console.log(v)
})