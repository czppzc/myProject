function getName(){
    return new Promise(resolve => {
        console.log('里面')
        setTimeout(() => {
            console.log('执行完毕')
            resolve(10)
        })
    })
}
getName();
console.log('外面')