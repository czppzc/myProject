/* function twoNumPlus(arr, target) {
    var arr = arr.sort((a, b) => a - b);
    var res = [];
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        if (arr[start] + arr[end] > target) {
            end--;
        } else if (arr[start] + arr[end] < target) {
            start++;
        } else {
            res.push([arr[start], arr[end]]);
            start++;
            end--;
        }
    }
    console.log(res)
    return res
}
var arrs=[1,8,2,7,4,5,3,6];
twoNumPlus(arrs,9); */
/* function twoNumPlus(arr,target){
    var obj={};
    var res=[];
    for(var i=0;i<arr.length;i++){
        obj[arr[i]]=i;
    }
    for(var j=0;j<arr.length;j++){
        var remain=target-arr[j];
        var remainArr=Object.keys(obj).filter(v => v==remain);
        if(remainArr[0]&&obj[remainArr[0]]>j){
         res.push([arr[j],remainArr[0]])
        }
    }
    console.log(res)
    return res
}
var arrs=[1,8,2,7,4,5,3,6];
twoNumPlus(arrs,9); */
function CalSum(array, result) {
    //从1循环到2^N
    var res = [];
    for (var i = 1; i < 1 << array.length; i++) {
        var sum = 0;
        var temp = "";
        for (var j = 0; j < array.length; j++) {
            if ((i & 1 << j) != 0)//用i与2^j进行位与运算，若结果不为0,则表示第j位不为0,从数组中取出第j个数
            {
                sum += array[j];
                temp += array[j] + "+";
                //console.log(temp)
            }
        }
        if (sum == result) {
            var t = temp.split('+')
            var p = [];
            for (var j = 0; j < t.length; j++) {
                if (t[j] != '') {
                    p.push(t[j])
                }
            }
            res.push(p)
        }
    }
    console.log(res)
    return res
}

var aa = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var bb = 10;
CalSum(aa, bb)
function twoNumPlus(arr, target) {
    var obj = {};
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var diff = target - arr[i];
        if (obj[diff]) {
            res.push([i, obj[diff]])
        } else {
            obj[diff] = i;
        }
    }
    return res
}
//自己写一下最下和那个回文字符串 aba abba
function longPailandStr(str) {
    if (str.length <= 1) return str
    var res = '';
    var maxLength = 0;
    var calcStr=function(str,left,right){
        while(left>=0&&right<str.length&&str[left]===str[right]){
         if(right-left+1>maxLength){
             maxLength=right-left+1;
             res=str.substring(left,right+1)
         }
         left--;
         right++;
        }
       }
    for (var i = 0; i < str.length; i++) {
        calcStr(str,i,i);
        calcStr(str,i,i+1)
    }
   
    return res
}