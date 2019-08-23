
var arr=[1,3,5,4,6,7,2,8,9,4]
var newArr=arr.map((v,i) => {
    return {index:i,ele:v}
}).sort((s1,s2) => {
   return s1.ele-s2.ele
})
//console.log(newArr.)
function numAddTarget(arr,target){
var left=0;
var right=arr.length-1;
var targetIndex=[];
while(left<right){
    var num=arr[left].ele+arr[right].ele;
    if(num>target){
        right--
    }
    if(num<target){
        left++
    }
    if(num==target){
        targetIndex.push([arr[left].index,arr[right].index]);
        left++;
        right--;
    }
}
return targetIndex
}
//利用一个对象
function numtarget(nums,target){
    const numsMap = {};
for(let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const result = numsMap[target - value];
    if(result !== undefined) {
        return [result, i];
    }   
    numsMap[value] = i;  
}
}
numAddTarget(newArr,8)