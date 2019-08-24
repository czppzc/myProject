//找出海量长度数组中的前k大的数据构造一个小顶堆，时间复杂度o(nlgk)
function heapify(arr, i, n) {
    //console.log(i, '测试')
    if (i >= n) return //出口
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var min = i;
    if (left < n && arr[left] < arr[min]) {
        min = left
    }
    if (right < n && arr[right] < arr[min]) {
        min = right;
    }
    if (min != i) {
        swap(arr, i, min);
        heapify(arr, min, n)
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
    heap_create(dataArr);
    for (var j = k; j < arr.length; j++) {
        //从第k+1个元素开始，判断是否小于堆中的最小数据，如果大于重建堆
        if (arr[j] > dataArr[0]) {
            dataArr[0] = arr[j];
            heapify(dataArr,0,k)
        }
    }
    return dataArr

}
var data = []
for (var i = 0; i < 100000; i++) {
    data[i] = parseInt(Math.random() * 1000000, 10) + 1
}

//heap_sort(data, 0)
console.log(topK(data, 455))
//冒泡思想解决o(kn)
function bubbleTopK(arr,k){
    var targetArr=[];
for(var i=0;i<k;i++){
    for(var j=0;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            var temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
        }
    }
    targetArr.push(arr[arr.length-1-i])
}
return targetArr
}
//console.log(bubbleTopK(data, 100))
