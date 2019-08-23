/**
 * 
 * @param {总资源} total 
 * @param {分配的人数} num 
 */
//红包分配问题 微信红包分配
function assign(total, num) {
    var target = [],
        a = 0;
    for (var i = 0; i < num; i++) {
        a = calNum(total, i, num);
        total = total - a;
        target.push(a)
    }
    console.log(target)
    return target

}

function calNum(total, i, num) {
    if (num - i === 1) {
        return total.toFixed(2)
    }
    var min = total - (num - i - 1) * 20 < 5 ? 5 : total - (num - i - 1) * 20;
    var max = total - (num - i - 1) * 5 > 20 ? 20 : total - (num - i - 1) * 5;
    console.log(total, min, max)
    var result = (Math.random() * (max - min + 1) + min).toFixed(2);
    return result
}
assign(100, 10)