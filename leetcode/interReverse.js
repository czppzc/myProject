//整数反转，不能用字符串函数来处理
function interReverse(num){
    var res=0;
    while(num>0){
        var remain=num%10;
        res=res*10+remain;
        num=Math.floor(num/10)
    }
    return res
}