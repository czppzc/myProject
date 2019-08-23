/* function sumStrings(a,b){
    var res='', c=0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}
console.log(sumStrings('1032849357834924572398572394','6238906325898237658932652398562378'))
var num='2648732973'
//console.log(num.toLocaleString())
 var numArr=num.split('.')
 //console.log(numArr);
 var arr=[1,2,3,4];
 var arr1=arr.splice(2,0,1);
 //千位分隔符
function getNum(a){
    if(typeof a !=='string'){
        a=a.toString()
    }
    var res='';
    var dotArr=a.split('.')[1];
   var numArr=(a.split('.')[0]).split('').reverse();
   var newArr=[];
   for(let i=0;i<numArr.length;i++){
       newArr.push(numArr[i])
       if((i+1)%3==0){
        newArr.push(',')  
       }
   }
   if(dotArr){
    res=newArr.reverse().join('')+'.'+dotArr;
   }else {
   res=newArr.reverse().join('') 
   }
   console.log(res)
   return res
}
getNum('1003678573674860.475684')
var nums=1000.23434;
console.log(~~nums) */

//大数相加另外一种解决办法
function add(a,b){
    a=a+'';
    b=b+'';
    var res='',c=0;
    a=a.split('');
    b=b.split('');
    while(a.length||b.length||c){
        c+=~~a.pop()+~~b.pop();
        res=c%10+res;
        c=c>9;
    }
    console.log(res)
    return res
}
add(1232,232423423)