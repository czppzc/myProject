function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function createTree(arr) {
    if (!arr || !arr.length) return null;
    var root = new TreeNode(arr.shift());
    var list = [root];
    while (arr.length) {
        var tmpList = [];
        for (var i = 0; i < list.length; i++) {
            var p = list[i];
            var left = arr.shift();
            if (left !== null) {
                p.left = new TreeNode(left);
            }
            var right = arr.shift();
            if (right !== null) {
                p.right = new TreeNode(right);
            }
            if (p.left) {
                tmpList.push(p.left);
            }
            if (p.right) {
                tmpList.push(p.right);
            }
        }
        list = tmpList;
    }
    return root;
}
var arr = [1, 2, 4,3,null,null,5];
var root = createTree(arr);
console.log(JSON.stringify(root));