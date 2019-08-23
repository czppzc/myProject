//背包问题
/**
 * 有一个包，最多能背m重量的物品，有若干个物品，每个物品的重量和价格都是已知的，求哪种情况下，背包里面放的物品价值最高（这种问题可以引申到各种问题）
 */
//背包问题 使用递归来解决这个问题
var weightArr = [];
var valueArr = [];
for(var i=0;i<100;i++){
   weightArr[i]=Math.floor(Math.random()*800)+1;
   valueArr[i]=Math.floor(Math.random()*800)+1;
}
function getMaxValue(n, m) { //m为背包容量（0,2）
    //动态规划
    if (n < 0) {
        return 0
    }
    if (m - weightArr[n] < 0) {
        return getMaxValue(n - 1, m)
    } else {
        return Math.max(getMaxValue(n - 1, m), getMaxValue(n - 1, m - weightArr[n]) + valueArr[n])
    }
}
//使用动态规划
//f(n)=Math.max(f(n-1)，f(n-1)) 这种选与不选的问题一般都是构建一个二维数组来存储数据进行处理
function dpBag(n,total) {//商品个数
 var eleArr=[];
 for(var i=0;i<n;i++){
     eleArr[i]=[];
 }
 for(var j=0;j<=total;j++){ //j为背包剩下的容量
     if(j>=weightArr[0]){
         eleArr[0][j]=valueArr[0];
     }else {
         eleArr[0][j]=0;
     }
 }
for(var k=1;k<n;k++){
    for(var m=0;m<=total;m++){ //m为背包剩下的容量
        if(m>=weightArr[k]){
            eleArr[k][m]=Math.max(eleArr[k-1][m],eleArr[k-1][m-weightArr[k]]+valueArr[k])
        }else {
            eleArr[k][m]=eleArr[k-1][m]
        } 
    }
}
return eleArr[n-1][total]
}
//console.log(getMaxValue(99,1000))
console.log(dpBag(100,1000),'测试')


















/* console.log(getMaxValue(3,4))
console.log('sdhfskfh'.split(' ')) */
/* for(var i=0;i<100;i++){
    if(i<10){
        console.log(i)
    }else {
        break
    }
} */
//console.log(JSON.stringify)
/* console.log(JSON.stringify({id:1,name:'test',data:[{id:23}]}))
console.log(100000) */
//动态规划从后往前，自顶向上
/**
 *  5 2  //第一个是钱数 第二个是零食的种类数
 *  1 2  //零食的代价
 *  2    //最喜欢的零食种类
 *  2 1  //最喜欢的零食排名
 */
//变一下代码
/* var value=[null,5,1,8,4,6,3,2,4]
function getMax(n){
var pre=[null,0,0,0,1,0,2,3,5];
var opt=[];
 opt[0]=0;
 opt[1]=5;
 for(var i=2;i<=n;i++){
     opt[i]=Math.max(opt[i-1],value[i]+opt[pre[i]])
 }
 return opt[n]
}
console.log(getMax(8)) */