//作用域
var a=9;
function test(a){
    console.log(a)
    a=18;
    console.log(a,"函数内部")
}
test(6)
console.log(a,"全局")
//写一个找二叉树的路径和为target的路径函数
var res=[],path=[];
function getTreeRoad(root,target){
   find(root,target)
   return res
}
function find(root,num){
    if(!root) return 
    path.push(root.val) //把每个路径的值存起来
    if(!root.left&&!root.right&&root.val==num){
        res.push([].concat(path)) //如果直接使用path,由于数组为引用数据类型，path.pop()会导致最后的res为空,所以注意
    }else {
        if(root.left){
            find(root.left,num-root.val)
        }
        if(root.right){
            find(root.right,num-root.val)
        }
    }
    path.pop() //这个很关键，由于递归的特性，保证在进入另一条路径前将path清空
} 
function deepClone(obj){
    if(typeof obj ==='object'&&obj){
          let  cloneObj=Array.isArray(obj)?[]:{};
          for(let prop in obj){
              cloneObj[prop]=deepClone(obj[prop])
          }
          return cloneObj
    }else {
        return obj
    }
}
//合并有序数组
function hebingArr(arr1,arr2){
    var target=[];
    while(arr1.length||arr2.length){
        if(!arr1.length) return target.concat(arr2)
        if(!arr2.length) return target.concat(arr1)
         if(arr1[0]<arr2[0]){
             target.push(arr1.shift())
         }else {
            target.push(arr2.shift());
            
         }
    }
    return target
}