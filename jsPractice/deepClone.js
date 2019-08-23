function deepClone(type, obj) {
    var targetObj = type || [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === 'object' && obj[prop]) {
                if (Array.isArray(obj[prop])) {
                    targetObj[prop] = deepClone([], obj[prop])
                } else {
                    targetObj[prop] = deepClone({}, obj[prop])
                }


            } else {
                targetObj[prop] = obj[prop];
            }
        }
    }
    console.log(targetObj)
    return targetObj
}
var objs = {
    id: 5,
    type: {
        name: "小明",
        age: 25
    },
    list: [1.2, { id: 100, age: 20 }]
}
console.log(objs == deepClone({}, objs))