//柱状图中的最大矩形面积
//1.暴力解法，时间复杂度O（n^2）
function baoli(heights) {
    var max = 0;
    for (var i = 0; i < heights.length; i++) {
        for (var j = i + 1; j < heights.length; j++) {
            var splitArr = heights.slice(i, j + 1);
            var minHeight = Math.min(...splitArr);
            var maxHeight = Math.max(...splitArr);
            max = Math.max(max, maxHeight, minHeight * (j - i + 1))
        }
    }
    return max
}

//技巧性太强，不容易想到,复杂度O（n）
function largeRecArea(heights) {
    var stack = [];
    var max = 0;
    for (var i = 0; i < heights.length; i++) {

        while (stack.length && stack[stack.length - 1] >= heights[i]) {
            var last = stack.pop();
            if (stack.length) {
                var width = i - stack[stack.length - 1] - 1;
            } else {
                var width = i;
            }
            max = Math.max(max, heights[last] * width);
        }
        //这一步会把空的栈又重新
        if (i == 4) {
            console.log(stack)
        }
        stack.push(i)
    }
    return max
}
var heights = [2, 1, 5, 6, 5, 2, 3]
console.log(largeRecArea(heights))