Function.prototype.method=function (name,fn) {
    this.prototype[name] = fn;
    return this;
};
function lianFun() {};
lianFun.onready = function (fn) {
    window.$ = function () {
        return new lianFun(arguments);
    };
    fn();
};

lianFun.method("click",function (fn) {
    fn();
}).method("change",function (fn) {
    fn();
}).method("load",function (fn) {
    fn();
});
//使用
lianFun.onready(function () {
    $().change(function () {
        console.log("改变了");
    })
});
//第二种链式调用方式
//underScore链式调用
var _ = function(array) {
    this._value = Array.prototype.slice.apply(array);
  }
  _.forEach = function(array, fn) {
    array.forEach(function(v, i, array) {
      fn.apply(v, [v, i, array]);
    })
  };
  _.map = function(array, fn) {
    return array.map(function(v, i, array) {
      return fn.apply(v, [v, i, array]);
    })
  };
  _.chain = function(array) {
    return new _(array);
  }
  for(var i in _) { //首先我们要遍历_
    if(i !== 'chain') { //然后要去除chain
      _.prototype[i] = (function(i) { //把其他的方法都经过处理赋给_.prototype
        return function() { //i是全局变量，我们要通过闭包转化为局部变量
          var args = Array.prototype.slice.apply(arguments);  //取出新方法的参数，其实就fn一个
          args.unshift(this._value);  //把_value放入参数数组的第一位
          if(i === 'map') { //当方法是map的时候，需要修改_value的值
            this._value = _[i].apply(this, args);
          }else { //当方法是forEach的时候，不需要修改_value的值
            _[i].apply(this, args);
          }
          return this;
        }
      })(i);
    }
  }
  _.prototype.value = function() {
    return this._value;
  }
  function test(){
    var a=function(){
      test('世界城广场世界城广场')
    }

  }