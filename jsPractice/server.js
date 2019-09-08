/* let http = require('http');
http.createServer((req, res) => {
    console.log(req.url, 'test');
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
    })
    res.end('我创建了一个服务器环境')
}).listen(8888) */
/* var data='[4,2,7,1,3,6,9,2,3,4,5,6,null,8,9]';
data=data.split(',');
data=data.map((v,i) => {
    if(i==0){
        return v.slice(1)
    }
    if(i==data.length-1){
        return v.slice(0,1)
    }
    return v
} )
 var ts=1;
var targetArr=[data[0]];
for(var i=1;i<data.length;i++){
    var num=Math.pow(2,i);
    if(ts>data.length){
        break
    }
    console.log(ts,'测试')
    targetArr= targetArr.concat(data.slice(ts,ts+num).reverse())
    ts+=num;
}
console.log(targetArr.slice(0,data.length)) */
var node={
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
function lianbiaoReturn(data){
    var res=data;
    var pre=null;
    while(res){
        var temp=res.next;
        res.next=pre;
        pre=res;
        res=temp
    }
    console.log(JSON.stringify(pre))
    return pre
}
//lianbiaoReturn(node)
function partReturn(data,n,m){
    var newObj={};
    newObj.next=data;
    var pre=newObj;
    var current=pre.next;
    for(var i=1;i<n;i++){
        current=current.next;
        pre=pre.next
    }
    for(var j=0;j<m-n;j++){
        var temp=current.next;
        current.next=temp.next;
        temp.next=pre.next;
        pre.next=temp;
    }
    console.log(JSON.stringify(pre.next))
    return pre.next
}
partReturn(node,2,4)
