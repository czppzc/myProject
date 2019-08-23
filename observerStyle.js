/* //发布订阅模式
class EventEmitter {
    constructor() {
        this.event = [];
    }
    on(eventName, listener, times) {
        this.event.push({
            [eventName]: {
                callback: listener,
                times: times
            }
        })
    }
    remove(eventName) {
        let index = this.event.findIndex(v => !!v[eventName]);
        this.event.splice(index, 1);
    }
    once(eventName, listener) {
        this.on(eventName, listener, 1)
    }
    emit(eventName, ...args) {
        console.log(this.event)
        let target = this.event.filter(v => v[eventName])[0];
        if (target) {
            target[eventName].callback.apply(this, args);
            target[eventName].times == 1 && this.remove(eventName)
        } else {
            console.log("该事件不存在")
        }
    }
}

let eventEmitter = new EventEmitter();
eventEmitter.once('alarm', (args) => {
    console.log(args);
})
setInterval(() => {
    eventEmitter.emit('alarm', new Date())
}, 1000) */
class Subject{
    constructor(name){
        this.name=name;
        this.observers=[];//观察者需要被添加到被观察者里面，以便状态变化去通知
        this.state="心情很高兴"
    }
    //添加观察者
    attach(obj){
        this.observers.push(obj);
    }
    //更改被观察者的状态
    setState(newState){
        this.state=newState;
        this.observers.forEach(v => v.update(newState)) //通知观察者有新状态了
    }
}
class Observer{
    constructor(name){
        this.name=name;
    }
    update(data){
        console.log(this.name+':你的孩子'+data)
    }
}
var s1=new Subject('小孩')
var o1=new Observer('爸爸')
var o2=new Observer('妈妈')
s1.attach(o1);
s1.attach(o2);
s1.setState("心情不好了")
s1.setState("心情又变好了")