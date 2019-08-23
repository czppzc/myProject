//数组去重

let dataarr = [{ id: 1, name: '天涯' }, { id: 2, name: '海角' }]

function ArraySort(arr) {
    let result = [],
        isRepeat;
    for (let i = 0; i < arr.length; i++) {
        isRepeat = false
        for (let j = 0; j < result.length; j++) {
            if (arr[i] == result[j]) {
                isRepeat = true
                break
            }
        }
        if (!isRepeat) {
            result.push(arr[i])
        }
    }
    return result
}

function arraySorts(arr) {
    let result = [],
        hash = {}
    arr.map(item => {
        console.log(hash[item])
        if (!hash[item]) {
            result.push(item);
            hash[item] = true;
        }
    })
    return result
}

function aser(arr) {
    return arr.map(v => `<div>1234</div>`)
}

function stringArr(arr) {
    let arrs = arr.map(v => JSON.stringify(v));
    return arrs
}

//console.log(arraySorts([1,2,3,1,1,1,1,1,1,3,6,12,3,23,23,231,23,123,23,23,23,21,12,31,31,231,1,1,1,1]))
console.log(stringArr(dataarr))