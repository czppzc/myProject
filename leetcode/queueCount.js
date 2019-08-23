function test(callback) {
    var a = 10;
    setTimeout(() => {
        console.log(200)
    }, 1000)
    requestAnimationFrame(() => {
        console.log(100)
    }, 1000)

    for (var i = 0; i < 10000000; i++) {
        a = i
    }
    console.log(300)
}
/**
 * 
 * @param {次数} n 
 * @param {间隔时间} time 
 */
//setTimeout实现setInterVal
function circleCon(n, time) {
    var i = 0;
    var func = function () {
        if (n > 0) {
            setTimeout(() => {
                console.log(i);
                n--;
                i++;
                func()
            }, time)
        } else {
            console.log("勋魂完毕")
        }
    }
    setTimeout(() => {
        func()
    })
}
/**不注意闭包造成的变量没有被清除地影响，函数只能执行一次，后面的不会再执行，下面进行优化 */
function circleCon(n, time) {
    var i = 0;
    var setIntervals = function () {
        if (n > 0) {
            setTimeout(() => {
                console.log(i);
                n--;
                i++;
                setIntervals()
            }, time)
        } else {
            console.log("执行完毕")
        }
    }
    return setIntervals
}
//setTimeout使用闭包来实现setInterVal，优化变量保存的问题
function setInter(n, time) {
    var setIntervals = function () {
        var count = 1;
        var i = 0; 
        let print = function () {
            if (count <= n) {
                setTimeout(() => {
                    console.log(i);
                    count++;
                    i++;
                    print()
                }, time)
            } else {
                console.log("执行完毕")
            }
        }
        print()
    }
    return setIntervals
}
var setInters = setInter(10, 10)
//事件执行顺序，并行执行
function f1(callback) {
    setTimeout(() => {
        console.log(1);
        callback()
    }, 500)
}

function f2(callback) {
    setTimeout(() => {
        console.log(2);
        callback()
    }, 100)
}

function f3(callback) {
    setTimeout(() => {
        console.log(3);
        callback()
    }, 200)
}

function queueList(list, n) {
    var request = function () {
        if (list.length) {
            list.shift()()
        }
    }
    while (list.length && n > 0) {
        list.shift()(request);
        n--;
    }
}
queueList([f1, f2, f3], 2)

function alerts(arg) {
    console.log(arg)
}
/**这个函数注意闭包的影响，当函数作为一个返回值的时候，会形成闭包，如果不好好处理的话，当调用完函数之后，count就会变成0，所以后面的调用都不起作用 */
function repeat(func, times, wait) {
    var set = function (arg) { //第一次执行set会初始化count,后面几次就不会初始化
        let count = 1;
        let print = function () {
            if (count <= times) {
                setTimeout(() => {
                    func(arg);
                    count++;
                    print()
                }, wait)
            }
        }
        print()
    }
    return set
}
const repeatFunc = repeat(alerts, 4, 3000)
//i的值最后打印的全是8
for (var i = 0; i < 8; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}
//1:块级作用域let解决
for (let i = 0; i < 8; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}
//立即指向函数构造一个函数作用域来解决
for (let i = 0; i < 8; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(i)
        }, j * 1000)
    })(i)
}
function getAdd(){
   // var j=1;
   console.log(j,"开始") //变量提升，全局作用域与函数作用域一样，在最开始打印变量的话都是undefined
   if(true){
       var j=3333;
   }
    var did=function(){
        var j=2;
        console.log(j,"内部")
    }
    console.log(j,"最后")
}
var line = readline().split(" ");
var n = parseInt(line[0]);
var k = parseInt(line[1]);
function results(n,k) {
     var arr = []
     for (var i = 1; i <= n; i++) {
         for (var j = 1; j <= n; j++) {
             if (i % j >= k) {
                 arr.push([i, j])
             }
         }
     }
        print(arr.length)
}
results(n,k)