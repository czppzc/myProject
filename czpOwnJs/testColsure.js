/* function colusure(){
    var a=1;
    return function(){
        a++;
        console.log(a)
    }
}
var test=colusure();
test();
test();
test()
test=null
console.log(test) */
//1->2->3->4->5
/* function returnLianbiao(l,n,m){
    var target={};
    target.next=l;
    var pre=target;
    var current=target.next;
    for(var i=0;i<n-1;i++){
        pre=pre.next;
        current=current.next;
    }
    console.log(JSON.stringify(target.next),'test')
    for(var j=0;j<m-n;j++){
        var temp=current.next;
        current.next=temp.next;
        temp.next=pre.next;
        pre.next=temp
        console.log(temp.next==current)
        console.log(JSON.stringify(temp.next),JSON.stringify(current),'test')
        console.log(JSON.stringify(target.next))
    }
    return target.next

} */
var l1={
    val:1,
    next:{
        val:3,
        next:{
            val:2,
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

function returnLianbiao(l,n,m){
    var target={};
    target.next=l;
    var current=target.next;
    var pre=target;
    for(var i=0;i<n-1;i++){
        current=current.next;
        pre=pre.next;
    }
    for(var j=0;j<m-n;j++){
        var temp=current.next;
        current.next=temp.next;
        temp.next=pre.next;
        pre.next=temp;
        console.log(JSON.stringify(target.next))
    }
   return target.next
}
console.log(JSON.stringify(returnLianbiao(l1,1,5)))