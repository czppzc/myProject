//动态规划
//arr =[3,34,4,12,5,2] 找出数组中是否存在着相加和num的组合
//用数组记录的递归叫dp
var arr = [1, 2, 3, 4, 5, 6, 7, 33];
//递归来做 限定所有的数都是正整数，target也是正整数 选与不选的问题解决
function getTargetCombine(arr, i, target) {
    if (target == 0) return true
    if (i == 0) return arr[i] == target
    if (arr[i] > target) {
        //不选
        return getTargetCombine(arr, i - 1, target)
    } else {
        return getTargetCombine(arr, i - 1, target) || getTargetCombine(arr, i - 1, target - arr[i]);
    }
}
//使用dp来做，特点就是用数组来记录数据代替递归 使用一个二维数组来来保存所以可能的数据
function getTargetCombineA(arr, i, target) {
    if (i == 0) return arr[0] == target
    //if (i == 1) return 
    var dataArr = [];
    //建一个二维数组来保存数据 这个技巧也经常用 每一步都记录着
    for (var j = 0; j <= i; j++) {
        dataArr[j] = [];
    }
    for (var l = 0; l <= target; l++) {
        dataArr[0][l] = arr[0] == l
    }
    dataArr[0][0] = true;
    for (var n = 1; n <= i; n++) {
        dataArr[n][0] = true
    }
    for (var k = 1; k <= i; k++) {
        for (var m = 1; m <= target; m++) {
            if (m - arr[k] < 0) {
                dataArr[k][m] = dataArr[k - 1][m]
            } else {
                dataArr[k][m] = dataArr[k - 1][m] || dataArr[k - 1][m - arr[k]];
            }

        }
    }
    return dataArr[i][target]
    /*  if (i = 0) return
     var boolData = [];
     boolData[0] = arr[0] == target;
     if (i <= 1) {
         return boolData[0]
     }
     var calc = function (){}
     for (var j = 1; j < i; j++) {
         boolData[j] = boolData[j - 1] || boolData[0]
     } */

}
console.log(getTargetCombineA(arr, arr.length - 1, 6))
console.log(getTargetCombineA(arr, arr.length - 1, 10))
console.log(getTargetCombineA(arr, arr.length - 1, 11))
console.log(getTargetCombineA(arr, arr.length - 1, 7))
console.log(getTargetCombineA(arr, arr.length - 1, 3))
console.log(getTargetCombineA(arr, arr.length - 1, 33))
console.log(getTargetCombineA(arr, arr.length - 1, 40))
var PENDING = 'pending';
var RESOLVE = 'fulfilled';
var REJECT = 'reject';
function MyPromise(fn) {
    this.state = PENDING;
    this.val = null;
    this.err = null;
    this.resolveCallback = [];
    this.rejectCallback = [];
    var that = this
    var resolve = function (val) {
        if (that.state == PENDING) {
            that.state = RESOLVE;
            that.val = val;
            that.resolveCallback.length && that.resolveCallback.forEach(callback => {
                callback(val)
            });
        }
    }
    var reject = function (err) {
        if (that.state == PENDING) {
            that.state = REJECT;
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
    resolveFn = typeof resolveFn === 'function' ? resolveFn : v => v;
    rejectFn = typeof rejectFn === 'function' ? rejectFn : err => { throw err }
    var that=this;
    var collectFn=function(successFn,failFn){
      if(that.state==PENDING){
          that.resolveCallback.push(successFn);
          that.rejectCallback.push(failFn);
      }else if(that.state==RESOLVE){
           successFn(that.val)
      }else {
           failFn(that.err)
      }
    }
    return new MyPromise((resolve,reject) => {
        //进行一次封装
        collectFn(val => {
            resolve(successFn(val))
        },err => {
            reject(failFn(err))
        })
    })
}