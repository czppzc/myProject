function returnLianbiao(l){
    var pre=null;
    var l1=l;
    while(l1){
        var temp=l1.next;
        l1.next=pre;
        pre=l1;
        l1=temp;
    }
return pre
}
var a={
    val:1,
    next:{
        val:2,
        next:{
            val:5,
            next:null
        }
    }
}
var b={
    val:2,
    next:{
        val:4,
        next:{
            val:6,
            next:null
        }
    }
}
//console.log(returnLianbiao(a))
//合并有序链表
// 1->2->3->5->7->9
//2->4->6->8->10
function merge(l1,l2){
    var target={};
    var current=target;
    while(l1||l2){
        if(!l1) {
            current.next=l2
            break
        }
        if(!l2){
            current.next=l1
            break
        }
        if(l1.val<l2.val){
           current.next=l1;
           current=current.next;
           l1=l1.next;
        }else {
           current.next=l2;
           current=current.next;
           l2=l2.next;
        }
    }
    return target.next
}
console.log(JSON.stringify(merge(a,b)))