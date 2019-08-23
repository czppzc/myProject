/**
 * @param {"选出来的人数"} n
 * @param {"第一组人的跑步速度"} arr1 
 * @param {"第二组人的跑步速度"} arr2 
 */
function select(n, arr1, arr2) {
    var a1 = arr1.sort((a, b) => a - b);
    var a2 = arr2.sort((a, b) => a - b);
    var res = 0;
    while (a1.length) {
        if (a1[a1.length-1] > a2[a2.length-1]) {
            var len1=a1.length-1,len2=a2.length-1;
              while(a1[len1]>a2[len2]){
                  len1--
              }
              res++;
              a1.splice(len1+1,1);
              a2.pop();
        } else {
             a1.shift();
             a2.pop();
             res--
        }
    }
    console.log(res)
    return res
}
select(3, [3, 4, 8,9,10,11,12,13], [3, 4, 8,9,10,11,12,13])