//太简单了
var obj={
    x:{
        xx:{
            xxx:{
                xxxx:1
            }
        }
    }
}
Object.prototype.select=function(arg){
    var propArr=arg.split('.'),res=this;
    for(var i=0;i<propArr.length;i++){
        res=res[propArr[i]]
    }
    console.log(res)
    return res

}
obj.select('x.xx.xxx.xxxx')
obj.select('x').select('xx.xxx')