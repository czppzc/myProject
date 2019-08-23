//二叉搜索树的构建以及各种方法实现
function Tree() {
    var Node = function(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    var root = null;
    var nodes = '未找到'
    var insertNode = function(node, newNode) {
            if (node.value > newNode.value) { //往左边找
                if (node.left) {
                    insertNode(node.left, newNode)
                } else {
                    node.left = newNode
                }
            } else {
                if (node.right) {
                    insertNode(node.right, newNode)
                } else {
                    node.right = newNode
                }
            }
        }
        //插入一个新数据
    this.insert = function(value) {
        var newNode = new Node(value);
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }

    }
    var traverse = function(node, callback) {
            if (node === null) return
            callback(node.value) //前序遍历
            traverse(node.left, callback);
            //callback(node.value) //中序遍历
            traverse(node.right, callback);
            //callback(node.value) //后序遍历

        }
        //遍历节点
    this.traverse = function(callback) {
            traverse(root, callback)
        }
        //搜索某个节点是否存在
    var search = function(node, value) {
        if (node == null) return '没有该值'
        if (node.value > value) {
            search(node.left, value)
        } else if (node.value < value) {
            search(node.right, value)
        } else {
            nodes = node
            return
            /* console.log(node)
            return node */
        }
        return nodes
            /* if (node === null) return
            if (node.value === value) {
                nodes = node;
                return nodes
            }
            search(node.left, value);
            search(node.right, value);
            return nodes */
    }
    this.search = function(value) {
            return search(root, value)
        }
        //移除节点
    this.remove = function(value) {

    }
    var getMin = function(node) {
            while (node && node.left) {
                node = node.left;
            }
            console.log(node)
            return node
        }
        //获取最小节点值
    this.getMin = function() {
        getMin(root)

    }
    this.getRoot = function() {
        console.log(root);
        return root
    }
}
var t = new Tree();
t.insert(10);
t.insert(8);
t.insert(12);
t.insert(5);
t.insert(1);
t.getRoot()
t.traverse((value) => {
    console.log(value)
})
console.log(t.search(12), "test")
t.getMin()