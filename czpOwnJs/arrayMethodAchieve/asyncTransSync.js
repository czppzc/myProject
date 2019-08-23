//异步变同步就是通过一个计数，前一个异步没有执行完毕前后一个异步函数等待
function test1(callback) {
    setTimeout(() => {
        console.log(1)
        callback()
    }, 1000)
}
function test2(callback) {
    setTimeout(() => {
        console.log(2)
        callback()
    }, 800)
}
function test3(callback) {
    setTimeout(() => {
        console.log(3)
        callback()
    }, 600)
}
function test4(callback) {
    setTimeout(() => {
        console.log(4)
        callback()
    }, 200)
}
function dequeue(arr) {
    var request = function () {
        if (arr.length) {
            console.log(arr)
            arr.shift()(request)
        }
    }
    arr.shift()(request)
}
dequeue([test1,test2,test3,test4])