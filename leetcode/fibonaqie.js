//斐波那契数列 一个比较简单的动态规划问题
function getResult(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    var num1 = 0,
        num2 = 1,
        temp;
    for (var i = 2; i <= n; i++) {
        console.log('进来了吧')
        temp = num2;
        num2 = num1 + num2;
        num1 = temp
    }
    console.log(num2)
    return num2
}
function another(n){
    let res;
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    res=another(n-1)+another(n-2)
    return res
}
getResult(7)
function fibonaqie(n){
    if(n==0){
        return 0
    }
    if(n==1){
      return 1
    }
    var res=0;
    var last=0;
    var next=1;
    for(var i=2;i<=n;i++){
        res=last+next;
        last=next;
        next=res;
    }
    return res
}
var weight=[4,2,5,3,7,9]
var valueArr=[3,2,6,4,9,11]
function beibao(total,n){//total 背包最大容量  n 商品种类
    if(n<0){
        return 0
    }
    if(total-weightArr[n-1]<0){
        return beibao(total,n-1)
    }
    return Math.max(beibao(total-weight[n-1],n-1)+valueArr[n-1],beibao(total,n-1))
}