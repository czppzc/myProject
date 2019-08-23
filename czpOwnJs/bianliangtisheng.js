/* var a=10;
function fn(){
    //1.var a=undefined;
    a=3;
    console.log(a,'1');
    console.log(this.a,2);
    var a;//变量提升,相当于1的效果
}
fn() */
function Person(name){
    this.name=name;
    this.color=['red','yellow','black'];
}
function Men(height,name){
    Person.call(this,name);
    this.height=height;
}
var a=new Men('180',"小明")
a.color[0]="blue"
console.log(a)
console.log(new Person('小红'))