(function(){
let PENDING='pending';
let RESOLVED="fulfilled";
let REJECTED="rejected";
function MyPromise(fn){
    this.state=PENDING;
    this.resolveCallback=[];
    this.rejectCallback=[];
    this.val=undefined;
    this.err=undefined;
    let that=this;
    var resolve=function(val){
        if(that.state==='pending'){
            that.val=val;
            that.state=RESOLVED;
            that.resolveCallback.length&&that.resolveCallback.forEach(callback => callback(val));

        }
    }
    var reject=function(err){
        if(that.state==='pending'){
            that.err=err;
            that.state=REJECTED;
            that.rejectCallback.length&&that.rejectCallback.forEach(callback => callback(err));

        }
    }
    var getThen=function(val){
        if(typeof val==="object"||typeof val ==='function'){
            return val.then?val.then:null
        }
        return null
    }
    function handler(fn){
        //调用fn，并设置参数
        fn(val => {
        let then=getThen(val);
        if(then){
            return handler(then.bind(val))
        }
        resolve(val)
        },err => {
            let then=getThen(err);
            if(then){
                return handler(then.bind(err))
            }
            reject(err)
            })
    }
    handler(fn)
}
MyPromise.prototype.then=function(onfulfilled,onrejected){
    var that=this;
    var collectFn=function(onfulfilled,onrejected){
        onfulfilled=typeof onfulfilled ==="function"?onfulfilled:v => v;
        onrejected=typeof onrejected ==="function"?onrejected:err => {throw err};
        if(that.state==='pending'){
            that.resolveCallback.push(onfulfilled);
            that.rejectCallback.push(onrejected);
        }else if(that.state==='fulfilled'){
            onfulfilled(that.val);
        }else {
            onrejected(that.err)
        }
    }
    //实现链式调用
    return new MyPromise((resolve,reject) => {
        collectFn(val => {
            if(typeof onfulfilled !== 'function'){
                //这里面的return没有什么意义，只是让它执行到这停下来
               return resolve(val)
            }
            resolve(onfulfilled(val))
        },err => {
            if(typeof onrejected !=='function'){
                return reject(err)
            }
            reject(onrejected(err))
        })
    })
}
window.MyPromise=MyPromise;
}())