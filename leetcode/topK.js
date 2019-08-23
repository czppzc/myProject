//找出海量长度数组中的前k大的数据 使用堆排
function heapify(arr, i, n) {
    //console.log(i, '测试')
    if (i >= n) return //出口
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    if (left < n && arr[left] > arr[max]) {
        max = left
    }
    if (right < n && arr[right] > arr[max]) {
        max = right;
    }
    if (max != i) {
        swap(arr, i, max);
        heapify(arr, max, n)
    }

}
function heap_create(arr) {
    var lastIndex = Math.floor((arr.length - 2) / 2);
    //console.log(lastIndex)
    var start
    for (start = lastIndex; start >= 0; start--) {
        heapify(arr, start, arr.length)
    }

}
function heap_sort(arr) {
    heap_create(arr);//先构建一个堆
    var len;
    for (len = arr.length - 1; len >= 0; len--) {

        swap(arr, len, 0);
        //console.log(arr,'test')
        heapify(arr, 0, len)
        //console.log(arr)
    }
    // return [].concat(arr)
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}
function topK(arr, k) {
    var dataArr = [];
    for (var i = 0; i < k; i++) {
        dataArr[i] = arr[i]
    }
    heap_sort(dataArr);
    for (var j = k; j < arr.length; j++) {
        //从第k+1个元素开始，判断是否小于堆中的最小数据，如果大于重建堆
        if (arr[j] > dataArr[0]) {
            dataArr[0] = arr[j];
            heap_sort(dataArr)
        }
    }
    return dataArr

}
var data = []
for (var i = 0; i < 100000; i++) {
    data[i] = parseInt(Math.random() * 1000000, 10) + 1
}

//heap_sort(data, 0)
console.log(topK(data, 15))