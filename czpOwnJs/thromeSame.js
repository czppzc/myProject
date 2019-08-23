function throwSame(s1,s2){
    var hash={},res=s1
    for(var i=0;i<s2.length;i++){
        hash[s2[i]]=true
    }
    for(var j=0;j<s1.length;j++){
      if(hash[s1[j]]){
         res=res.replace(s1[j],'')
      }
    }
    return res
}