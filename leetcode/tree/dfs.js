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
        },
        right:{
            val:7,
            left:null,
            right:null
        }
    }
}
function dfs(tree){
    var queue=[];
    queue.push(tree);
    while(queue.length){
        var node=queue.pop();
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
        console.log(node.val)
    }
}
dfs(nodes)