//类似这种求数字相加等于数组某个元素，一般都采用双指针法，两个数
//相加直接使用双指针，三个数相加，固定一个数，另外两个采用双指针
//法，百试百灵
//三数相加
var threeSumClosest = function(nums, target) {
    var newNum=nums.sort((a,b) => a-b);
    var minres=Infinity;
    for(var i=0;i<newNum.length;i++){
        var start=i+1,end=newNum.length-1;
        while(start<end){
         var res=newNum[i]+newNum[start]+newNum[end];
            if(Math.abs(res-target)<Math.abs(minres-target)){
             minres=res;
            }
            if(res>target){
                end--
            }else {
              start++
            }
        }
      
    }
    return minres
};
//四数相加
var fourSum = function(nums, target) {
    var newNums=nums.sort((a,b) => a-b);
    var targetRes=[];
    for(var i=0;i<newNums.length;i++){
       for(var j=i+1;j<newNums.length;j++){
          var start=j+1,end=newNums.length-1;
           while(start<end){
            var res=newNums[i]+newNums[j]+newNums[start]+newNums[end];
               if(res===target){
               targetRes.push([newNums[i],newNums[j],newNums[start],newNums[end]]);
               }else if(res>target){
                 end--
               }else{
                 start++
               }
           }
       }
    }
    return targetRes
};
//两数相加
var twoSum = function(nums, target) {
    const numsMap = {};
    for(let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const result = numsMap[target - value];
        if(result !== undefined) {
            return [result, i];
        }   
        numsMap[value] = i;  
    }
    };
    //回文字符串 找出最大的子回文字符串
    var longestPalindrome = function(s) {
        if (s.length < 2) return s;
        var max = '';
        for (var i = 0; i < s.length; i++) {
            for (var j = 0; j < 2; j++) {
                var left = i;
                var right = i + j; //j=0的时候是奇数的情况 j=1是偶数的情况
                while (s[left] && s[left] === s[right]) {//区分奇数偶数 找出以该字符为中心的最大回文字符串
                    left--;
                    right++;
                }
                //当不为回文串则对当前回文串与上一个回文串进行比较
                //上一回文串(right-1)-(left+1)+1==>right-left-1
                if ((right - left - 1) > max.length) {
                    max = s.substring(left + 1, right);
                }
            }
        }
        return max;
    };
