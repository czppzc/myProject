function MyTest() {
    function MyNode() {
        this.name = "测试";
        this.age = 18;
    }
    var hashObj;
    this.addAttribute = function() {
        hashObj = new MyNode();
    }


    this.getObj = function() {
        console.log(hashObj)
        return hashObj
    }
}
var test = new MyTest();
console.log(test)
test.addAttribute();
test.getObj()