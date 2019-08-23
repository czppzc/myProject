/* var a=/[^1[3|5|8][0-9]{9,9}||^021-{0,1}[0-9]{8,8}]/
var b=/^1[3|5|8][0-9]{9,9}/
console.log(a.test('19297087183')) */
//console.log(b.test('2'))
/* var num = 0;
function flat(arr, depth) {
   // console.log(num)
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i],'testsss')
        console.log(num,'次数')
        if (Array.isArray(arr[i])) {
            if (num <= depth-1) {
                num++
                res=res.concat(flat(arr[i], depth));
            } else {
                num = 0;
                res.push(arr[i])
               
            }
        } else {
            res.push(arr[i])
        }
    }
    num=0;
    return res
}
var arr=[[1,[2]],3,[[1,2,3,[4,5,6]]],[4,5,[6,7,8]]]
console.log(flat(arr,1),"test") */
//console.log([1,2,3].concat([4,5,[6,7,8]]))
/* var a = /[^1[3|5|8][0-9]{9,9}||^021-{0,1}[0-9]{8,8}]/
var b = /^1[3|5|8][0-9]{9,9}$/
var c = /^[0-9]{6,9}$/
var d = /^021-{0,1}[0-9]{8,8}$/
var e = `
小明 18 教师 12000
小红 21 销售员 6000
小刚 22 程序员 28000
` */
/* var f=Symbol('test')
var obj1={
    [f]:'测试',
    name:'小明',
    age:18,
    salary:18000
}
for(var prop in obj1){
    console.log(prop)
} */
//console.log(obj1,'测试')
/* console.log(obj1[f]) //symbol定义的属性只能使用中括号来访问，不能直接使用obj.属性来控制
var data = e.trim().split(/\n/).map(v => v.split(/\s/))
var obj={}
data.map(v => {
    obj.name=v[0];
    obj.age=v[1];
    obj.profess=v[2];
    obj.salary=v[3]
}) */
/* console.log(obj)
console.log(data)
console.log(b.test('13297081833'))
console.log(d.test('02112345678'), "测试") */
function traverseTree(node,callback){
    if(!node) return
    traverseTree(node.left,callback)
    callback(node.value)
    traverseTree(node.right,callback)
    
}
var tree={
    value:1,
    left:{
        value:2,
        left:{
            value:4,
            left:{
                value:8,
                left:null,
                right:null,
            },
            right:{
                value:9,
                left:null,
                right:null
            }
        },
        right:{
            value:5,
            left:{
                value:10,
                left:null,
                right:null,
            },
            right:{
                value:11,
                left:null,
                right:null,
            }
        },
    },
    right:{
        value:3,
        left:{
            value:6,
            left:{
                value:12,
                left:null,
                right:null,
            },
            right:{
                value:13,
                left:null,
                right:null,
            }
        },
        right:{
            value:7,
            left:{
                value:14,
                left:null,
                right:null,
            },
            right:{
                value:15,
                left:null,
                right:null,
            }
        },
    }
}
traverseTree(tree,(val) => {console.log(val)})