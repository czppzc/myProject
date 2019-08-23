function propGet(obj) {
    var newObj = new Proxy(obj, {
        get(target, key) {
            console.log(`我访问到对象的${key}属性了`)
            console.log(target)
        },
        set(target, key, value) {
            console.log(key)
            target[key] = value
        }
    })
    return newObj
}
var obj = { name: '小明', age: 18 }
var newObj = propGet(obj)
newObj.name='小刚'
