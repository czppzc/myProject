var obj={name:'小明'}
Object.defineProperty(obj,'name',{
    get(){
        console.log('测试')
        return '小刚'
    },
    set(val){
        console.log('测试')
        return val
    }
})
console.log(obj.name)
obj.name="周芷若"