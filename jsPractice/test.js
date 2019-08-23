/* var twoSum = function(nums, target, callback) {
    console.log('进来了')
    var hash = {};
    setTimeout(() => {
        callback([1, 2, 3], [4, 5, 2])
    }, 1000)
    console.log('第一次回答')
    console.time()
    for (var i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }
    for (var j = 0; j < nums.length; j++) {
        var temp = target - nums[j];
        console.log(hash.hasOwnProperty(temp))
        if (hash.hasOwnProperty(temp) && hash[temp] > j) {
            return [j, hash[temp]]
        }
    }
}; */
//console.log(twoSum([1, 2, 4], 6))
var addTwoNumbers = function(l1, l2) {
    console.log('我也进来了')
    var sum = [],
        c = false;
    while (l1.length || l2.length || c) {
        c += ~~l1.shift() + ~~l2.shift();
        sum.push(c % 10);
        c = c > 9
    }
    console.log(sum)
    console.timeEnd()
    return sum
};
//addTwoNumbers([2, 4, 9], [5, 6, 4])
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0
    }
    var sArr = s.split('');
    var hashObj = {},
        length = 1,
        max = 1;
    for (var i = 0; i < sArr.length; i++) {
        length = 1;
        hashObj = {};
        hashObj[sArr[i]] = true;
        for (var j = i + 1; j < sArr.length; j++) {
            if (!hashObj[sArr[j]]) {
                hashObj[sArr[j]] = true
                length = length + 1;
                if (length > max) {
                    console.log(length, 100)
                    max = length;
                }
            } else {
                if (length > max) {
                    max = length;
                }
                break
            }
        }
    }
    console.log('')
    return max
};
//lengthOfLongestSubstring('swf')
function mytest(callback) {
    console.log('我开始运行了')
    setTimeout(() => {
        callback([2, 7, 8], 9, addTwoNumbers)
    }, 1000)
}
//mytest(twoSum)
var longestCommonPrefix = function(strs) {
    if (strs.length == 1) {
        return strs[0]
    }
    var maxStrLen = Math.max(...strs.map(v => v.length)),
        hashObj = {},
        maxSameStr = '';
    for (var i = 0; i < maxStrLen; i++) {
        for (var j = 0; j < strs.length; j++) {
            hashObj[strs[j].substring(0, i + 1)] = true;
        }
        console.log(i)
        console.log(maxStrLen)
        console.log(Object.keys(hashObj).length == 1)
        if ((Object.keys(hashObj).length > 1 && i != maxStrLen - 1) || (i == maxStrLen - 1 && (Object.keys(hashObj).length == 1))) {
            console.log('测试')
            maxSameStr = strs[0].substring(0, i == maxStrLen - 1 ? i + 1 : i)
            break
        } else {
            delete hashObj[strs[0].substring(0, i + 1)]
        }
    }
    console.log(maxSameStr)
    return maxSameStr

};
//longestCommonPrefix(['asd', 'asb', 'asc'])
var removeDuplicates = function(nums) {
    var newArr = [];
    nums.reduce((pre, v) => {
        if (!pre[v]) {
            newArr.push(v)
            pre[v] = true;
        }
        return pre
    }, {});
    console.log(newArr)
    return newArr
};
//removeDuplicates([1, 1, 2])
var twoSum = function(nums, target) {
    nums.sort((a, b) => {
        return a - b
    });
    var l = 0,
        m = nums.length - 1,
        arr = [];
    while (l < m) {
        console.log('进来了', nums[l], nums[m])
        console.log(nums[l] + nums[m])
        if (nums[l] + nums[m] == target) {
            console.log('进来了')
            arr.push(l, m)
        }
        if (nums[l] + nums[m] > target) {
            m--
        } else if (nums[l] + nums[m] == target) {
            m--;
            l++;
        } else {
            l++
        }
        console.log(l, m)
    }
    console.log(arr)
    return arr
};
//twoSum([1, 2, 7, 13], 9)
var longestPalindrome = function(s) {
    let strArr = s.split('')
    if (s) {
        return findPalindrome(strArr, strArr.length)
    } else {
        return ""
    }

    function isPalindrome(strArr) {
        return strArr.every((item, idx, s) => {
            return s[idx] === s[Math.abs(s.length - idx) - 1]
        })
    }

    function findPalindrome(arr, length) {
        let longstr
        let step = arr.length - length + 1
        console.log(step, '测试')
        for (let i = 0; i < step; i++) {
            let sliceArr = arr.slice(i, length + i)
            if (isPalindrome(sliceArr)) {
                longstr = sliceArr.join('')
            }
        }
        if (longstr) {
            return longstr
        } else {
            length--
            return findPalindrome(arr, length)
        }
    }
};
longestPalindrome('asdasfdytsifyeytyiewoydawdasyed')
    //链表
var removeNthFromEnd = function(head, n) {
    var i = 1;
    var p = head;
    while (p.next) {
        p = p.next;
        i++;
    }
    var m = head,
        temp = null
    console.log(i)
    if (n == i) {
        head = head.next
        return head
    }
    for (j = 0; j < i - n - 1; j++) {
        m = m.next;
    }
    temp = m.next;
    m.next = temp.next
    return head
};
var removeNthFromEnds = function(head, n) {
        let table = [head],
            current = head;
        while (current.next !== null)
            table.push(current = current.next);
        if (table.length === 1) return null; //链表只有一个元素
        if (table.length === n) head = table[1]; //删除第一个元素
        else if (n === 1) table[table.length - 2].next = null; //删除最后一个元素
        else table[table.length - n - 1].next = table[table.length - n + 1]; //修改链
        return head;
    }
    //递归 哈希表 指针 滑动窗口 动态规划 
    //有序链表合并
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    }
    var res;
    if (l1.val >= l2.val) {
        res = l2;
        res.next = mergeTwoLists(l1, l2.next)
    } else {
        res = l1;
        res.next = mergeTwoLists(l1.next, l2)
    }
    return res
};