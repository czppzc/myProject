/* var a = require('./etst');
//import a from './etst'
a.func();
(function (a, b, c) {
    console.log(a + b + c)
})(1, 2, 3) */
/* var a=13;
function test(){
    console.log(a,"1111")
}
function test1(){
    var a=18;
    console.log(a,'tests')
    test()
}
test1()
a=19; */
function removeSpace(str) {
    //去除左面
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            console.log(i)
            str=str.replace(str[i], '')
            console.log(str)
            i--;
        } else {
            break
        }
    }
    //去除右面
    for (var j = str.length - 1; j >= 0; j--) {
        if (str[j] == ' ') {
            str=str.replace(str[j], '')
        } else {
            break
        }

    }
    return str
}
console.log(removeSpace('        1111                '))
