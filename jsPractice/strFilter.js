function strFilter(s1, s2) {
    var arr1 = s2.split('');
    let arr2 = s1.split('');
    let hashObj = arr1.reduce((pre, v) => {
        pre[v] = v;
        return pre
    }, {})
    arr2.forEach(v => {
        if (v in hashObj) {
            s1 = s1.replace(v, '')
        }
    });
    console.log(s1)
    return s1
}
strFilter('asfhdsfkdhwm', 'sdfshkfssdfd')