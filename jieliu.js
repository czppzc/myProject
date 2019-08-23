/* function throttle(handler, wait){
    console.log(10)
    wait = wait || 300;
    var lastTime = 0;
  
    return function(){
      var _self = this,
      _args = arguments;
  
      var nowTime = new Date().getTime();
      if((nowTime - lastTime) > wait){
        handler.apply(_self, _args);
        lastTime = nowTime;
      }
    }
  }
  const jieliu=throttle((a) => {
    console.log(a)
},5000);
  setInterval(() => {
    jieliu("我爱你")
  },1000) */

//闭包,节流
function throttle(fn, wait) {
    var lastTime = 0,timeout=null;
    wait = wait || 1000;
    return function(...args) {
        var self = this;
        var nowTime = new Date().getTime();
        if(timeout){
            clearTimeout(timeout)
        }
        if (nowTime - lastTime >= wait) {
            fn.apply(self, args);
            lastTime = nowTime;
        }else {
        timeout= setTimeout(() => {
                fn.apply(self,arg)
            },nowTime - lastTime );
        }
    }
}
/* const jieliu = throttle((a) => {
    console.log(a)
}, 3000);
setInterval(() => {
        jieliu("我爱你")
    }, 1000) */
//防抖
function debounce(fn, time = 2000) {
    let fns = null;
    return function(...args) {
        if (fns) {
            console.log('测试')
            clearTimeout(fns)
        }
        fns = setTimeout(() => {
            console.log('测试1')
            fn.apply(this, args)
        }, time)
    }
}
let debounes = debounce((args) => {
    console.log(args)
})
setInterval(() => {
    debounes("我爱你")
}, 1000)
//优化的防抖函数
function debounce(fn,time,immediate){ 
    var timeout = null;
    return function(){
        if(timeout){
          clearTimeout(timeout)
        }
        if(immediate){
          //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
          var doNow = !timeout
          //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
          timeout = setTimeout(function(){
            timeout = null
          },time)
          //立即执行
          if(doNow) fn()
        }else{
          timeout = setTimeout(fn,time) 
        }
       console.log('after'+timeout)
    }
 }
 //优化后的节流函数 这个节流函数可以解决最后一次连续触发时间小于时间间隔时事件不触发导致最后滚动条停下的位置不准
 function throttle(fn,time){ 
    var timeout,
        startTime = new Date()
    return function(){
       var context = this,
           args = arguments,
           curTime = new Date(),
           remaining = time - (curTime - startTime);
       clearTimeout(timeout)
    if(remaining <=0){
          fn.apply(context,args)
          startTime = curTime
       }else{
           timeout = setTimeout(fn,remaining) 
       }

    }
 }
/*  上面介绍的抖动与节流实现的方式都是借助了定时器 setTimeout ，但是如果页面只需要兼容高版本浏览器或应用在移动端，又或者页面需要追求高精度的效果，那么可以使用浏览器的原生方法 rAF（requestAnimationFrame）。
简单而言，使用 requestAnimationFrame 来触发滚动事件，相当于上面的：throttle(func, xx, 1000/60) //xx 代表 xx ms内不会重复触发事件 handler */

function fibonaqie(n){
    if(n==0){
        return 1
    }
    if(n==1){
        return 1
    }
    var next=1,pre=1,total=0;
    for(var i=2;i<=n;i++){
       total=next+pre;
       pre=next;
       next=total;
    }
   return total
}
function f1(){
    for(var i=0;i<100;i++){
        console.log(i)
    }
}
function f2(){
    console.log("天涯海角")
}
f1();
f2();