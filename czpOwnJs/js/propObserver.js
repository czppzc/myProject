//proxy代理
//Object.defineProperty(obj,prop,{
//    set:function(key,value){
//   
//}
//})
var obj = {name:'小明'};
var user = new Proxy(obj, {
    set: function (target, key, value, receiver) {
        //设置的时候干的事情
        target[key]=value;
    },
    //获取的时候要干的事情
    get:function(target,key){
        if(key in target){
          return target[key]  
        }else {
            return function(){
                console.log('我是一个函数')
            }
        }
       
    },
    //删除属性要干的事情
    deleteProperty:function(){

    },
    //遍历属性的时候要干的事情
    has:function(){

    },
    apply:function(){

    }
})
user.id = 3;
user.id = 4;
console.log(user.name)
console.log(user.jjj())
