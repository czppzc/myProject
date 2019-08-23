Function.prototype.myApply = function(context) {
    console.log(context)
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    console.log(context.fn)
    let result
    // 处理参数和 call 有区别
    if (arguments[1]) {
      result = context.fn(...arguments[1])
    } else {
      result = context.fn()
    }
    delete context.fn
    console.log(result,'test')
    return result
  }
  function myfunc(){
      console.log(this,"无线测试")
      console.log(this.a)
  }
  let obj={
    a:18
}
  //myfunc.myApply(obj)
  let obj1={
      a:1,
      fn:function(){
          //console.log(this)
          return this.a
      }
  }
  console.log(obj1.fn());
  let func=obj1.fn;
  console.log(func())
  console.log(this)
 