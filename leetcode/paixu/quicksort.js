function quicksort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var leftArr = [];
    var rightArr = [];
    var midIndex = Math.floor(arr.length / 2);
    var midValue = arr[midIndex];
    arr.splice(midIndex, 1);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return quicksort(leftArr).concat(midValue, quicksort(rightArr))
}
var data = []
for (var i = 0; i < 10000000; i++) {
    data[i] = parseInt(Math.random() * 1000000, 10) + 1
}
console.log(quicksort(data))