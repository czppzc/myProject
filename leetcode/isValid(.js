//判断是不是有效括号，栈
//({{[]}}) 有效 (][] 无效 ()[](){}有效 注意第一种的判断
//这是一种可以用栈解决的典型问题
function isValid(str) {
    var strArr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
            strArr.push(str[i])
        } else {
            if (str[i] === ')' && strArr.pop() !== "(") {
                return false
            }
            if (str[i] === ']' && strArr.pop() !== "[") {
                return false
            }
            if (str[i] === '}' && strArr.pop() !== "{") {
                return false
            }
        }
    }
    return true

}
function maxValid(str) {
    var maxLen = 0;
    var stack = [];
    var start = 0;
    var j=0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            stack.push(str[i]);
        } else {
            if (stack.length < 1) {
                start = i + 1;
            } else {
                stack.pop();
                maxLen = stack.length < 1 ? Math.max(maxLen, i - start + 1) : Math.max(maxLen, i - stack[stack.length - 1])
            }
            /* if(stack.pop()=='('){
                j+=2;
                if(j>maxLen){
                    maxLen=j
                }
            }else {
                j=0;
                stack=[];
            } */
        }
    }
    return maxLen
}
console.log(isValid('({{[[]}})'))