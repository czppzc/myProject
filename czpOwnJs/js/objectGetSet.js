//简易注册对象属性监听
let obj={
    get url(){
        console.log(this)
         return '1111'
    },
    set url(newVal){
        console.log(newVal)
    }
}
obj.url='https://baidu.com'
console.log(obj.url)