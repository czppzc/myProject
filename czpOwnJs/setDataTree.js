/* let data = [{
        id: 3,
        val: "3",
        parentId: 1
    },
    {
        id: 2,
        val: '2',
        parentId: 0
    }, {
        id: 5,
        val: '5',
        parentId: 2
    }, {
        id: 6,
        val: '6',
        parentId: 2
    }, {
        id: 4,
        val: '4',
        parentId: 1
    }, {
        id: 1,
        val: '1',
        parentId: 0
    }
]

function convert(data) {
    const m = new Map();
    data.forEach(v => {
        m.set(v.id, v);
        v.children = []
    });
    data.forEach(v => {
        const parent = m.get(v.parentId);
        if (parent) {
            parent.children.push(v)
        }
    })
    console.log(m)
    return m

}
convert(data) */


let data = [{
        id: 3,
        val: '3',
        parentId: 1
    },
    {
        id: 2,
        val: '2',
        parentId: 0
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
    {
        id: 4,
        val: '4',
        parentId: 1
    },
    {
        id: 1,
        val: '1',
        parentId: 0
    },
]



function treeish(arr, parent) {
    if (!parent) parent = {
        id: 0,
        val: '0'
    };
    let children = arr.filter(obj => obj.parentId === parent.id);
    children = convert(children)
    parent.children = children;
    if (children.length !== 0) {
        children.forEach(child => treeish(arr, child));
    }
    return parent;
}

function convert(children) {
    return children.map(child => {
        delete child.parentId;
        child.children = [];
        return child;
    });
}
console.log(treeish(data))