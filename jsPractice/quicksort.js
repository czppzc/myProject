/* //快速排序
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var targetindex = Math.floor(arr.length / 2);
    var targetValue = arr.splice(targetindex, 1);
    // console.log(targetValue)
    var leftarr = [];
    var rightarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < targetValue) {
            leftarr.push(arr[i])
        } else {
            rightarr.push(arr[i])
        }

    }
    return quicksort(leftarr).concat([targetValue], quicksort(rightarr))
}
let a = quicksort([3, 23, 12, 35, 373, 24, 10, 67, 21]);

function absoarr(arr) {
    let arrs = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arrs = arrs.concat(absoarr(arr[i]))
        } else {
            arrs.push(arr[i]);
        }
    }
    return arrs
}
console.log(absoarr(a));
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var midIndex = Math.floor((0 + arr.length) / 2);
    var midVal = arr.splice(midIndex, 1); //splice返回切割的数组，同时改变原数组大小
    var leftArr = [];
    var rightArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < midVal) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return quicksort(leftArr).concat(midVal, quicksort(rightArr))
} */
class EventEmitter {
    constructor() {
        this.event = {}
    }
    on(type, callback, times) { //times可以定义监听事件执行的次数
        times = times || false
        if (this.event[type]) {
            this.event[type].push({ fn: callback, times: times })
        } else {
            this.event[type] = [];
            this.event[type].push({ fn: callback, times: times })
        }
    }
    off(type, callback) {
        this.event[type] = this.event[type].filter(v => v.fn != callback)
        if(this.event[type].length<=0){
            delete this.event[type]
        }
    }
    //emit可以设置传递参数
    emit(type, ...arg) {
        if (!this.event[type]) {
            console.log('我报错了')
            throw new Error("没有对应事件")
        }
        this.event[type].forEach(v => {
            v.fn.apply(null, arg);
            if (v.times) {
                v.times--;
                if (v.times <= 0) {
                    this.off(type, v.fn)
                }
            }
        })
    }
    once(type, callback) {
        this.on(type, callback, 1)

    }
}
var eventEmitter = new EventEmitter();
eventEmitter.on('alarm', (val) => {
    console.log(val)
})
eventEmitter.on('alarm', (val) => {
    console.log(val + '2b')
})
eventEmitter.on('theme', (val) => {
    console.log("变成绿色"+val)
})
eventEmitter.once('salad', (val) => {
    console.log("吃沙拉"+val)
})
eventEmitter.emit('alarm', '我成功的被触发了')
eventEmitter.emit('theme', '的草原')
eventEmitter.emit('salad', '好吃吗')
eventEmitter.emit('salad', '好吃吗')