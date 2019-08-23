function charu(arr){
    for(var i=1;i<arr.length;i++){
        var temp=arr[i];
        var j=i;
       while(j>0&&temp<arr[j-1]){
           arr[j] =arr[j-1];
           arr[j-1]=temp;
           j--;
       }
    }
    console.log(arr)
    return arr
}
charu2([1,2,4,45,4,534,3,32,3])
function charu1(arr){
    for(var i=1;i<arr.length;i++){
        for(var j=i,temp=arr[i];j>0&&temp<arr[j-1];j--){
            arr[j]=arr[j-1];
            arr[j-1]=temp;
        }
    }
    console.log(arr)
}
function charu2(arr){
    for(var i=1;i<arr.length;i++){
        var j=i,temp=arr[i];
        while(j>0&&temp<arr[j-1]){
            arr[j]=arr[j-1];
            arr[j-1]=temp;
            j--;
        }
    }
    console.log(arr)
}