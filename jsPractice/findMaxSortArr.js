let arrs = [];

function getArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            getArr(arr[i])
        } else {
            arrs.push(arr[i])
        }
    }
    return arrs
}
console.log(getArr([1, [3, 2, [45, 45, 78]],
    [6, 7, 8], 4
]))