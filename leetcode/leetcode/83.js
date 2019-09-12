//删除排序链表中的重复元素
//输入1->2->3->3->4->4->5
//输出1->2->3->4->5
function deleteSame(node){
    if(!node) return null
    var data={};
    data.next=node;
    var p=data;
    while(p.next&&p.next.next){
        if(p.next.val==p.next.next.val){
           var num=p.next.val;
           while(p.next.next&&p.next.next.val==num){//头部不动，相等往右移动
               p.next.next=p.next.next.next;
           } 
        }else {
            p=p.next;
        }
    }
    return data.next
}
//简单做法
function deleteSame1(node){
    if(!node) return null
    var current=node;
    while(current.next){
    if(current.next.val==current.val){
        current.next=current.next.next
    }else {
        current=current.next;
    }
    }
    return node
}
var node={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:3,
                next:{
                    val:3,
                    next:{
                        val:4,
                        next:{
                            val:4,
                            next:{
                                val:5,
                                next:null
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(JSON.stringify(deleteSame1(node)))