function strDiff(s2, s1) {
    let strArr = s1.split('');
    let length=s2.length;
    //console.log(strArr)
    for (let j = 0; j < length; j++) {
        for (var i = 0; i < strArr.length; i++) {
            console.log(s2.indexOf(strArr[i]))
            if (s2.indexOf(strArr[i])!=-1) {
                s2 = s2.replace(strArr[i], '');
            }
        }
    }
    console.log(s2)
    return s2
}
//strDiff('awgekwefwefewryuew', 'ahd');
function strDuff2(s2,s1){
    let hash={},str1Arr=s1.split(''),strArr2=s2.split('');
    for(let i=0;i<str1Arr.length;i++){
        hash[str1Arr[i]]=true
    }
    for(let j=0;j<strArr2.length;j++){
        if(hash[strArr2[j]]){
            s2=s2.replace(strArr2[j],'')
        }
    }
    console.log(s2)
    return s2

}
strDuff2('awgekwefwefewryuew', 'wahd');