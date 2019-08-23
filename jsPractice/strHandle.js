function strHandle(str) {
    var targetStr = str.trim().split('+');
    console.log(targetStr)
    return targetStr
}



var str = '      sjgef wegfehf  efherf freif  '
    //strHandle(str)

function arrHandle(arr) {
    var hash = {},
        newArr = [];
    arr.forEach(v => {
        //console.log(hash[JSON.stringify(v)])
        if (!hash[JSON.stringify(v)]) {
            newArr.push(v);
            hash[JSON.stringify(v)] = true
        }

    });
    console.log(newArr);
    console.log(hash)
    return newArr
}
arrHandle([{ id: 100, name: '小明' }, { id: 100, name: '小明' }])