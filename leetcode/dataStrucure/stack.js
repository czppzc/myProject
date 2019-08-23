//实现栈结构peek获取栈顶 size获取长度 clear清 都要用私有的变量
//所以我们这里用stack而不是用this.stack
function Stack() {
    var stack = [];
    //入栈
    this.push = function(ele) {
            stack.push(ele)
        }
        //出栈
    this.pop = function() {
            return stack.pop()
        }
        //获取栈结构
    this.getItems = function() {
            return stack
        }
        //获取栈顶元素
    this.peek = function() {
            return stack[stack.length - 1]
        }
        //清空栈
    this.clear = function() {
        satck = [];
    }
    this.isEmpty = function() {
        return stack.length == 0
    }
    this.size = function() {
        return stack.length
    }
}

function tenBy2(num) {
    var stack = new Stack();
    var yushu;
    while (num > 0) {
        yushu = num % 2;
        stack.push(yushu);
        num = ~~num / 2
    }
}