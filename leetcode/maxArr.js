//最大连续子序列[-2,1,-3,4,-1,2,1,-5,4]
function getMaxArrList(arr){
    var res=0;
    var max=Math.max(...arr);
    if(max<=0){
        return max
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            res+=arr[i]
        }
    }
    return res
}
var arr=[-1,-2,-3,-4,-7,0,-2]
//console.log(getMaxArrList(arr))
function maxSubArray(nums) {
    if (nums.length<=0) {
        return 0;
    }
    
    // 一段一段的子数列的和
    var  sum = nums[0];
    var  res = nums[0];
    // 动态规划的题
    for (var  i = 1; i < nums.length; i++) {
        if (sum > 0) {
            // 前面累加的增长 > 0 那就加上我自己再看看
            sum +=nums[i];
        } else {
            // 前面累加的增长 < 0  前面的所有累加的增长都白干了，那就从这一次开始看后面的吧
            sum = nums[i];
        }
        // sum就等于从前面某一天到今天的增长
        if (sum > res) {
            res = sum;
        }
    }
    
    return res;
}

function addNum(a,b){
    return a+b
}
function curryAddNum(a){
    return function(b){
         return a+b
    }
}