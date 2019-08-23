var nodes = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: {
                val: 8,
                left: {
                    val: 9,
                    right: null
                },
                right: null
            },
            right: null,
        }
    }
}
//层次遍历，分层查值
function treeBfs(node, num) {
    var level = 0;
    var index = 0;
    var targetArr = [];
    var queue = [];
    queue.push(node)
    while (queue.length) {
        var lev = [];
        var len = queue.length;
        for (var i = 0; i < len; i++) {
            var currentNode = queue.shift();
            if (currentNode.val == num) {
                index = level;
            }
            lev.push(currentNode.val)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        level++;
        targetArr.push(lev)
    }
    return targetArr
}

console.log(treeBfs(nodes, 9))