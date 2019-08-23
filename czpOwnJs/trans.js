function strTransNum(key){
    var hashCode=0;
    for(var i=0;i<key.length;i++){
        hashCode+=key[i].charCodeAt()
    }
    console.log(hashCode)
    return hashCode
}
strTransNum('asdg')