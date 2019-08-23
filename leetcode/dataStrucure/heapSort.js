//满足根节点下面的子节点满足堆的要求堆排序
//调整堆
//parent=Math.floor((i-1)/2)
//左子树：2i+1
//右子树：2i+2
//解题关键
/**
 * 用数组表示一棵树
 * @param {Array} arr 传入的数组
 * @param {Number} n  数组的长度
 * @param {Number} i  下标
 */
//假如根节点下面的子节点满足堆的要求
function heapify(arr, n, i) {
    if (i >= n) {
        return
    }
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
        var temp = arr[i];
        arr[i] = arr[max];
        arr[max] = temp;
        heapify(arr, n, max)
    }
}
function build_heap(arr, n) {
    var lastIndex = Math.floor((n - 1) / 2)
    while (lastIndex >= 0) {
        heapify(arr, n, lastIndex);
        lastIndex--;
    }
}
function sort_heap(arr, n) {
    build_heap(arr, n);

    var i;
    for (i = n - 1; i >= 0; i--) {
        var temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        build_heap(arr, i)
        //heapify(arr,i,0)
    }
}
var tree = [4, 22, 2];
sort_heap(tree, tree.length)
console.log(tree)