//小米面试题
function batchAction(action, idList, notify) {
    let url = 'time/<id>'
    for (let i = 0; i < idList.length; i++) {
        url = url.repalce('<id>', idList[i]);
        fetch(url, {
            method: action
        }).then(res => {
            notify(idList[i], 'success', res)
        }).catch((error) => {
            notify(idList[i], 'fail', error)
        })
    }
}

function notify(id, type, res) {
    return {
        id,
        type,
        res
    }

}
// @param {Function} action 调用方式 `action(id)` ，其内部会发一个请求到服务器，
// 并返回一个promise，当服务器返回成功时，promise进入fulfilled状态，
// 当服务器返回失败时，promise进入rejected状态
// @param {Array.String} idList
// @param {Function} notify 每当服务器处理完一个id后（不管返回成功还是失败），
// 通过此函数通知外界对应id的处理结果。比如 `notify(id, 'success')` 或 `notify(id, 'fail')`
// @return {Promise} 当服务器对 `idList` 中的所有id都进行了处理后（不管处理结果是成功
// 还是失败），此promise进入fulfilled状态
function batchAction(action, idList, notify) {
    let i = 0,
        len = idList.length;
    var callback = function () {
        if (i >= len) {
            return Promise.resolve()
        }
    }
    while (idList.length > 0) {
        let id = idList.shift();
        action(id).then(() => {
            notify(id, 'success');
            callback();
            i++;
        }).catch(() => {
            notify(id, 'fail');
            callback();
            i++
        })
    }
}






function batchAction(action, idList, notify) {
    let url = 'time/<id>'
    for (let i = 0; i < idList.length; i++) {
        url = url.repalce('<id>', idList[i]);
        fetch(url, {
            method: action
        }).then(res => {
            notify(idList[i], 'success', res)
        }).catch((error) => {
            notify(idList[i], 'fail', error)
        })
    }
}

function notify(id, type, res) {
    return {
        id,
        type,
        res
    }

}

// 计算斐波那契数列的第n项
// f(n) = f(n-1) + f(n -2)
// f(0) = 1
// f(1) = 1
function fib(n) {
    let res;
    if (n == 0 || n == 1) {
        return 1
    }
    for (let i = n; i >= 2; i--) {
        res = fib(n - 1) + fib(n - 2);
    }
    return res
}

/* <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        li:nth-last-child(2n) {
            list-style: none;
            height: 20px;
            background: rgb(95, 92, 92);


        }
        li:nth-last-child(n) {
            list-style: none;
            height: 20px;
            background: #fff;
        }


        .out-box {
            display: flex;
            height: 30px;
        }

        .trangle {
            height: 0;
            width: 0;
            border: 30px solid rgb(73, 71, 71);
        }

        .quare {
            width: 100px;
        }
    </style>
</head>

<body>
    <div class="out-box">
        <div class='trangle'>

        </div>
        <div class="quare">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</body>

</html> */




var i = 0;

function f1(callback) {
    setTimeout(() => {
        console.log(1);
        callback();
        i++;
    }, 500)
}

function f2(callback) {
    setTimeout(() => {
        console.log(2);
        callback();
        i++;
    }, 100)
}

function f3(callback) {
    setTimeout(() => {
        console.log(3);
        i++;
        callback()
    }, 200)
}

function sameRequest(list, n) {
    var j = 0;
    var request = function () {
        if (j >= n) {
            if (list.length) {
                list.shift()(request)
            }
        }
    }
    while (list.length && j < n) {
        list.shift()(request);
        j++;
    }
}
sameRequest([f1, f2, f3], 2)

function deepClone(obj) {
    var objs;
    for (let prop in obj) {
        if (typeof obj[prop] === "object" && obj[prop]) {
            objs = Arrar.isArray(obj[prop]) ? [] : {};
            objs[prop] = deepClone(obj[prop])
        } else {
            return obj[prop]
        }
    }
    return objs
}
//最简单的深拷贝
function deepClone(obj) {
    if (typeof obj === "object" && obj) {
        var objs = Array.isArray(obj) ? [] : {};
        for (let prop in obj) {
            objs[prop] = deepClone(obj[prop])
        }
        return objs
    } else {
        return obj
    }
}

function throttle(fn, wait) {
    var timer = null,
        preTime = 0;
    return function (...arg) {
        var _that = this;
        var nowTime = new Date().getTime();
        if (timer) {
            clearTimeout(timeer)
        }
        if(nowTime-preTime>=wait){
            fn.apply(_that,arg);
            preTime=nowTime;
        }else {
            timer=setTimeout(() => {
                fn.apply(_that,arg)
            },nowTime-preTime)
        }
    }
}
