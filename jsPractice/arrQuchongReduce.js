//数组简单去重
function ArrQuChong(arr) {
    var arrs = [];
    /*  arr.reduce((pre, v) => {
         if (!pre[v]) {
             arrs.push(v);
             pre[v] = true
         }
         return pre
     }, {}) */
    //对象数组‘
    arr.reduce((pre, v) => {
        if (!pre[JSON.stringify(v)]) {
            arrs.push(v);
            pre[JSON.stringify(v)] = true
        }
        return pre
    }, {})

    /*  arr.forEach((v, i) => {
         if (arr.indexOf(v) == i) {
             arrs.push(v)
         }
     });*/
    console.log(arrs)
    return arrs
}
ArrQuChong([{ id: 8, name: '小明' }, { id: 8, name: '小明' }])