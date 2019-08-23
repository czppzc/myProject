//构造函数继承
function Parent(){
    this.name='parent';
}
Parent.prototype.age=18;
function Child(){
    Parent.call(this);
    this.type='child'
}
var child=new Child()
console.log(child.age);


//原型链继承 
function Parent1(){
    this.name='parent';
}
Parent1.prototype.mes={id:100};
function Child1(){
   // Parent.call(this);
    this.type='child'
}
Child1.prototype=new Parent1();
var child1=new Child1();
var child2=new Child1()
var child3=new Child1()
child1.mes.id=99;
console.log(child2.mes.id);

//组合继承
 function Parent2(){
    this.name='parent';
}
Parent2.prototype.age=18;
function Child2(){
    Parent2.call(this);
    this.type='child'
}

//Child2.prototype=new Parent2();
Child2.prototype=Object.create(Parent2.prototype);
child2.prototype.constructor=Child2;
var child1=new Child1()
console.log(child1.age);
