function MyNew(fn, name) {
    var obj = {};
    fn.apply(obj, [name]);
    obj.prototype = Object.create(fn.prototype)
    return obj
}

function GetName(name) {
    this.name = name;
}
GetName.prototype.justify = function() {

}
console.log(MyNew(GetName, '小明'))
console.log(new GetName())