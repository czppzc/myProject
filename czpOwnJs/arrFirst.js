function strHandle(str){
    let obj={};
    for(var i=0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }else {
            obj[str[i]]=1;
        }
    }
    for(let prop in obj){
        if(obj[prop]===1){
            return prop
        }
    }
    return null
}
console.log(strHandle("abcabdre"))