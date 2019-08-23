function fib(n) {
    let res;
if(n==0||n==1){
return 1
}
for(let i=n;i>=2;i--){
  res=fib(n-1)+fib(n-2);
}
return res
}