//翻转有序数组 然后找值 [1,2,3,4,5,6,7] [5,6,7,1,2,3,4]
function search(numArr, target) {
    var low = 0;
    var high = numArr.length - 1;
    while (low <= high) {
        console.log(low,high)
        var mid = Math.floor((high+low) / 2);
        if (target == numArr[mid]) return mid
        if (numArr[low] <= numArr[mid]) {
            if (numArr[low] <= target && target < numArr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (numArr[mid] < target && target <= numArr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1
}
console.log(search([4,5,6,1,2,3],3))