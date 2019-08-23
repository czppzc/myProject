class EventEmitter{
    constructor(){
        this._events = {}
    }

    on(event,callback){  //监听event事件，触发时调用callback函数
        let callbacks = this._events[event] || []
        callbacks.push(callback)
        this._events[event] = callbacks
        return this
    }
    off(event,callback){  //停止监听event事件
        let callbacks = this._events[event]
        this._events[event] = callbacks && callbacks.filter(fn => fn !== callback)
        return this
    }
    emit(...args){ //触发事件，并把参数传给事件的处理函数
        const event = args[0]
        /* const params = [].slice.call(args,1) */
        const callbacks = this._events[event]
        console.log(args[1])
        callbacks.forEach(fn => fn.apply(args[1]))
        return this
    }
    once(event,callback){ //为事件注册单次监听器
        let wrapFanc = (...args) => {
            callback.apply(this.args)
            this.off(event,wrapFanc)
        }
        this.on(event,wrapFanc)
        return this
    }

}
/* class EventEmitter{
    constructor(){
        this.events={}
    }
    on(type,callback){
        console.log('绑定事件成功')
        let callbacks=this.events[type]||[];
        if(callback){
            callbacks.push(callback)
            this.events[type]=callbacks
        }
        return this
    }
    emit(type,data){
        console.log('我要指行事件了')
        let listeners=this.getNameCallBack(type);
        for(let i=0;i<listeners.length;i++){
            listeners[i].call(this,data);
        }
        return this

    }
    getNameCallBack(name){
        return this.events[name]||(this.events[name]=[])
    }
}
let enentsFun=new EventEmitter();

enentsFun.on('alarmNum',(data) => {
    console.log(data,"我被执行了")
}) 
enentsFun.emit('alarmNum',[123456]) */