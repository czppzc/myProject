async function test(){
    console.log(1);
    await console.log(2);
    console.log(3)
}
test();
new Promise((resolve,reject) => {
    console.log(10);
    resolve(10)
}).then(res => {
    console.log(11);
    return res
}).then(res => {
    console.log(12)
})
/* setImmediate(() => {
    console.log('test')
}) */
setTimeout(() => {
new Promise((resolve,reject) => {
 console.log(4);
 resolve(4)
}).then(() => {
    console.log(9)
    Promise.resolve(4).then(res => {
        console.log(5)
        return res
    }).then(res => {
        console.log(6)
    })
})
console.log(8)
},10)
setTimeout(() => {
    console.log('last')
})
console.log(7)