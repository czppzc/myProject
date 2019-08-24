//数组向右移动 每移动一位相当于把最后一位移动到数组第一位的前面
//空间复杂度必须为1，不能借助另外的数组
//不符合规定的方法
function rightMove(arr,k){
    if(!arr.length) return []
    var rightArr=arr.splice(arr.length-k,k);
    return rightArr.concat(arr)
}
function simpleQu(arr,k){
    for(var i=0;i<k;i++){
        arr.shift(arr.pop())
    }
}
console.log(rightMove([1,2,3,4,5,6],4))