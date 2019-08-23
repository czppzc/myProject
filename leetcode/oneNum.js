function getOneNum(num){
    var total=0;
    for(var i=1;i<=num;i++){
     if(i.toString().indexOf('1')>-1){
      if(i.toString().split('').filter(v => v=='1').length>1){
          total+=i.toString().split('').filter(v => v=='1').length;
      }else {
          total++
      }
     }
    }
    console.log(total)
    return total
}
getOneNum(11)