//找出二叉树上和为num的路径 路径指的是从头结点到叶子结点的路径
//叶子结点：左子树右子树都为空的结点
var res = [], path = [];
function findPath(root, targetNum) {
    find(root, targetNum)
    return res
}
function find(root, sum) {
    if (root == null) return
    path.push(root.val)
    if (!root.left && !root.right && sum == root.val) {
        res.push([].concat(path))
    } else {
        if (root.left) {
            find(root.left, sum - root.val)
        }
        if (root.right) {
            find(root.right, sum - root.val)
        }
    }
    console.log(path.pop())
}
var tree = {
    val: 10,
    left: {
        val: 5,
        right: {
            val: 7,
            left: null,
            right: null
        }
    },
    right: {
        val: 12,
        left: {
            val: 4,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: null
        },
        right: null
    },

}
console.log(findPath(tree, 22))
//console.log(res)
function throttle(fn, time) {
    var lastTime = 0;
    var timer = null
    time = time || 500;
    return function (...arg) {
        var nowTime = new Date().getTime();
        if (timer) {
            clearTimeout(timer)
        }
        if (nowTime - lastTime > time) {
            fn.apply(null, arg);
            lastTime = nowTime;
        } else {
            timer = setTimeout(() => {
                fn.apply(null, arg)
            }, time)
        }
    }
}
//反转数组找值 时间复杂度必须是O(log2^n)
function searchReturnNum(arr, target) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((high - low) / 2) + low;
        if (arr[mid] == target) return mid
        if (arr[low] < arr[mid]) {
            if (arr[low] <= target && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (arr[mid] < target && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1
}
//防抖
function debounce(fn, time) {
    time = time || 500;
    var timer = null
    return function (...arg) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(null, arg)
        }, time)
    }
}
function finds(root, sum) {
    if (!root) return
    path.push(root.val)
    if (!root.left && !root.right && sum == root.val) {
        res.push([].concat(path))

    } else {
        if (root.left) {
            finds(root.left, sum - root.val)
        }
        if (root.right) {
            finds(root.right, sum - root.val)
        }
    }
    path.pop()
}
//查找反转数组中是否有这个元素
function searchTarget(arr, target) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((high - low) / 2) + low; //在这已经判断了arr[mid]是不是目标值，所以后面不用mid这个边界，但是前后边界一等要注意
        if (arr[mid] == target) return mid
        //总是找到一段有序的数组来进行二分，找到目标值所在的有序的数组
        if (arr[mid] > arr[low]) {
            if (arr[low] <= target && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }

        } else {
            if(arr[mid]<target&&target<=arr[high]){
                low=mid+1;
            }else {
                high=mid-1;
            }
        }
    }
    return -1
}


