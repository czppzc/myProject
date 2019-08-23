//除了头结点不满足堆的要求，其余子节点均能满足堆的结构，才能用这种方法
function heapify(arr, i, n) {
    if (i >= n) return
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    if (left < n && arr[left] > arr[max]) {
        max = left;
    }
    if (right < n && arr[right] > arr[max]) {
        max = right
    }
    if (max != i) {
        changeLocation(arr, max, i);
        //因为max位置被交换了，所以可能堆结构被破坏了，我们就从max开始重新heapify一下
        heapify(arr, max, n)
    }

}
function changeLocation(arr, n, m) {
    var temp = arr[n];
    arr[n] = arr[m];
    arr[m] = temp

}
//建堆
function buildHeap(arr, n) {
    //从最后一个拥有非叶子结点的节点从下往上开始heapify,下面的总是满足堆的结构
    var lastIndex = Math.floor((n - 2) / 2);
    var i;
    for (i = lastIndex; i >= 0; i--) {
        heapify(arr, i, n);
    }
}
function heapSort(arr, n) {
    buildHeap(arr, n);//先建堆
    console.log(tree, 'test')
    var j;
    for (j = n - 1; j >= 0; j--) {
        changeLocation(arr, j, 0);
        heapify(arr, 0, j)
        //console.log(tree)
    }
}
var tree = [4, 8,12, 3, 1,12, 6, 1, 2,11]
heapSort(tree, tree.length)
console.log(tree)