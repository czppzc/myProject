function compose(middlewares) {
    return function () {
        return dispatch(0);
        function dispatch(i) {
            let fn = middlewares[i];
            if (!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1)
                })
            )
        }
    }
}
//let middlewares=[f1,f2,f3,f4] //中间件函数
async function test() {
    console.time();
    let a = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("我执行了");
            resolve(100)
        }, 2000)
    })
    console.timeEnd();
    console.log("事件","执行完毕")

}
test()