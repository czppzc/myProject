(function () {
    let status = {
        pending: 'pending',
        fulfilled: 'resolved',
        rejected: 'rejected'
    }
    class MyPromise {
        constructor(func) {
            this._status = status.pending;
            this.rejectCallback = [];
            this.resolveCallback = [];
            this.value = null;
            this.err = null;
            this._handler(func);
        }
        //判断value里面有没有then函数，也就是判断是不是thenable对象
        _getThen(value){
         if(typeof value =='object'||typeof value =='function' ){
             return value.then ?value.then:null
         }
         return null
        }
        _handler(func) {
            let done = false;
            func((value) => {
                if (done) return
                done = true;
                //注册then中回调的函数，监听必须then中回调函数成功才会继续执行下一个then函数
                let then=this._getThen(value)
                if(then){
                    return this._handler(then.bind(value))
                }
                this._resolve(value)
            }, (err) => {
                if (done) return
                done = true;
                let then=this._getThen(err)
                if(then){
                    return this._handler(then.bind(err))
                }
                this._reject(err)
            })
        }
        _resolve(value) {
            this.value = value;
            this._status = status.fulfilled;
            //执行收集的成功的需要调用的函数
            this.resolveCallback.length && this.resolveCallback.forEach(callback => callback(value))
        }
        _reject(err) {
            this.err = err;
            this._status = status.rejected;
            //执行收集的失败时需要调用的函数
            this.rejectCallback.length && this.rejectCallback.forEach(callback => callback(err))

        }
        //收集函数
        _collect(resolveCallback, rejectCallback) {
            if (this._status === 'pending') {
                this.rejectCallback.push(rejectCallback);
                this.resolveCallback.push(resolveCallback);
            } else if (this._status === "resolved") {
                setTimeout(() => {
                    resolveCallback(this.value);
                })
            } else {
                setTimeout(() => {
                    rejectCallback(this.err)
                })
            }
        }
        //收集注册的成功状态或者失败状态要执行的函数
        then(resolveCallback, rejectCallback) {
            //this._collect(resolveCallback, rejectCallback)
            return new MyPromise((resolve,reject) => {
                    this._collect((value) => {
                    if(typeof resolveCallback !=='function'){
                        return resolve(value)
                    }
                    resolve(resolveCallback(value))
                },(err) => {
                    if(typeof rejectCallback !=='function'){
                        return reject(err)
                    }
                   reject(rejectCallback(error))
                })
            })
        }
    }
    window.MyPromise = MyPromise;
}())