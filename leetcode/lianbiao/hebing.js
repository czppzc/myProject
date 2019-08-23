//合并两个有序链表
function lianbiaoCon(l1,l2){
    if(!l1) return l2
    if(!l2) return l1
    var newLianBiao={}; //链表套路
    var current=newLianBiao;
    while(l1||l2){
        if(!l1){
            current.next=l2
            break
        }
        if(!l2){
            current.next=l1;
            break
        }
        if(l1.val<l2.val){
            current.next=l1;
            current=current.next
            l1=l1.next;
        }else {
            current.next=l2;
            current=current.next
            l2=l2.next;
        }
    }
    return newLianBiao
}
var a={
    val:1,
    next:{
        val:4,
        next:{
            val:8,
            next:null
        }
    }
}
var b={
    val:2,
    next:{
        val:5,
        next:{
            val:9,
            next:null
        }
    }
}
console.log(lianbiaoCon(a,b))
//单链表排序
function order(l){
    //使用冒泡
    while(l){
        while(l.next){
            if(l.val>l.next.val){
                var temp=l.next;
                l.next=l;
                l=temp
            }
        }
    }
   
}