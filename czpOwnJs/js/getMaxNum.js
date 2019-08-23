/* console.log(parseInt(10,10))
console.log([1,2,3,1].findIndex(v => v==1)) */
var tempArr=[5,5]
var oneArr=[4,4,1,1,1]
var twoArr=[4,3,0,1,3]
var max=0;
var maxN=0;
var targetArr=[];
for(var i=0;i<oneArr.length;i++){
    for(var j=0;j<twoArr.length;j++){
        if((oneArr[i]+twoArr[j])%tempArr[1]>max){
            max=(oneArr[i]+twoArr[j])%tempArr[1]
            maxN=oneArr[i]*1+twoArr[j]*1
        }
    }
    //console.log(max,'test')
    var last=maxN-oneArr[i];
    //console.log(last,'111')
    targetArr.push(max);
    max=0;
    maxN=0;
    var index=twoArr.findIndex(function(v){return v==last})
    twoArr.splice(index,1)
    //console.log(twoArr)
}
console.log(targetArr.sort(function(a,b){return b-a}))