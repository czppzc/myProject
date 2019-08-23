//合并两个有序链表
var l1={
    val:1,
    next:{
        val:3,
        next:{
            val:6,
            next:{
                val:8,
                next:null
            }
        }
    }
}
var l2={
    val:2,
    next:{
        val:4,
        next:{
            val:5,
            next:{
                val:7,
                next:null
            }
        }
    }
}
//l1: 1->3->6->8
//l2: 2->4->5->7
function mergeOrderLianbiao(l1,l2){
    var targetL={};
    var current=targetL; //这两步也是惯用套路
    while(l1||l2){
        if(!l1){
            current.next=l2;
            break;
        }
        if(!l2){
            current.next=l1;
            break;
        }
        if(l1.val<l2.val){
            current.next=l1;//这两部惯用套路
            current=current.next;
            l1=l1.next;
        }else {
            current.next=l2;
            current=current.next;
            l2=l2.next;
        }
    }
    console.log(targetL.next)
    return targetL.next
}
mergeOrderLianbiao(l1,l2)
