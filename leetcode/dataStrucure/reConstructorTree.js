//根据前序中序序列重构出二叉树
function reConstructBinaryTree(pre, vin)
{
    if(pre.length == 0 || vin.length == 0 ) {
        return null;
    }
    var binaryTree = new TreeNode(pre[0]);
    var pre_left = [], pre_right = [], vin_left = [], vin_right = [];
      
    var index = vin.indexOf(pre[0]);//找出头结点在中序遍历中的位置
    pre_left = pre.slice(1, index+1);//每一个小二叉树都是前序或者后序遍历，解题关键
    pre_right = pre.slice(index+1);
    vin_left = vin.slice(0, index);
    vin_right = vin.slice(index+1);
      
    binaryTree.left = reConstructBinaryTree(pre_left, vin_left);
    binaryTree.right = reConstructBinaryTree(pre_right, vin_right);
      
    return binaryTree;
}
console.log(reConstructBinaryTree([1,2,4,5,3,6,7]))