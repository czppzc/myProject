let arr = [{
    id: '1',
    name1: '水果',
    name2: '热带',
    name3: '椰子'
}, {
    id: '2',
    name1: '水果',
    name2: '热带',
    name3: '凤梨'
}, {
    id: '3',
    name1: '水果',
    name2: '寒带',
    name3: '冰茶'
}, {
    id: '4',
    name1: '海鲜',
    name2: '热带',
    name3: '带鱼'
}, {
    id: '5',
    name1: '海鲜',
    name2: '热带',
    name3: '胖鱼'
}, {
    id: '6',
    name1: '海鲜',
    name2: '寒带',
    name3: '龙虾'
}];
let needArr = [{
    type: '水果',
    children: [{
        type: '热带',
        children: [{
            id: '1',
            name1: '水果',
            name2: '热带',
            name3: '椰子'
        }, {
            id: '2',
            name1: '水果',
            name2: '热带',
            name3: '凤梨'
        }, ]
    }, {
        type: '寒带',
        children: [{
            id: '3',
            name1: '水果',
            name2: '寒带',
            name3: '冰茶'
        }, ]
    }, ]
}, {
    type: '海鲜',
    children: [{
        type: '热带',
        children: [{
            id: '4',
            name1: '海鲜',
            name2: '热带',
            name3: '带鱼'
        }, {
            id: '5',
            name1: '海鲜',
            name2: '热带',
            name3: '胖鱼'
        }, ]
    }, {
        type: '寒带',
        children: [{
            id: '6',
            name1: '海鲜',
            name2: '寒带',
            name3: '龙虾'
        }]
    }, ]
}];

function transTree(data, i) {
    if (i >= 3) {
        return data
    }
    let arr = [];
    let content = {};
    data.forEach(v => {
        if (content.type != v[`name${i}`]) {
            if (Object.keys(content).length > 0) {
                content = {}
            }
            content.type = v[`name${i}`];
            content.children = [].concat(transTree(data.filter(v => v[`name${i}`] == content.type), i + 1));
            arr.push(content);
        }
    });
    return arr
}
var pre=null;
while(p){
    var temp=p.next;
    p.next=pre;
    pre=p;
    p=temp
}
function Parent(){
    this.name=name;
    this.age=age;
}
Parent.prototype.test=function(){
    console.log(this.name)
}
function Parent1(type,sex){
    Parent.call(this,'小明',18);
    this.type=type;
    this.sex=sex;
}