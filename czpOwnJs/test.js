/* function test(obj) {
    Object.defineProperty(obj, 'type', {
        value: '女孩',
        enumerable: true //可枚举
    })
    for (let prop in obj) {
        console.log(prop, 'test')
    }
    for (let prop of obj) {
        console.log(prop)
    }
}
test({ name: '小明', age: 16 })
let a = { id: 1, name: 2 };
a.prototype.func = function() {

}
let b = Object.create(a);
console.log(b.__proto__)
console.log(a === b) */
/* function Test() {}
Test.prototype.mytest = function(alue1, value2) {
    console.log(10)
}
console.log("我成功的攻击了代码") */
function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length<1){
        return 0
    }
    if(rotateArray.length==1){
        return rotateArray[0]
    }
    var low=0,high=rotateArray.length-1,mid;
    while(low<high){
         mid=Math.floor((low+high)/2);
        if(rotateArray[mid]>=rotateArray[low]){
            low=mid+1;
        }
        if(rotateArray[mid]<=rotateArray[high]){
           high=mid;
        }
    }
    return rotateArray[low]
}
minNumberInRotateArray([8,9,10,11,12,1,2,3,4,5,6,7])