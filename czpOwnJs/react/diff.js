var a=[1,2,4,6,7,11]
var b=[3,4,5,6,9,10]
function concatArr(arr1,arr2){
    var targetArr=[];
    while(arr1.length>0||arr2.length>0){
        var l1=arr1.length,l2=arr2.length;
        if(l1==0) return arr2.concat(targetArr)
        if(l2==0) return arr1.concat(targetArr)
        if(arr1[l1-1]<arr2[l2-1]){
            targetArr.unshift(arr2.pop())
        }else{
            targetArr.unshift(arr1.pop())
        }
        //console.log(targetArr)
    }
    return targetArr

}
//console.log(concatArr(a,b))
var tree1={
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null
        },
        right:null
    },
    right:{
        val:3,
        left:{
            val:5,
            left:null,
            right:null
        },
        right:null
    }
}
var tree2={
    val:1,
    left:{
        val:6,
        left:{
            val:4,
            left:null,
            right:null
        },
        right:null
    },
    right:{
        val:3,
        left:{
            val:5,
            left:null,
            right:null
        },
        right:null
    }
}
var diffCont=[];
function diff(t1,t2){
    //console.log(t1.val,t2.val)
    if(!t1||!t2){
        if(t1){
           diffCont.push(t1)
        }
        if(t2){
          diffCont.push(t2)
        }
        return 
    }
    if(t1.val==t2.val){
     if(t1.left||t2.left){
        // console.log(t1.left.val,t2.left.val,'测试')
        diff(t1.left,t2.left)
     }
     if(t1.right||t2.right){
       diff(t1.right,t2.right)
     }
    }else {
       // console.log("shdfkjsafhsadjkf")
        diffCont.push(t1)
    }

}
diff(tree1,tree2)
console.log(JSON.stringify(diffCont))