/* f1 = (num) => {
    console.log(1,'test')
    return num
}
f2 = (num) => {
    console.log(2,'test')
    return num
}
f3 = (num) => {
    console.log(3,'test')
    return num
}
f4  = (num) => {
    console.log(4,'test')
    return num
}
f5  = (num) => {
    console.log(5,'test')
    return num
}
f6  = (num) => {
    console.log(6,'test')
    return num
}
var funcArr=[f1,f2,f3,f4,f5,f6]
var func=funcArr.reduce((left,right) => {
    return right(left)
})
console.log(func(33)) */
class Scheduler {
    constructor() {
        this.i = 0;
        this.handler=[];
    }
    add(promiseCreator) {
        if (this.i <= 1) {
            this.i++;
            var pro = promiseCreator();
            pro.then(() => {
               this.handler.length&&this.handler.shift()()
            })
            console.log(pro)
            return pro
        } else {
            this.handler.push(promiseCreator)
            return new Promise((resolve,reject) => {
            })
        }
    }
}
const timeout= (time) => new Promise(resolve => {
    console.log('intimeout:',time);
    setTimeout(resolve,time)
})
const scheduler=new Scheduler();
const addTask=(time,order) => {
    scheduler.add(() => timeout(time))/* .then(() => {
        console.log(order)
    }) */
}
addTask(1000,"1")
addTask(500,"2")
addTask(300,"3")
addTask(400,"4")