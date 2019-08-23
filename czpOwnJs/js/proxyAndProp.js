var obj={
    name:'小明',
    data:[1,2,3]
}
//let val=obj.data;//在这个地方可以获取元素不会触发get方法，是因为此时还没有监听该对象
/* Object.defineProperty(obj,'data',{
    configurable:true,
    enumerable:true,
    get(){
       return val
    },
    set(newVal){
        console.log(newVal)
    }
}) */
/* let newobj=new Proxy(obj,{
         get(target,key){
             console.log(key)
             return target[key]
         },
         set(target,key,val){
             console.log(val)
         }
})
newobj.data.push(8) */
//console.log(obj.data.push(8))

const createProxy=data => {
    if(typeof data ==='object'&&data){
        for(let key in data ){
            if(typeof data[key]==='object'&&data[key]){
                defineObjReactive(data,key,data[key])
            }else {
               defineBasicReactive(data,key,data[key])
            }
        }
    }
}
function defineObjReactive(data,key,val){
    createProxy(val);
    data[key]=new Proxy(val,{
        set(target,key,newVal,receiver){
           if(key!='length'){
               console.log(newVal,key)
           }
           return Reflect.set(target,key,newVal,receiver)
        }
    })
}
function defineBasicReactive(data,key,val){
    Object.defineProperty(data,key,{
        configurable:true,
        enumerable:true,
        get(){
            return val
        },
        set(newVal){
            console.log(`${key}属性由${val} => ${newVal}`)
            val=newVal
        }
    })
}
createProxy(obj)
obj.data.push(100)
obj.name=100
//Object.defineProperty使用递归可以监听到对象属性值的变化，但是监听不到push，pop,这些操作
//只要引用地址不变就无法监听到，proxy可以，所以后面试一下这个东西