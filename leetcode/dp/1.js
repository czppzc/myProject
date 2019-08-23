//找数组中不相邻元素的最大和
var arr=[1,2,4,1,7,11,3];
function rec(arr,i){
if(i==0){
    return arr[0]
}
if(i==1){
    return Math.max(arr[0],arr[1])
}
return Math.max(rec(arr,i-1),rec(arr,i-2)+arr[i])
}
console.log(rec1(arr,6))
function rec1(arr,i){
    var opt=[];
    if(i==0){
        return arr[0]
    }
    if(i==1){
        return Math.max(arr[0],arr[1])
    }
    opt[0]=arr[0];
    opt[1]=Math.max(arr[0],arr[1]);
    for(var j=2;j<=i;j++){
       opt[j]=Math.max(opt[j-1],opt[j-2]+arr[j])
    }
    return opt[i]
    }