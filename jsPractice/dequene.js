
function f1(cb) {
    setTimeout(function () {
        console.log('1');
        if(++i>=2){
            cb();
        }
        
    }, 300);
}
(function(){
console.log(i)
}())
function f2(cb) {
    setTimeout(function () {
        console.log('2');
        if(++i>=2){
            cb();
        }
    },500  );
}

function f3(cb) {
    setTimeout(function () {
        console.log('3');
        cb();
    }, 100);
}

function queue(list, count) {
    function request() {
       // console.log(list)
        if (list.length) {
            list.shift()(request);
        }
    }
    for(let i=0;i<count;i++){
        list.shift()(request);  
    }
    /* let i = 0;
    while (list.length > 0 && i < count) {
        list.shift()(request);
        i++;
    } */
}
var i=0;
queue([f1, f2, f3], 2);
/* let arr=[1,2,3];
arr.shift();
//console.log(arr,"test")
async function test(list){
    if(list.length){
        return
    }
    let data=null;
    while(list.length>0){
     data=await list.shift()   //从数组的头部拿出第一个元素
    }
} */