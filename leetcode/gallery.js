//种花问题
  function gallery(arr, n) {
    var zeroArr = [],
        times = 0;
    for (var i = 0; i < arr.length;i++) {
        let temp = []
        if (arr[i] == 0) {
            temp.push(arr[i])
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] == 0) {
                    temp.push(arr[j]);
                } else {
                   // console.log('测试',temp)
                    if (temp.length > 1) {
                        times=times+(temp.length % 2 == 0 ? Math.floor(temp.length / 2) - 1 : Math.floor(temp.length / 2));
                       // console.log(times,'次数')
                    }
                   zeroArr.push(temp);
                   i=j
                   break
                }
                  if(j==arr.length-1&&arr[j]==0){
                      //  console.log('测试2')
                       // console.log(temp,"ss")
                        if (temp.length > 1) {
                            times=times+(temp.length % 2 == 0 ? Math.floor(temp.length / 2) - 1 : Math.floor(temp.length / 2))
                          //  console.log(times,'次数')
                        }
                       zeroArr.push(temp);
                       i=14;
                    } 
            }
        }
    }
  if(arr[0]==0&&(zeroArr[0].length)%2==0){
      times++;
     // console.log(times,"最后测试")
  }
  if(arr[arr.length-1]==0&&(zeroArr[zeroArr.length-1]).length%2==0){
    times++
}
    console.log(zeroArr,times)
    return times>n?true:false
}
console.log(gallery([0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0],3))