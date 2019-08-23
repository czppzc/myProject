function LinkList() {
    //辅助节点
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }
    var head = null; //链表头
    var length = 0;
    //向链表尾部插入
    this.append = function(element) {
            var newNode = new Node(element);
            if (head === null) {
                head = newNode;
                length++
                return
            }
            var current = head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode;
            length = length + 1;
        }
        //向链表任何位置插入
    this.insert = function(position, element) {
        var newNode = new Node(element);
        if (position > length) {
            console.log('不合法')
        }
        if (position === 0) {
            newNode.next = head;
            head = newNode
            length++
            return
        }
        if (position == length) {
            this.append(element)
        }
        var current = head;
        var temp = null;
        for (var i = 0; i < position - 1; i++) {
            current = current.next;
        }
        temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        length++
    }
    this.getHead = function() {
        //console.log(head)
        return head
    }
}
/* var t = new LinkList();
t.append(10);
t.append(8);
t.append(4);
t.append(9);
t.getHead()
t.insert(1, 12)
t.getHead() */ 