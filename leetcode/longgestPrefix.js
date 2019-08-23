//二分法专用套路
//最长前缀和最长后缀也适合用二分法
function longestPrefix(strArr) {
    if (!strArr) return ''
    if (strArr.length == 1) return strArr[0]
    var minLen = Math.min(...strArr.map(v => v.length));
    var minStr = strArr.filter(v => v.length == minLen)[0];
    var remainArr = strArr.filter(v => v != minStr);
    var left = 0;
    var right = minStr.length;
    while (left <= right) {
        var isPrefix = true;
        var mid = Math.floor((right - left) / 2) + left; //这一步是关键
        for (var i = 0; i < remainArr.length; i++) {
            if (remainArr[i].substring(0, mid) != minStr.substring(0, mid)) {
                isPrefix = false;
                break;
            }
        }
        if (isPrefix) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return minStr.substring(0, right)
}