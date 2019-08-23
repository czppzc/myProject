var nodes={
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null,
        },
        right:{
            val:5,
            left:null,
            right:null
        }
    },
    right:{
        val:3,
        left:{
            val:6,
            left:null,
            right:null,
        }
    }
}
function bfs(tree,n){
    var queue=[],orderNum=[];
    tree.order=1;
    queue.push(tree);
   while(queue.length){
      var node=queue.shift();
      if(node.left){
          node.left.order=node.order+1;
          queue.push(node.left)
          orderNum.push(node.left)
      }
      if(node.right){
        node.right.order=node.order+1;
        queue.push(node.right)
        orderNum.push(node.right)
    }
    console.log(node.val)
    } 
    //console.log(orderNum)
    return orderNum.filter(v => v.order==n).length
}
console.log(bfs(nodes,3))
function test(n){
    if(n==0) return
    console.log(2) 
    test(n-1);
    console.log(3)
    test(n-1);
}
test(3)