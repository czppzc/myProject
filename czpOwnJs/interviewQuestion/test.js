
/* for(var i=0;i<b.length;i++){
    var regxp=new RegExp(`${b[i]}{3,}`,'g');
    b=b.replace(regxp,b[i]+b[i])
}
console.log(b) */
var b='aaaaaabbbbcccccccddefffffaaa'
b=b.replace(/([a-zA-Z])\1{2,}/g,(a) => a[0]+a[0])
console.log(b)
function deepClone(obj){
    if(typeof obj==='object'&&obj){
      var targetObj=Array.isArray(obj)?[]:{};
      for(var prop in obj){
          targetObj[prop]=deepClone(obj[prop])
      }
      return targetObj
    }else {
        return obj
    }
}