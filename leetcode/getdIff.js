function getDiff(arr1, arr2) {
    var arrs1 = [],
        arrs2 = [];
    for (var i = 0; i < arr1.length; i++) {//找出arr1中存在，arr2中不存在的
        if (arr[2].indexOf(arr1[i]) < 0) {
            arrs1.push(arr1[i])
        }
    }
    for (var j = 0; j < arr2.length; j++) {
        if (arr[1].indexOf(arr2[i]) < 0) {
            arrs2.push(arr2[i])
        }
    }
    return arrs1.concat(arrs2)
}
//背包问题
var weightArr = [1, 2, 3, 4];
var valueArr = [1, 1, 2, 5];

function getMaxValue(n, m) { //m为背包容量（0,2）
    //动态规划
    if (n < 0) {
        return 0
    }
    if (m - weightArr[n] < 0) {
        return getMaxValue(n - 1, m)
    } else {
        return Math.max(getMaxValue(n - 1, m), getMaxValue(n - 1, m - weightArr[n]) + valueArr[n])
    }
}

function getDiffs(A, B) {
    var arr = [];
    for (var i = 0; i < A.length; i++) {
        if (B.indexOf(A[i]) < 0) {
            arr.push(A[i])
        }
    }
    return arr
}