//翻转链表中n-m的元素
/**
 * 
 * @param {'链表'} l 
 * @param {'起始翻转位置'} n 
 * @param {'终止翻转位置'} m 
 */
/** 
 * 1-2-3-4-5
 * 1-3-2-4-5
 * 1-4-2-3-5 
 * n=2 m=4 
 */
function partReturn(l,n,m){
    var newL={};
    newL.next=l;
    var p=newL;
    var cur=newL.next;
    for(var i=1;i<n;i++){
        p=p.next; //p变成了反转起始位置的前一个节点
        cur=cur.next;//p变成了反转起始位置的节点
    }
    for(var i=0;i<m-n;i++){
        var temp=cur.next;  
        cur.next=temp.next; 
        console.log(newL.next)
        temp.next=p.next;   
        console.log(newL.next)
        p.next=temp     
        console.log(newL.next)
    }
    //return newL.next
}
var a={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
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
function returnLiao(l,n,m){
    var l1={};
    l1.next=l;
    var pre=l1;
    var start=l1.next;
    for(var i=1;i<n;i++){
    pre=pre.next;
    start=start.next;
    }
    for(var j=0;j<m-n;j++){
        var temp=start.next;
        start.next=temp.next;
        temp.next=pre.next;
        pre.next=temp
    }
    return l1.next
}
Function.prototype.mybind=function(thisArg,...arg1){
    var that=this;
    var func=function(...arg2){
        var _this=this instanceof func ?this: thisArg;
        that.apply(_this,arg1.concat(arg2))
    }
    func.prototype=Object.create(that.prototype);
    func.prototype.constructor=that;
    return func
}