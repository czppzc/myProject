/* function mypromise(){
    let m=5;
 return  new Promise((resolve,reject) => {
     setTimeout(() => {
       if(m<4){
           resolve(1111)
       }else {
           reject("出错了")
       }
     },5000)
    })
}
mypromise().then(res => {
    console.log("我进入then了")
    console.log(res)
}).catch(err => {
    console.log('我进入reject了')
    console.log(err)
}) */
/* const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []
  
  function resolve(value) {
    console.log("我在前面")
    if(that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => cb(that.value))
    }
  }
  
  function reject(value) {
    if(that.state === PENDING){
      that.state = REJECTED
      that.value = value;
      that.rejectedCallbacks.map(cb => cb(that.value));
    }
  }
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
  setTimeout(() => {
  console.log('setTimeOut')
  },100)
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    console.log("我在后面")
  const that = this
  //对传入的两个参数做判断，如果不是函数将其转为函数
  onFulfilled = 
    typeof onFulfilled === 'function'
    ? onFulfilled 
    : v => v  // onFulfilled = v => v
  onRejected = 
    typeof onRejected === 'function'
    ? onRejected
    : r => {
      throw r
    }
  
  if(that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  else if(that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  else {
    onRejected(that.value)
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功的回调数据')
  }, 1000)
  setTimeout(() => {
    reject('回调数据失败')
  }, 2000)
}).then(value => {
  console.log('Promise.then:  ', value)
},err => {
    console.log(err)
})
console.log(this,"天涯测试")
testThis = () => {
    console.log(this,"this指向")
}
testThis() */
var PENDING = 'pending';
var RESOLVE = 'fulfilled'
var REJECT = 'rejected'
function MyPromise(fn) {
  this.val = null;
  this.err = null;
  this.state = PENDING;
  this.resolveCallback = [];
  this.rejectCallback = [];
  var that = this;
  var resolve = function (val) {
    if (that.state === PENDING) {
      that.state = RESOLVE;
      that.val = val;
      that.resolveCallback.length && that.resolveCallback.forEach(callback => callback(val));
    }
  }
  var reject = function (err) {
    if (that.state === PENDING) {
      that.state = REJECT;
      that.err = err;
      that.rejectCallback.length && that.rejectCallback.forEach(callback => callback(err));
    }
  }
  try {
    fn(resolve, reject)
  } catch (e) {
    throw e
  }
}
MyPromise.prototype.then = function (resolvedFn, rejectedFn) {
  var that = this;
  console.log(resolvedFn)
  var resolvedFn = typeof resolvedFn === 'function' ? resolvedFn : v => v;
  var rejectedFn = typeof rejectedFn === 'function' ? rejectedFn : err => { throw err };
  var fn = function (resolvedFn, rejectedFn) {
    if (that.state === PENDING) {
      that.resolveCallback.push(resolvedFn);
      that.rejectCallback.push(rejectedFn);
    } else if (that.state === resolve) {
      resolvedFn(that.val)
    } else {
      rejectedFn(that.err)
    }
  }
  return new MyPromise((resolve, reject) => {
    fn((val) => {
      resolve(resolvedFn(val))
    }, (err) => {
      reject(rejectedFn(err))
    })
  })
}
MyPromise.prototype.resolve = function (param) {
  return new MyPromise(resolve => {
    resolve(param)
  })
}
MyPromise.all = function (fnArr) {
  var resArr = [];
  return new MyPromise((resolve, reject) => {
    next()
    function next() {
      var fn = fnArr.shift();
      fn().then(res => {
        if (fn.length > 0) {
          handleFn()
          resArr.push(res)
        } else {
          resolve(resArr)
        }
      })
    }
  })
}
new MyPromise((resolve, reject) => {
  console.time('开始')
  setTimeout(() => {
    resolve(100)
  }, 2000)
}).then(res => {
  console.log(res, "第一个then")
  return res + '测试'
}).then(res => {
  console.log(res, "第二个then")
  return res
}).then(600).then(res => {
  console.log(res, "第四个then")
})
