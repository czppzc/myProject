(function (wd) {
    var params = null;

    function MethodFor() {
        if (params) {
            return params
        }
        params = this;
        this.name = "测试";
        this.age = 18;

    }
    wd.MethodFor = MethodFor;
})(Window)
console.log(Window)
var t1=new MethodFor();
var t2=new MethodFor();
var t3=new MethodFor();
console.log(t1==t2);

