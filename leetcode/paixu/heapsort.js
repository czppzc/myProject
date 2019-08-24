//堆排序二种方法，一种是从小到大排，一种是从大到小排
//1种：构造一个大顶堆
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
//第二种：构造一个小顶堆
function heapifys(arr, i, n) {
    if (i >= n) return //出口
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var min = i;
    if (left < n && arr[left] < arr[min]) {
        min = left;
    }
    if (right < n && arr[right] < arr[min]) {
        min = right
    }
    if (min != i) {
        swap(arr, min, i)
        heapifys(arr, min, n)
    }
}
function heap_create(arr) {
    var lastIndex = Math.floor((arr.length - 2) / 2);
    var start
    for (start = lastIndex; start >= 0; start--) {
        //heapify(arr.start,arr.length) //生成一个从大到小的堆，也叫作大顶堆
        heapifys(arr, start, arr.length) //生成一个从小到大的堆，也叫作小顶堆，解决topK 问题
    }

}
function heap_sort(arr) {
    heap_create(arr);//先构建一个堆
    var len;
    for (len = arr.length - 1; len >= 0; len--) {
        swap(arr, len, 0);
        heapify(arr, 0, len)
    }
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

var arr = [3, 1, 2, 7, 9, 0, -1]
heap_create(arr)
console.log(arr)