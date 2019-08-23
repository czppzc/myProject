function findMaxNum(num){
    let numArr=num.toString().split('');
    let maxNum='';
    for(let i=0;i<numArr.length;i++){
        for(let j=0;j<numArr.length-i;j++){{
            if(numArr[j]<numArr[j+1]){
                let nums=numArr[j+1];
                numArr[j+1]=numArr[j];
                numArr[j]=nums;
                
            }
        }}
    }
    for(let k=0;k<numArr.length;k++){
        maxNum+=numArr[k]
    }
    if(maxNum<=num){
        return -1
    }
    return maxNum
}
console.log(findMaxNum(645321))