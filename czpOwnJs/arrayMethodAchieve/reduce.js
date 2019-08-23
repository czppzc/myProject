/* let fs=require('fs');
let outPut=fs.readFileSync('./1.txt','utf8').trim().split('\n').map(v => v.split(' ')).reduce((pre,v) => {
    pre[v[0]]=pre[v[0]]||[]; 
    pre[v[0]].push({
        name:v[1],
        price:v[2],
        quantity:v[3]
    })
  return pre
},{}) */
/* let outPut=fs.readFile('./1.txt',(err,data) => {
   console.log(data.toString())
}) */
//console.log(outPut)
var arr = [1, 2, 3, 4, 5, 6]
arr.reduce((pre, v, i) => {
  console.log(pre, '1')
  console.log(v, '2')
  console.log(i, 'test')
  return v
}, 0)
Array.prototype.myMap = function (fn) {
  fn = typeof fn === 'function' ? fn : v => v;
  var newArr = [];
  this.reduce((pre, v, i) => {
    newArr[i] = fn(v)
    return v
  }, 0)
  return newArr
}
//我实现的reduce
Array.prototype.myReduce = function (fn, initData) {
  var returnData;
  if (typeof initData != 'undefined') {
    returnData = initData;
    for (var i = 0; i < this.length; i++) {
      returnData = fn(returnData, this[i], i, this)
    }
  } else {
    returnData = this[0];
    for (var j = 1; j < this.length; j++) {
      returnData = fn(returnData, this[j], j, this)
    }
  }
  return returnData
}
//官方实现的reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function (callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError('Array.prototype.reduce ' +
          'called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback +
          ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // Steps 3, 4, 5, 6, 7      
      var k = 0;
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
          throw new TypeError('Reduce of empty array ' +
            'with no initial value');
        }
        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.      
        k++;
      }

      // 9. Return accumulator.
      return value;
    }
  });
}