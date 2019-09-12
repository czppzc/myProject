function getTimeDiff(s1,s2){
s1=new Date(s1.replace(/:.+:.+/,(s) => s.slice(1,3)>=30 ? ':30:00':':00:00')).getTime();
s2=new Date(s2.replace(/:.+:.+/,(s) => s.slice(1,3)>=30 ? ':30:00':':00:00')).getTime();
var diff=Math.abs(s2-s1);
var hour=diff/1000/60/60
return hour
}
getTimeDiff("2016-03-28 10:29:22","2016-03-29 11:38:22")