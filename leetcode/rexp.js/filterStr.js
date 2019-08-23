function filteStr(s1, s2) {
    for (var i = 0; i < s2.length; i++) {
        var rep = new RegExp(s2[i], 'g')//正则表达式
        s1 = s1.replace(rep, '')
    }
    return s1
}
filteStr('aaaaaaaaabcdefcde', 'acd')
function judgeNum(a) {
    return a.toString() == a.toString().split('').reverse().join('')
}