function  A() {
    let a=3;
    this.a=4;
    setTimeout(function(){
        console.log(a);
    },100)
    setTimeout(function(){
        //console.log(this)
        console.log(this.a);
    },200)
    setTimeout(() => {
        console.log(a);
    },300)
    setTimeout(() => {
        //console.log(this)
        console.log(this.a);
    },400)
    
}
 let m=new A();
 //console.log(m)
 //做题时一定看清楚是function 还是箭头函数 这直接会决定this的指向问题