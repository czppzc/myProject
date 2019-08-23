function numReturn(num) {
    var b = 0, //余数
        res = 0; //反转的结果
    while (num > 0) {
        b = num % 10;
        res = res * 10 + b;
        num = Math.floor(num / 10)
    }
    console.log(res)
    return res
}
numReturn(12345678)