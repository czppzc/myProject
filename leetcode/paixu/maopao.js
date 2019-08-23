function maopao(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i;j++){
          var temp;
          if(arr[j]>arr[j+1]){
              temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp
          }
        }
    }
    console.log(arr)
return arr
}
maopao1([1,4,2,12,2,34,43.23,7])
function maopao1(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length-i;j++){
            var temp;
            if(arr[j]>arr[j+1]){
                temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr)
}