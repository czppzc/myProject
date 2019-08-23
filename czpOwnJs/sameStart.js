//实现并行事件，并且可以根据参数调整
function f1(cb) {
    console.log('123')
    setTimeout(() => {
        console.log(1)
        cb()
    }, 0)
}

function f2(cb) {
    console.log('456')
    setTimeout(() => {
        console.log(2)
        cb()
    }, 200)
}

function f3(cb) {
    console.log('789')
    setTimeout(() => {
        cb()
        console.log(3)
    }, 100)
}

function quene(list, count) {
    var i = 0;
    var request = function() {
        if (list.length) {
            list.shift()(request)
        }
    }
    while (i < list.length && i < count) {
        list.shift()(request);
        i++
    }
    console.log(100)
}
quene([f1, f2, f3], 2)