class Vue {
    constructor(options) {
        this._options = options;
        this._data = options.data;
        this.initprops(this._data);
        this.compile(options)
    }
    initprops(data) {
        var dep = new Dep();
        Object.keys(data).forEach(prop => {
            let val = data[prop];
            Object.defineProperty(data, prop, {
                configurable: true,
                enumerable: true,
                get() {
                    //console.log('触发了没有')
                    if (Dep.target) {
                        dep.addWatcher(prop, Dep.target)
                    }
                    return val
                },
                set(newVal) {
                    // console.log(dep)
                    /*  dep.subs.forEach(v => {
                         v.update(newVal)
                     }) */
                    /*  dep.subs[prop].forEach(v => {
                         v.update(newVal)
                     }) */
                    if (newVal != val) {
                        dep.changeView(prop, newVal)
                    }
                    dep.changeView(prop, newVal)
                    //console.log(newVal)
                }
            })
        })
    }
    compile(data) {
        let el = document.querySelector(data.el)
        this.initHtml(el)
    }
    initHtml(el) {
        var childNodes = el.childNodes;
        //console.log(childNodes)
        if (childNodes.length == 0) {
            return
        }
        Array.from(childNodes).forEach(ele => {
            if (ele.nodeType == 3) {
                //为文本节点
                let content = ele.textContent;
                //console.log(content, "测试")
                let rexp = /\{\{\s*(\S*)\s*\}\}\r*/;
                if (rexp.test(content)) {
                    //var key = content.match(rexp)[0].trim().substring(2, content.length - 2);
                    let key = RegExp.$1;
                    //console.log(key, 'test')
                    ele.textContent = this._data[key]
                    new Watcher(key, this._data, newVal => {
                        ele.textContent = newVal
                    })
                }
            } else if (ele.nodeType == 1) {
                //为标签节点
                var attr = ele.getAttribute('v-model');
                if (attr) {

                    ele.addEventListener('input', (e) => {
                        //console.log(e.target.value)
                        this._data[attr] = e.target.value
                    })
                    //把需要监听的元素注册到订阅事件中去
                    new Watcher(attr, this._data, newVal => {
                        ele.value = newVal;
                    })
                }
                this.initHtml(ele)

            }
            /*   if(ele.childNodes.length){
                //递归获取
              } */
        })
    }

}
class Dep {
    constructor() {
        this.subs = {};
    }
    addWatcher(props, ele) {
        if (!this.subs[props]) {
            this.subs[props] = [].concat(ele);
        } else {
            this.subs[props].push(ele)
        }
    }
    //发布事件
    changeView(prop, newVal) {
        this.subs[prop].forEach(v => {
            v.update(newVal)
        })
        /* this.subs.forEach(v => {
            v.update()
        }) */
    }
}
class Watcher {
    constructor(key, data, cb) {
        Dep.target = this;
        //触发该属性的get，将watcher添加进sub中
        //console.log(data,key)
        data[key]
        this.cb = cb;
        Dep.target = null;

    }
    update(newVal) {
        //console.log('我们要更新了')
        this.cb(newVal)
    }
}