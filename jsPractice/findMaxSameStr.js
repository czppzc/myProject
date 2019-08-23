function findMaxSameStr(arr) {
    let hashObj = {};
    let maxSameStr = '';
    if(arr.length<2){
        return arr[0]
    }
    for (let i = 0; i < 1000000; i++) {
        for (let j = 0; j < arr.length; j++) {
            hashObj[arr[j].substring(0, i + 1)] = arr[j].substring(0, j + 1);
        }
        maxSameStr = arr[0].substring(0, i)
        if (!sameIf(hashObj)) {
            break
        }
        delete hashObj[arr[i].substring(0, i + 1)]
    }
    return maxSameStr
}

function sameIf(hashObj) {
    let keyArr = Object.keys(hashObj);
    if (keyArr.length === 1) {
        return true
    }
    return false
}

console.log(findMaxSameStr(['asbaabbb','ab']))