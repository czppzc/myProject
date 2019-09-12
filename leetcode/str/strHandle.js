function getReturnStr(s1,s2){
    s1=[...new Set(s1.split(''))];
    s2=[...new Set(s2.split(''))];
    var target=s1.filter(v => s2.indexOf(v)==-1).concat(s2.filter(v => s1.indexOf(v)==-1)).sort();
    var targetStr=target.join('')+target.reverse().join('')
    console.log(targetStr)
    return targetStr
}
getReturnStr('abcr232','bcddefegegege2324')