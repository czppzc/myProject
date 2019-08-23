
/**数组去重 */

function quchong(arr){
    let arrs=[],hash={};
    for(let i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
            arrs.push(arr[i]);
            hash[arr[i]]=true
        }
    }
return arrs
}

console.log(quchong([1,2,3,4,3,23,24,2,24]))