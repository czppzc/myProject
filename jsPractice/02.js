/* function test(name, age) {
    this.name = name;
    this.age = age;

    return {
        id: 1
    }
}

const p2 = new test('张三', 18)
//console.log(p1) // -> {name: "hy", age: 20}
console.log(p2) // -> {name: "yyy", age: 30}
//console.log(Person.eat())
function ajax(url, callback) {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    } else {
        xhr =ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange=function(){
        if(xhr.readystate===4&&xhr.status===200){
            callback(xhr.responsetext)
        }
    }
    xhr.open('get',url,true);
    xhr.send();
} */
/* let a=Symbol("小明");
let b=Symbol.for("小明")
console.log(a,b) */