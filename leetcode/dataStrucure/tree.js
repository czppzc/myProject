function Tree() {
    var Node = function (value) {
        this.value = value;
        this.left = null,
        this.right = null

    }
    var headNode = null;
    var parentNode = null;
    var insertNode = function (root, node) {
        if (node.value > root.value) {
            if (root.right) {
                insertNode(root.right, node)
            } else {
                root.right = node;
            }
        } else {
            if (root.left) {
                insertNode(root.left, node)
            } else {
                root.left = node;
            }
        }
    }
    this.insert = function (value) {
        var newNode = new Node(value);
        if (headNode == null) {
            headNode = newNode;
        } else {
            insertNode(headNode, newNode)
        }
    }
    var searchNode = function (value, node) {
        var nodes = null;
        if (node == null) return null
        if (node.value > value) {
            parentNode = node;
            nodes = searchNode(value, node.left)
        }
        if (node.value < value) {
            parentNode = node;
            nodes = searchNode(value, node.right)
        }
        if (node.value == value) {
            return node
        }
        return {
            targetNodes: nodes,
            parentNode: parentNode
        }
    }
    this.search = function (value) {
        return searchNode(value, headNode)
    }
    var traverse = function (node, callback) {
        if (node == null) return
        callback(node.value) //前序遍历
        traverse(node.left, callback)
        traverse(node.right, callback)
    }
    this.traverse = function (callback) {
        traverse(headNode, callback)
    }
    //明天做一下这个  找到移除节点的父节点和子节点 改变指向
    var removeNodes = function (value,nodes) {
        console.log(nodes)
        if (nodes != null) {
            if (nodes.targetNodes.left == null && nodes.targetNodes.right == null) {
                if (nodes.parentNode.left.value == value) {
                    nodes.parentNode.left = null;
                } else {
                    nodes.parentNode.right = null;
                }
            } else if (nodes.targetNodes.left == null) {
                if (nodes.parentNode.left.value == value) {
                    nodes.parentNode.left = nodes.targetNodes.right;
                } else {
                    nodes.parentNode.right = nodes.targetNodes.right;;
                }
            } else if (nodes.targetNodes.right == null) {
                if (nodes.parentNode.left.value == value) {
                    nodes.parentNode.left = nodes.targetNodes.left;
                } else {
                    nodes.parentNode.right = nodes.targetNodes.left;;
                }
            } else {
                if (nodes.parentNode.left.value == value) {
                    nodes.parentNode.left = nodes.targetNodes.right;
                    nodes.targetNodes.right.left=nodes.targetNodes.left
                } else {
                    nodes.parentNode.right = nodes.targetNodes.right;
                    nodes.targetNodes.right.left=nodes.targetNodes.left

                }
            }
        }
    }
    this.remove = function (value) {
        var nodes = this.search(value);
        removeNodes(value,nodes)
    }
    this.getTree = function () {
        return headNode
    }
}