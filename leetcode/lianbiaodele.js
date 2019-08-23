//删除链表中重复的元素
var deleteDuplicates = function(head) {
    if(!head){
        return 
    }
    var node={};
    node.next=head;
    var p=node;
  while(p.next&&p.next.next){
      console.log(p.next)
      if(p.next.val===p.next.next.val){
          var num=p.next.val;
          while(p.next&&p.next.val==num){
              p.next=p.next.next
          }
      }else {
          p=p.next
      }
  }
  console.log(node.next)
    return node.next
    
};
function test(head){
    var p=head;
    while(p.next&&p.next.next){
        if(p.next.val==p.next.next.val){
           p.next=p.next.next.next
        }else {
            p=p.next
        }
    }
    console.log(head)
    return head
}
var lianbiao={
    val:1,
    next:{
        val:2,
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
test(lianbiao)
//deleteDuplicates(lianbiao)