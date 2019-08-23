var data={name:'小明'}
//observe(data)
let newData=observeProxy(data);
newData.name='小刚'
newData.id=10329340284
newData.name='小华'
//第一种方法使用Object.defineProperty() 它的缺点就是无法监听到对象中不存在的属性的变化
function observe(obj){
 if(!obj||typeof obj !=='object'){
     return 
 }
 Object.keys(obj).forEach(key => {
     defineProp(obj,key,obj[key])
 })
}
function defineProp(data,prop,val){
    observe(val);
    Object.defineProperty(data,prop,{
        enumerable:true,
        configurable:false,
        set(val){     
          console.log(`我监听到对象的值变化了，新值为${val}`)
        },
        get(){
            return data[prop]
        }
    })
}
//第二种方法使用proxy代理，只要是对象发生变化，都会触发相应的get，set方法
//比defineProperty方便的多
function observeProxy(obj){
    if(typeof obj !=='object'){
        return 
    }
    let newObj=new Proxy(obj,{
        set(target,key,val){
        console.log(`监听到对象的${key}属性值发生变化，新的属性值为--->${val}`)
        },
        get(target,key){
         
        }
    })
    return newObj
}
