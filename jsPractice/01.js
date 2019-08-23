//reduce实现数组扁平化
function sliceArr(arr) {
    if (!Array.isArray(arr)) {
        return
    }
    let newArr = arr.reduce((pre, cur) => {

        if (Array.isArray(cur)) {
            return pre.concat(cur)
        } else {
            pre.push(cur)
            return pre
        }

    }, [])
    console.log(newArr)
    return newArr
}
function arrSlice(arr){
    if (!Array.isArray(arr)) {
        return []
    }
    var targetArr=[]
    arr.forEach(v => {
        if(Array.isArray(v)){
           targetArr=targetArr.concat(arrSlice(v))
        }else {
            targetArr.push(v)
        }
    })
    return targetArr
}
//console.log(arrSlice([1, [2, 3, [8, 43, 23, 242, 423]], 5, [6,{id:3}]]))
    /* let arr = [[0, 1], [2, 3], [4, 5]]
    let newArr = arr.reduce((pre,cur)=>{
        return pre.concat(cur)
    },[])
    console.log(newArr); */
    function fibonaqie(n){
        if(n==0){
            return 1
        }
        if(n==1){
            return 1
        }
        var sum=0,last=1,next=1;
        for(i=2;i<=n;i++){
          sum=last+next;//f(n)=f(n-1)+f(n-2)
          last=next;//f(n-2)=f(n-1) 变成了下一个的f(n-2)
          next=sum;//f(n-1)=f(n)   变成了下一个的f(n-1)
        }
        console.log(sum)
        return sum
    }
    fibonaqie(1500)