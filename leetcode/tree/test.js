function Tree(val) {
    this.val = val;
    this.left = null;
    this.right = null;

}
//层次构建二叉树
function createTreeByOrder(arr) {
    var root = new Tree(arr[0]);
    var dataArr = [root];
    var i = 0;
    while (dataArr.length > 0) {
        var data = dataArr.shift();
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        if (left < arr.length) {
            if (!!data) {
                data.left = !!arr[left] ? new Tree(arr[left]) : null;
                dataArr.push(data.left)
            }
            //dataArr.push(data?data.left:null)
        }
        if (right < arr.length) {
            if (!!data) {
                data.right = !!arr[right] ? new Tree(arr[right]) : null;
                dataArr.push(data.right)
            }
            //dataArr.push(data?data.right:null)
        }
        i++;
    }
    return root
}
var arr = [1, 2, 4,3,null,null,5]
console.log(JSON.stringify(createTreeByOrder(arr)))