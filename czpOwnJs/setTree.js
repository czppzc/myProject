let data = [{
        id: 0,
        val: 0,
        parentId: null
    },{
        id: 1,
        val: '1',
        parentId: 0
    },
    {
        id: 2,
        val: '2',
        parentId: 0
    },
     {
        id: 3,
        val: '3',
        parentId: 1
    },
    {
        id: 4,
        val: '4',
        parentId: 1
    },
    {
        id: 5,
        val: '5',
        parentId: 2
    },
    {
        id: 6,
        val: '6',
        parentId: 2
    },
    {
        id: 7,
        val: '7',
        parentId: 2
    },
  
    
]
let datas = [{
    id: 0,
    val: 0,
    parentId: null
},{
    id: 1,
    val: '1',
    parentId: 0
},
{
    id: 2,
    val: '2',
    parentId: 1
},
 {
    id: 3,
    val: '3',
    parentId: 2
},
{
    id: 4,
    val: '4',
    parentId: 3
},
{
    id: 5,
    val: '5',
    parentId: 4
},
{
    id: 6,
    val: '6',
    parentId: 5
},
{
    id: 7,
    val: '7',
    parentId: 6
},


]
let headNode = {
    id: 0,
    value: '0'
}
//自己使用递归来尝试做一下
//1.直接获取ID,在parentId为一对多的情况下，我们最好将parentid直接取出来，通过id对比逐层取出
function setAnotherTree(data, parent) {
    let tree = {};
    data.filter(v => v.id == parent).forEach(element => {
        tree.id = element.id;
        tree.val = element.val;
        //在这一步直接取出下一级ID
        tree.children = data.filter(v => v.parentId == element.id).map(ele => {
            return setAnotherTree(data, ele.id)
        })
    });
    return tree
}
//自己使用递归来尝试做一下
//2.使用parentID，在parentId为一对一的情况下，可以使用parentid来进行处理，因为此时不会因为parentid
//对应过多而造成前面的赋值被后面的所覆盖的情况
function setAnotherTree1(data, parent) {
    let tree = {};
    data.filter(v => v.parentId == parent).forEach(element => {
        tree.id = element.id;
        tree.val = element.val;
        //在这一步直接取出下一级ID
        tree.children = [].concat(setAnotherTree1(data,element.id))
    });
    return Object.keys(tree).length?tree:[]
}
function setTree(data, parent) {
    let children = data.filter(v => v.parentId == parent.id);
    if (!children.length) {
        return parent
    }
    parent.children = children.map(v => {
        v.children = [],
            delete v.parentId
        return v
    })
    if (parent.children.length > 0) {
        parent.children = parent.children.map(v => {
            return setTree(data, v)
        })
    }
    return parent
}
console.log(setAnotherTree1(datas, null))

let newArr = data.reduce((pre, v) => {
    pre.push(v)
    return pre
}, [])
//console.log(newArr)