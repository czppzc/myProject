//自己写一下最下和那个回文字符串 
//1.中心扩展法
function longPailandStr(str) {
    if (str.length <= 1) return str
    var res = '';
    var maxLength = 0;
    var calcStr = function (str, left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                res = str.substring(left, right + 1)
            }
            left--;
            right++;
        }
    }
    for (var i = 0; i < str.length; i++) {
        calcStr(str, i, i);
        calcStr(str, i, i + 1)
    }

    return res
}
//动态规划
//两大步骤
//1 状态定义 dp[i][j] 字符串从i到j是否是回文串 如果是 当前长度是j-i+1
//2、dp方程：dp[i][j]= s[i]===s[j]&&dp[i+1][j-1]
function longPailandStr1(str) {
    if (str.length <= 1) return str
    var dp = [];
    var res = '';
    var maxLength = 0;
    for (var i = 0; i < str.length; i++) {
        dp.push([])
    }
    if (str[0] == str[1]) {
        res = str.substring(0, 2);
        maxLength = 2;
    }
    for(var j=2;j<str.length;j++){
        dp[j][j]=true;
        for(var k=0;k<j;k++){
            dp[k][j]=str[k]==str[j]&&(j-k<=2||dp[k+1][j-1]);
            if(dp[k][j]&&(j-k+1)>maxLength){
             res=str.substring(k,j+1);
             maxLength=j-k+1
            }
        }
    }
    return res
}
//最长回文字符串
//中心扩散法
function getMaxLen(str){
    if(str.length<=1) return str
    var maxLen=0;
    var maxStr='';
    var calStr=function(str,left,right){
     while(left>=0&&right<str.length&&str[left]==str[right]){
        /*  if(right-left+1>maxLen){
             maxLen=right-left+1;
             maxStr=str.substring(left,right+1)
         } */
         left--;
         right++;
     }
     if(right-left-1>maxLen){
         maxLen=right-left-1;
         maxStr=str.substring(left+1,right)
     }
    }
    for(var i=0;i<str.length;i++){
        calStr(str,i,i);
        calStr(str,i,i+1);
    }
    return maxStr
}